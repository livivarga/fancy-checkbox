function WelcomeCard(props) { // <-- Component
  return (
    <article className="welcome-card">
      <h1>Hello {props.name}!!</h1>
      <p>{props.message}</p>
    </article>
  );
};

export default WelcomeCard;