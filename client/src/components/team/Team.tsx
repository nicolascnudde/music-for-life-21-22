/**
 * Imports
 */
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

/**
 * Styles
 */
const MemberStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.regular};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Readex Pro', 'Open Sans', sans-serif;
  h3 {
    font-size: 1.953rem;
    line-height: 1.2;
  }
`;

const StyledImage = styled(Image)``;

const BioStyle = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  text-align: center;

  p {
    padding-top: ${({ theme }) => theme.spacing.small};
  }
`;

const SocialStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding: ${({ theme }) => theme.spacing.regular};
  }
`;

/**
 * Interfaces
 */
export interface Members {
  firstName: string;
  lastName: string;
  imageUrl: string;
  bio: string;
  linkedinUrl: string;
  gitUrl: string;
}

/**
 * Component
 */
const Team = ({
  firstName,
  lastName,
  imageUrl,
  bio,
  linkedinUrl,
  gitUrl,
}: Members) => {
  return (
    <MemberStyles>
      <StyledImage
        src={require(`./../../assets/images/team/${imageUrl}`)}
        height={300}
        width={300}
        objectFit="contain"
        alt={firstName}
      />

      <BioStyle>
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{bio}</p>
        <SocialStyle>
          <Link href={gitUrl}>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src={require(`./../../assets/images/git.svg`)}
                height={50}
                width={50}
                alt="Git hub"
              />
            </a>
          </Link>
          <Link href={linkedinUrl}>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src={require(`./../../assets/images/linkedin.svg`)}
                height={40}
                width={40}
                alt="linkedin"
              />
            </a>
          </Link>
        </SocialStyle>
      </BioStyle>
    </MemberStyles>
  );
};

/**
 * Export
 */
export default Team;
