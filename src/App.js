import React from "react";
import "./App.css";
import Card from "./components/Card";
import dataJson from "./data.json";
import ButtonClose from "./components/UI/ButtonClose";
import { getRoles } from "@testing-library/dom";







function App() {
  const path = process.env.PUBLIC_URL;
  const [selectedTags, setSelectedTagsTags] = React.useState([]);
  const [companiesData, setCompaniesData] = React.useState([...dataJson]);
  console.log(companiesData)
  
  const selectTagHandler = (target) => {
    
    if(selectedTags.includes(target)) {
      return;
    };
    setSelectedTagsTags((prevState) => {
      return [...prevState, target];
    });
    
    
  };

 

  const clickTagHandler = (target) => {
    selectTagHandler(target);
    setCompaniesData((prev) => {
      return [...prev.filter(data => data.role === target || data.level ===  target || data.languages.includes(target))];
    })
  }

  const btnCloseHandler = (target) => {
    setSelectedTagsTags(prev => {
      return prev.filter(p => p !== target);
    });
    
  }
  
  
 

  return (
    <div className="App">
      {/* <div>{selectedTags.length > 0 && selectedTags.map(tag => <ButtonClose onClick={btnCloseHandler} label={tag}/>)}</div> */}
      <header className="App-header"></header>
      {selectedTags.length > 0 &&  selectedTags.map(tag => <ButtonClose label={tag} onClick={btnCloseHandler}/>)}
      {companiesData.map(data => {
        const tags = [data.role, data.level, ...data.languages, ...data.tools];
        return <Card
                  onClickTag={clickTagHandler}
                  logo={`${path}${data.logo}`}
                  id={data.id}
                  key={data.id}
                  name={data.company}
                  position={data.position}
                  languages={tags}
                />
      })}
    </div>
  );
}

export default App;
