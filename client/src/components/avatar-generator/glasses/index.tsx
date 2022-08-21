/**
 * Index file for the glasses
 */
// Imports of the glasses components
import GlassesKurt from "./GlassesKurt";
import GlassesPrescriptionOne from "./GlassesPrescriptionOne";
import GlassesPrescriptionTwo from "./GlassesPrescriptionTwo";
import GlassesRound from "./GlassesRound";
import GlassesWayfarer from "./GlassesWayfarer";
import Sunglasses from "./GlassesSunglasses";

// Interface
interface GlassesProps {
  kind: string;
}

// Main glasses component
const Glasses = ({ kind }: GlassesProps) => {
  switch (kind) {
    case 'kurt': return <GlassesKurt />;
    case 'prescriptionOne': return <GlassesPrescriptionOne />;
    case 'prescriptionTwo': return <GlassesPrescriptionTwo />;
    case 'round': return <GlassesRound />;
    case 'wayfarers': return <GlassesWayfarer />;
    case 'sunglasses': return <Sunglasses />;
    case 'none':
    default:
      return <></>;
  }
};

// Export
export default Glasses;
