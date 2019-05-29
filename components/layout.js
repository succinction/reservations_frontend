import Header from "./header";

const Layout = props => (
  <main>
    <Header isMobile={props.isMobile} />
    {props.children}
    <style jsx>{`
      h1,
      p {
        font-family: "Arial";
      }

      main {
        padding: 20;
        background-image: url("${
          props.backgroundImage[props.isMobile ? 1 : 2]
        }");
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </main>
);

export default Layout;
