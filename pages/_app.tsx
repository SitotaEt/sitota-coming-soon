import { Global, css } from "@emotion/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Global
        styles={
          css`
          html,
          body {
            padding: 0px;
            margin: 0px;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;