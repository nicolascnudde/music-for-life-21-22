/**
 * Crew Neck shirt
 */
const ShirtScoopNeck = ({ color }: { color: string }) => {
  return (
    <svg
      id="Clothing_Shirt_Scoop_Neck"
      data-name="Clothing/Shirt Scoop Neck"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="264"
      height="110"
      viewBox="0 0 264 110"
    >
      <defs>
        <clipPath id="shirtpath">
          <path
            id="Clothes"
            d="M32,110v-8.949A72.049,72.049,0,0,1,83.534,32,18.075,18.075,0,0,0,83,36.348a19.61,19.61,0,0,0,3.89,11.474A34.321,34.321,0,0,0,97.5,57.193a58.756,58.756,0,0,0,15.734,6.317A78.928,78.928,0,0,0,132.5,65.828a78.926,78.926,0,0,0,19.267-2.318A58.756,58.756,0,0,0,167.5,57.193a34.321,34.321,0,0,0,10.608-9.371A19.611,19.611,0,0,0,182,36.348a18.048,18.048,0,0,0-.456-4.018A71.928,71.928,0,0,1,232,101.052V110Z"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Group_8" data-name="Group 8">
        <g id="Clothes-2" data-name="Clothes">
          <path
            id="Clothes-3"
            data-name="Clothes"
            d="M200,78H0V69.052A72.05,72.05,0,0,1,51.534,0,18.064,18.064,0,0,0,51,4.348a19.611,19.611,0,0,0,3.89,11.475A34.328,34.328,0,0,0,65.5,25.193a58.773,58.773,0,0,0,15.734,6.318A78.966,78.966,0,0,0,100.5,33.827a78.964,78.964,0,0,0,19.267-2.317A58.777,58.777,0,0,0,135.5,25.193a34.329,34.329,0,0,0,10.608-9.37A19.61,19.61,0,0,0,150,4.348,18.045,18.045,0,0,0,149.544.33,71.927,71.927,0,0,1,200,69.052V78Z"
            transform="translate(32 32)"
            fill="#e6e6e6"
          />
          <path
            id="Clothes-4"
            data-name="Clothes"
            d="M200,78H0V69.052A72.05,72.05,0,0,1,51.534,0,18.064,18.064,0,0,0,51,4.348a19.611,19.611,0,0,0,3.89,11.475A34.328,34.328,0,0,0,65.5,25.193a58.773,58.773,0,0,0,15.734,6.318A78.966,78.966,0,0,0,100.5,33.827a78.964,78.964,0,0,0,19.267-2.317A58.777,58.777,0,0,0,135.5,25.193a34.329,34.329,0,0,0,10.608-9.37A19.61,19.61,0,0,0,150,4.348,18.045,18.045,0,0,0,149.544.33,71.927,71.927,0,0,1,200,69.052V78Z"
            transform="translate(32 32)"
            fill="none"
          />
        </g>
        <g
          id="Mask_Group_8"
          data-name="Mask Group 8"
          clipPath="url(#shirtpath)"
        >
          <g id="_Color_Fabric" data-name="↳ Color Fabric">
            <g id="_Color" data-name="🖍Color">
              <rect
                id="_Color-2"
                data-name="🖍Color"
                width="264"
                height="110"
                fill={color}
              />
              <rect
                id="_Color-3"
                data-name="🖍Color"
                width="264"
                height="110"
                fill="none"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ShirtScoopNeck;
