import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-cyan-light-gray-1">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
