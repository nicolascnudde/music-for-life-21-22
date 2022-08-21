/**
 * Index file for the avatar generator
 */
// Imports
import React from 'react';
import styled from 'styled-components';

import Body from './body';
// import Hair from './Hair';

// import Eyebrows from './Eyebrows';
import Hair from './hair';
import Eyes from './eyes';
import Glasses from './glasses';
import Nose from './nose';
import Mouth from './mouths';
import FacialHair from './facial-hair';
import Shirt from './shirts';

// Styles
const StyledAvatarGen = styled.div`
  position: relative;
`;

const Container = styled.g`
  position: absolute;
  left: 50%;
  width: 50%;
  height: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

const TopContainer = styled(Container)`
  top: 10%;
`;

const BottomContainer = styled(Container)`
  bottom: 0;
`;

const StyledFace = styled.g`
  display: block;
  position: relative;
  width: 100%;
`;

const StyledComponent = styled.g`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledHair = styled(StyledComponent)`
  top: -60px;
`;

const StyledEyebrows = styled(StyledComponent)`
  top: 40px;
`;

const StyledEyes = styled(StyledComponent)`
  top: 40px;
`;

const StyledGlasses = styled(StyledComponent)`
  top: 23px;
  z-index: 1;
`;

const StyledNose = styled(StyledComponent)`
  top: 60px;
`;

const StyledMouth = styled(StyledComponent)`
  top: 90px;
`;

const StyledFacialHair = styled(StyledComponent)`
  top: 12px;
`;

const StyledShirt = styled(StyledComponent)`
  bottom: 0;
`;

// Interface
interface AvatarGenProps {
  bodyColor: string;
  eyebrows: string;
  eyebrowsColor: string;
  eyes: string;
  facialHair: string;
  facialHairColor: string;
  glasses: string;
  hair: string;
  hairColor: string;
  mouth: string;
  shirt: string;
  shirtColor: string;

  topColor: string;
}

// Main avatar generator component
const AvatarGen = ({
  bodyColor = '#EDB98A',
  hair = 'dreads',
  hairColor = '#77311D',
  eyebrows = 'Eyebrows1',
  eyebrowsColor = 'black',
  eyes = 'default',
  glasses = 'none',
  mouth = 'default',
  facialHairColor = 'darkbrown',
  facialHair = 'none',
  shirt = 'crewNeck',
  shirtColor = '#9287FF',
}: AvatarGenProps) => {
  return (
    <StyledAvatarGen>
      {/* <SvgTop> */}
      <Body color={bodyColor} />

      <TopContainer>
        <StyledFace>
          <StyledHair>
            <Hair color={hairColor} kind={hair} />
          </StyledHair>

          <StyledEyebrows>
            {/* <Eyebrows color={eyebrowsColor} kind={eyebrowsKind} /> */}
          </StyledEyebrows>

          <StyledEyes>
            <Eyes kind={eyes} />
          </StyledEyes>

          <StyledGlasses>
            <Glasses kind={glasses} />
          </StyledGlasses>

          <StyledNose>
            <Nose />
          </StyledNose>

          <StyledMouth>
            <Mouth kind={mouth} />
          </StyledMouth>

          <StyledFacialHair>
            <FacialHair color={facialHairColor} kind={facialHair} />
          </StyledFacialHair>
        </StyledFace>
      </TopContainer>

      <BottomContainer>
        <StyledShirt>
          <Shirt color={shirtColor} kind={shirt} />
        </StyledShirt>
      </BottomContainer>
      {/* </SvgTop> */}
    </StyledAvatarGen>
  );
};

export default AvatarGen;
