import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';
dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
  [1, { priceInCents: 100, name: "Donate to MusicForLife by ArteveldeHogeschool" }],
]);

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async stripe(req, res): Promise<any> {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['bancontact'],
        mode: 'payment',
        line_items: req.body.items.map((item) => {
          const storeItem = storeItems.get(item.id)
          return {
            price_data: {
              currency: 'eur',
              product_data: {
                name: storeItem.name,
              },
              unit_amount: storeItem.priceInCents,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cancel`,
      });
      res.json({ url: session.url });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
