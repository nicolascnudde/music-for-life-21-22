/**
 * Index file for the shirts
 */
// Imports of the shirt components
import ShirtCrewNeck from './ShirtCrewNeck';
import ShirtGraphic from './ShirtGraphic';
import ShirtHoodie from './ShirtHoodie';
import ShirtOverall from './ShirtOverall';
import ShirtScoopNeck from './ShirtScoopNeck';
import ShirtSweaterCollar from './ShirtSweaterCollar';
import ShirtVNeck from './ShirtVNeck';

// Interface
interface ShirtProps {
  color: string;
  kind: string;
}

// Main eyebrows component
const Shirt = ({ color, kind }: ShirtProps) => {
  switch (kind) {
    case 'graphic':
      return <ShirtGraphic color={color} />;
    case 'hoodie':
      return <ShirtHoodie color={color} />;
    case 'overall':
      return <ShirtOverall color={color} />;
    case 'scoopNeck':
      return <ShirtScoopNeck color={color} />;
    case 'sweaterCollar':
      return <ShirtSweaterCollar color={color} />;
    case 'vNeck':
      return <ShirtVNeck color={color} />;
    case 'crewNeck':
    default:
      return <ShirtCrewNeck color={color} />;
  }
};

// Export
export default Shirt;
