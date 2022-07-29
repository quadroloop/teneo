import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Teneo</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://seofeo-wc-casestudy.vercel.app/css/styles.css"
          rel="stylesheet"
        />
      </Head>
      {props.children}
    </>
  );
};

export default Layout;
