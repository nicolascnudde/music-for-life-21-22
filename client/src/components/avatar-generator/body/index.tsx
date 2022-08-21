/**
 * Index file for the body component
 */
// Imports of the body component
import BodyDefault from './BodyDefault';

// Interface
interface BodyProps {
  color: string;
}

// Main body component
const Body = ({ color }: BodyProps) => {
  return <BodyDefault color={color} />;
};

// Export
export default Body;
