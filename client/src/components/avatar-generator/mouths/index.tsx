/**
 * Index file of the mouth components
 */
// Imports of the mouths components
import MouthConcerned from './MouthConcerned';
import MouthDisbelief from './MouthDisbelief';
import MouthGrimace from './MouthGrimace';
import MouthSad from './MouthSad';
import MouthScreamOpen from './MouthScreamOpen';
import MouthSerious from './MouthSerious';
import MouthSmile from './MouthSmile';
import MouthDefault from './MouthDefault';
import MouthTongue from './MouthTongue';
import MouthTwinkle from './MouthTwinkle';
import MouthVomit from './MouthVomit';

// Interface
interface MouthProps {
  kind: string;
}

// Main mouth component
const Mouth = ({ kind }: MouthProps) => {
  switch (kind) {
    case 'concerned':
      return <MouthConcerned />;
    case 'disbelief':
      return <MouthDisbelief />;
    case 'grimace':
      return <MouthGrimace />;
    case 'sad':
      return <MouthSad />;
    case 'screamOpen':
      return <MouthScreamOpen />;
    case 'serious':
      return <MouthSerious />;
    case 'smile':
      return <MouthSmile />;
    case 'tongue':
      return <MouthTongue />;
    case 'twinkle':
      return <MouthTwinkle />;
    case 'vomit':
      return <MouthVomit />;
    case 'default':
    default:
      return <MouthDefault />;
  }
};

// Export
export default Mouth;
