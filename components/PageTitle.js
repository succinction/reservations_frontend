const PageTitle = props => (
  <div>
    <h2>{props.children}</h2>
    <style jsx>{`
      h2 {
        font-family: "Arial";
        text-align: center;
        background: #39c;
        width: 100%;
        margin-top: 6px;

      }

      div {
        padding: 20;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
);

export default PageTitle;
