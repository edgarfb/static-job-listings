import React from "react";
import "./App.css";
import Card from "./components/Card";
import dataJson from "./data.json";

function App() {
  const path = process.env.PUBLIC_URL;
  const [selectedTags, setSelectedTagsTags] = React.useState([]);
  const [dataJsonFiltered, setDataJsonFilteded] = React.useState([]);
  const clickTagHandler = (content) => {
    setSelectedTagsTags((prevState) => {
      return prevState.includes(content) ? prevState : [...prevState, content];
    });
    if (!selectedTags.includes(content)) {
      setDataJsonFilteded((prev) => {
        let filtered = dataJson.filter(
          (data) =>
            data.languages.includes(content) ||
            data.tools.includes(content) ||
            data.position.includes(content)
        );
        return [...prev, ...filtered];
      });
    }
  };
  const initialList = dataJson.map((data) => {
    const tags = [data.role, data.level, ...data.languages, ...data.tools];

    return (
      <Card
        onClickTag={clickTagHandler}
        logo={`${path}${data.logo}`}
        id={data.id}
        key={data.id}
        name={data.company}
        position={data.position}
        languages={tags}
      />
    );
  });
  const filteredList = dataJsonFiltered.map((data) => {
    const tags = [data.role, data.level, ...data.languages, ...data.tools];

    return (
      <Card
        onClickTag={clickTagHandler}
        logo={`${path}${data.logo}`}
        id={data.id}
        key={data.id}
        name={data.company}
        position={data.position}
        languages={tags}
      />
    );
  });

  return (
    <div className="App">
      <div>{selectedTags}</div>
      <header className="App-header"></header>
      {selectedTags.length === 0 && initialList}
      {dataJsonFiltered.length > 0 && filteredList}
    </div>
  );
}

export default App;
