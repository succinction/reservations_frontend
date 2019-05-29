import Link from 'next/link'

const Header = props => (
  <div>
    <h1>Post Reservations Hotel</h1>
    <span>
      <Link href="/" ><button> Home</button></Link>
      {' '}
      <Link href="/portal" ><button>Portal</button></Link>
    </span>
    <style jsx>{`
      h1 {
        font-family: "Arial";
        padding: 20;
        color: ${!!props.isMobile ? "#39f" : "#000"};
      }
    `}</style>
  </div>
);

export default Header;
