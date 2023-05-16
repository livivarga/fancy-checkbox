import FancyCheckbox from "./FancyCheckbox";
import WelcomeCard from "./WelcomeCard";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.title}</h1>
        <p>{props.hello}</p>
      </header>
      <section className="cards">
        <WelcomeCard name="Ash" message={`${props.hello} Gota catch'em all`} />  {/* <-- Element */}
        <WelcomeCard name="Liliana" message="Quenn of the dead" />
        <WelcomeCard name="Superman" message="Secretley Clack Kent" />
      </section>
      <FancyCheckbox />
      <FancyCheckbox />
      <FancyCheckbox />
      <FancyCheckbox />
      <FancyCheckbox />
      <FancyCheckbox />
      <FancyCheckbox />
      <FancyCheckbox />
      <FancyCheckbox />
      <FancyCheckbox />
      <FancyCheckbox />
    </div>
  );
}

export default App;
