/**
 * Imports
 */
import React, { useState, ChangeEvent, useRef, useCallback } from 'react';
import { toPng, toSvg } from 'html-to-image';
import styled from 'styled-components';

import Layout from '../../components/layout/Layout';
import AvatarGen from '../../components/avatar-generator';
import { IntroSection } from '../../components/sections';
import { Button, SubmitButton } from '../../components/buttons/Buttons';
import { colors, getAvatarsByCategory, types } from '../../data/avatar';

// Fetch the data
const getStaticProps = async () => {
  return {
    props: {
      types: types,
      colors: colors,
      kinds: [],
    },
  };
};

/**
 * Styles
 */
const ParentContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const ContainerStyles = styled.div`
  display: grid;
  grid-template-areas:
    'gen gen'
    'opt opt';
  row-gap: ${({ theme }) => theme.spacing.medium};
  column-gap: 0rem;
  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    grid-template-areas:
      'gen gen opt'
      'gen gen opt';
    row-gap: 0rem;
    column-gap: ${({ theme }) => theme.spacing.medium};
  }
`;
const DownloadOptStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.regular};
  margin-top: ${({ theme }) => theme.spacing.regular};
`;

const GeneratorStyles = styled.div`
  grid-area: gen;
  padding: ${({ theme }) => theme.spacing.large};
`;

const GenContainerStyles = styled.div`
  border: solid 1px #eee;
  padding: ${({ theme }) => theme.spacing.large};
`;

const OptionsStyles = styled.div`
  grid-area: opt;
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.regular};
    color: ${({ theme }) => theme.colors.green};
    text-transform: uppercase;
  }
  h4 {
    text-transform: capitalize;
    padding-bottom: ${({ theme }) => theme.spacing.small};
    text-transform: uppercase;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    li {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

      margin: 1rem 1rem 1rem 0;
      width: 100%;
      flex-grow: 1;
      @media (min-width: ${({ theme }) => theme.devices.tablet}) {
        width: 45%;
      }
    }
  }

  ol {
    display: grid;
    li {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
  }
  button {
    font-size: ${({ theme }) => theme.fontSizes.regular};
    margin: 0.5rem 0.5rem 0.5rem 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.small};
    border: 1px solid ${({ theme }) => theme.colors.white};
    cursor: pointer;
    text-transform: capitalize;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.dark};
  }
  .buttonList {
    display: flex;
    flex-wrap: wrap;
  }
  .typeStyles {
    h3 {
      margin-top: ${({ theme }) => theme.spacing.large};
    }
  }
`;

/**
 * Component
 */
const GeneratorPage = () => {
  const [generatorConfig, setGeneratorConfig] = useState<any | any>({});
  const printRef = useRef<HTMLDivElement | any>();
  const avatarList = getAvatarsByCategory(); // the key/values

  // Download as PNG function
  const handleDownloadPng = useCallback(() => {
    if (printRef.current === null) return;

    toPng(printRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'avatar.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [printRef]);

  // Download as SVG function
  const handleDownloadSvg = useCallback(() => {
    if (printRef.current === null) return;

    toSvg(printRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'avatar.svg';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [printRef]);

  const handleGeneratorConfig = (kind: string, value: string) => {
    generatorConfig[kind] = value;
    setGeneratorConfig({ ...generatorConfig });
  };

  // Colors

  return (
    <Layout title="Avatar Generator">
      <IntroSection
        title="Avatar Generator"
        text="Be who you want to be. Create your own avatar, download it after being amazing and donating to De Warmste Week 2022 and don't forget to use it on social media! ;)"
      />

      <ParentContainerStyles>
        <ContainerStyles>
          <div>
            <GenContainerStyles>
              <GeneratorStyles ref={printRef}>
                <AvatarGen {...generatorConfig} />
              </GeneratorStyles>
            </GenContainerStyles>
            <DownloadOptStyles>
              <SubmitButton
                onClick={handleDownloadPng}
                color="#f46ebe"
                title="send"
                type="submit"
              >
                DOWNLOAD AS PNG
              </SubmitButton>
              <SubmitButton
                onClick={handleDownloadSvg}
                color="#2941ab"
                title="send"
                type="submit"
              >
                DOWNLOAD AS SVG
              </SubmitButton>
            </DownloadOptStyles>
          </div>
          <OptionsStyles>
            <div>
              <h3>Skin Color</h3>
              {colors &&
                colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={(e) =>
                      handleGeneratorConfig(color.color, color.value)
                    }
                  >
                    {color.name}
                  </button>
                ))}
            </div>

            <div className="typeStyles">
              {/* The loop kind and kind value */}
              <h3>Types</h3>
              {avatarList && (
                <ul>
                  {avatarList.map((avatar) => (
                    <>
                      <li key={avatar.key}>
                        <h4>{avatar.key}</h4>
                        {/* avatar.key avatar.value */}
                        {avatar.values && (
                          <ol className="buttonList">
                            {avatar.values.map((value) => (
                              <button
                                key={value}
                                onClick={() =>
                                  handleGeneratorConfig(avatar.key, value)
                                }
                              >
                                {value}
                              </button>
                            ))}
                          </ol>
                        )}
                      </li>
                    </>
                  ))}
                </ul>
              )}
            </div>
          </OptionsStyles>
        </ContainerStyles>
      </ParentContainerStyles>
    </Layout>
  );
};

/**
 * Export
 */
export default GeneratorPage;
