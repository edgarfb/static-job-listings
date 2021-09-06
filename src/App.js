import React from "react";
import "./App.css";
import Card from "./components/Card";
import dataJson from "./data.json";
import ButtonClose from "./components/UI/ButtonClose";

function App() {
  const path = process.env.PUBLIC_URL;
  const [selectedTags, setSelectedTagsTags] = React.useState([]);
  const [companiesData, setCompaniesData] = React.useState([]);
  
  const clickTagHandler = (content, id) => {
    if(selectedTags.includes(content)) {
      return;
    };
    setSelectedTagsTags((prevState) => {
      return [...prevState, content];
    });
    setCompaniesData(prev => {
      let filtered = dataJson.filter(data => data.languages.includes(content) ||
              data.tools.includes(content) ||
              data.position.includes(content))
      let test = filtered.filter(f => console.log('F',f));
      
      return [...prev, ...filtered];
    }) 
    
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
      <div>{selectedTags.length > 0 && selectedTags.map(tag => <ButtonClose label={tag}/>)}</div>
      <header className="App-header"></header>
      {companiesData.length === 0 && initialList}
      {companiesData.length > 0 && companiesList}
    </div>
  );
}

export default App;
