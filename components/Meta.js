import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Shopping Center",
  keywords: "online shopping, shopping",
  description: "Pick your needs",
};

export default Meta;
