import bgMobile from "./images/bg-header-mobile.svg";
import "./App.css";
import Card from "./components/Card";
import dataJson from "./data.json";

function App() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="App">
      <header className="App-header">
        <img src={bgMobile} className="App-logo" alt="logo" />
      </header>
      {dataJson.map((data) => {
        return (
          <Card
            logo={`${path}${data.logo}`}
            key={data.id}
            name={data.company}
            position={data.position}
            languages={data.languages}
          />
        );
      })}
    </div>
  );
}

export default App;
