import styled from 'styled-components'

const PageTitle = props => (
  <div>
    {/* <H2 props={props} >{props.children}</H2> */}
    <H2  >{props.children}</H2>
  </div>
);

export default PageTitle;

const H2 = styled.h2`
        font-family: "Arial";
        text-align: center;
        background: #39c;
        width: 100%;
        margin-top: 6px;
`