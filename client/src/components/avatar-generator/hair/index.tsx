/**
 * Index file for the facial hair
 */
// Imports of the different facial hair
import Caesar from './Caesar';
import Dreads from './Dreads';
import Eyepatch from './Eyepatch';
import Frizzle from './Frizzle';
import Hat from './Hat';
import Hijab from './Hijab';
import Turban from './Turban';
import HairBun from './HairBun';
import HairCurly from './HairCurly';
import HairStraightStrand from './HairStraightStrand';
import HairCurvy from './HairCurvy';
import HairFrida from './HairFrida';
import HairSides from './HairSides';
import HairFro from './HairFro';
import HairFroBand from './HairFroBand';
import LongHairBigHair from './LongHairBigHair';
import ShaggyMullet from './ShaggyMullet';
import ShaggyHair from './ShaggyHair';
import ShortCurly from './ShortCurly';
import ShortFlat from './ShortFlat';
import ShortHair from './ShortHair';
import CaesarSide from './CaesarSide';

// Interface
interface TopProps {
  kind: string;
  color: string;
}

// Component
const Hair = ({ kind, color }: TopProps): any => {
  switch (kind) {
    case 'caesar':
      return <Caesar color={color} />;
    case 'caesarSide':
      return <CaesarSide color={color} />;
    case 'dreads':
      return <Dreads color={color} />;
    case 'eyepatch':
      return <Eyepatch color={color} />;
    case 'frizzle':
      return <Frizzle color={color} />;
    case 'hat':
      return <Hat color={color} />;
    case 'hijab':
      return <Hijab color={color} />;
    case 'turban':
      return <Turban color={color} />;
    case 'hairBun':
      return <HairBun color={color} />;
    case 'hairCurly':
      return <HairCurly color={color} />;
    case 'hairCurvy':
      return <HairCurvy color={color} />;
    case 'hairFrida':
      return <HairFrida color={color} />;
    case 'hairFroBand':
      return <HairFroBand color={color} />;
    case 'hairFro':
      return <HairFro color={color} />;
    case 'hairSides':
      return <HairSides color={color} />;
    case 'hairStraightStrand':
      return <HairStraightStrand color={color} />;
    case 'hongHairBigHair':
      return <LongHairBigHair color={color} />;
    case 'shaggyMullet':
      return <ShaggyMullet color={color} />;
    case 'shaggyHair':
      return <ShaggyHair color={color} />;
    case 'shortCurly':
      return <ShortCurly color={color} />;
    case 'shortFlat':
      return <ShortFlat color={color} />;
    case 'shortHair':
      return <ShortHair color={color} />;
    case 'none':
    default:
      return <></>;
  }
};

// Export
export default Hair;
