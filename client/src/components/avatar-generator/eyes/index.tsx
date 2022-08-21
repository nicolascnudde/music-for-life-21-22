/**
 * Index file for the eyes
 */
// Imports of the eyes components
import EyesClosed from './EyesClosed';
import EyesCry from './EyesCry';
import EyesDefault from './EyesDefault';
import EyesDizzy from './EyesDizzy';
import EyesEyeRoll from './EyesEyeRoll';
import EyesHappy from './EyesHappy';
import EyesHeart from './EyesHeart';
import EyesSide from './EyesSide';
import EyesSquint from './EyesSquint';
import EyesSurprised from './EyesSurprised';
import EyesWink from './EyesWink';
import EyesWinkWacky from './EyesWinkWacky';

// Interface
interface EyesProps {
  kind: string;
}

// Main eyes component
const Eyes = ({ kind }: EyesProps): any => {
  switch (kind) {
    case 'closed':
      return <EyesClosed />;
    case 'cry':
      return <EyesCry />;
    case 'dizzy':
      return <EyesDizzy />;
    case 'eyeRoll':
      return <EyesEyeRoll />;
    case 'happy':
      return <EyesHappy />;
    case 'heart':
      return <EyesHeart />;
    case 'side':
      return <EyesSide />;
    case 'squint':
      return <EyesSquint />;
    case 'surprised':
      return <EyesSurprised />;
    case 'wink':
      return <EyesWink />;
    case 'winkWacky':
      return <EyesWinkWacky />;
    case 'default':
    default:
      return <EyesDefault />;
  }
};

// Export
export default Eyes;
