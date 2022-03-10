function Tweet(props) {
    return (
      <div>
        <span>{props.name}, </span>
        <span>@{props.username}</span>
        <p>{props.date}</p>
        <p></p>
        <p><b>{props.message}</b></p>
        <p></p>
      </div>
    );
  }