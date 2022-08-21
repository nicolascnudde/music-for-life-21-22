/**
 * Index file for the facial hair
 */
// Imports of the different facial hair
import BeardLight from './BeardLight';
import BeardMajestic from './BeardMajestic';
import BeardMedium from './BeardMedium';
import MustacheFancy from './MustacheFancy';
import MustacheMagnum from './MustacheMagnum';

// Interface
interface FacialHairProps {
  kind: string;
  color: string;
}

// Component
const FacialHair = ({ kind, color }: FacialHairProps): any => {
  switch (kind) {
    case 'beardLight':
      return <BeardLight color={color} />;
    case 'beardMedium':
      return <BeardMedium color={color} />;
    case 'beardMajestic':
      return <BeardMajestic color={color} />;
    case 'mustacheFancy':
      return <MustacheFancy color={color} />;
    case 'mustacheMagnum':
      return <MustacheMagnum color={color} />;
    case 'none':
    default:
      return <></>;
  }
};

// Export
export default FacialHair;
