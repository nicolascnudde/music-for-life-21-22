/**
 * Main Application
 */
// Imports
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import '../styles/fonts.css';
import '../styles/keyframes.css';
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";

// Component
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

// Export
export default MyApp;
