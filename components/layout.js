import Header from "./header";
import Head from "./Head";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true
    };
    this.resizeHandler = this.resizeHandler.bind(this);
    this.breakpoint = 600;
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeHandler);
    this.resizeHandler();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  resizeHandler() {
    const resizeLayout = () => {
      if (this.state.isMobile !== window.innerWidth < this.breakpoint) {
        this.setState({
          isMobile: window.innerWidth < this.breakpoint
        });
      }
    };
    resizeLayout();
  }

  render() {
    return (
      <main>
        <Head isMobile={this.state.isMobile} />
        <Header isMobile={this.state.isMobile} />
        {this.props.render(this.state)}
      </main>
    );
  }
}

export default Layout;
