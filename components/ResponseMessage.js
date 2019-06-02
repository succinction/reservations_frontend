const ResponseMessage = props => {
  {console.log(props)}
  return (
    <div>
      {props.message !== "" && (
        <div>
          <h1>{props.message.title}</h1>
          <p>ID: {props.message._id}</p>
          <p>Name: {props.message.name}</p>
          <p>Hotel: {props.message.hotel}</p>
          <p>Arrival Date: {props.message.arrivalDate}</p>
          <p>Departure Date: {props.message.departureDate}</p>
          {/* <pre>{JSON.stringify(props.message)}</pre> */}
        </div>
      )}
      <style jsx>{`
        pre,
        h1 {
          font-family: "Arial";
          padding: 20;
          color: #fff;
        }
        div {
          background: #19f;
        }
      `}</style>
    </div>
  );
};

export default ResponseMessage;
