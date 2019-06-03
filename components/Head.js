import Head from "next/head";

export default props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
          body { 
            background: #000;
            font: 11px menlo;
            color: #fff;
            background-image: url("${bgImage[props.isMobile ? 0 : 1]}");
          }
        `}</style>
  </div>
);

const bgImage = [
  "https://res.cloudinary.com/lastminute/image/upload/c_scale,w_630/q_auto/v1429779489/NYCBP_Exterior_2011_HR_ukzskh.jpg",
  "https://www.lastminute.com/hotels/img/city/New-York-NY-US.jpg?2.42.0-063942240519"
];
