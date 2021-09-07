import React from "react";
import "./App.css";
import Card from "./components/Card";
import dataJson from "./data.json";
import ButtonClose from "./components/UI/ButtonClose";

function App() {
  const path = process.env.PUBLIC_URL;
  const [selectedTags, setSelectedTagsTags] = React.useState([]);
  const [companiesData, setCompaniesData] = React.useState([...dataJson]);
  console.log(selectedTags)
  console.log(companiesData)
  const clickTagHandler = (content) => {
    
    if(selectedTags.includes(content)) {
      return;
    };
    setSelectedTagsTags((prevState) => {
      return [...prevState, content];
    });
    
    
  };    
  const btnCloseHandler = (target) => {
    setSelectedTagsTags(prev => {
      return prev.filter(p => p !== target);
    })
  }
  
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
  const companiesList = companiesData.map((data) => {
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
      <div>{selectedTags.length > 0 && selectedTags.map(tag => <ButtonClose onClick={btnCloseHandler} label={tag}/>)}</div>
      <header className="App-header"></header>
      {companiesData.length === 0 && initialList}
      {companiesData.length > 0 && companiesList}
    </div>
  );
}

export default App;
