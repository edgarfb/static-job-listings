import React from "react";
import "./App.css";
import Card from "./components/Card";
import dataJson from "./data.json";
import ButtonClose from "./components/UI/ButtonClose";
import DisplayTags from "./components/DisplayTags";

function App() {
  // paths to load logos
  const path = process.env.PUBLIC_URL;
  const [selectedTags, setSelectedTagsTags] = React.useState([]);
  const [companiesData, setCompaniesData] = React.useState([]);

  // This little guy makes the magic :)
  const filterCompanies = () => {
    let companies = dataJson;
    selectedTags.forEach((tag) => {
      companies = companies.filter(
        (data) =>
          data.role === tag ||
          data.level === tag ||
          data.languages.includes(tag) ||
          data.tools.includes(tag)
      );
    });
    return companies;
  };

  React.useEffect(() => setCompaniesData(filterCompanies()), [selectedTags]);

  const selectTagHandler = (target) => {
    // create an array with the target on each click
    if (selectedTags.includes(target)) {
      return;
    }
    setSelectedTagsTags((prevState) => {
      return [...prevState, target];
    });
  };

  const clickTagHandler = (target) => {
    selectTagHandler(target);
  };

  const btnCloseHandler = (target) => {
    // Close and remove the tag-btn
    setSelectedTagsTags((prev) => {
      return prev.filter((p) => p !== target);
    });
  };

  const clearTagsHandler = () => {
    // reset the selectedTags state
    setSelectedTagsTags((prev) => {
      return [];
    });
    // reset the companiesData state
    setCompaniesData((prev) => {
      return [...dataJson];
    });
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <DisplayTags selectedTags={selectedTags} onClear={clearTagsHandler}>
          {selectedTags.length > 0 &&
            selectedTags.map((tag) => (
              <ButtonClose label={tag} onClick={btnCloseHandler} />
            ))}
        </DisplayTags>
        {companiesData.map((data) => {
          const tags = [
            data.role,
            data.level,
            ...data.languages,
            ...data.tools,
          ];
          return (
            <Card
              new={data.new}
              featured={data.featured}
              onClickTag={clickTagHandler}
              logo={`${path}${data.logo}`}
              key={data.id}
              name={data.company}
              position={data.position}
              postedAt={data.postedAt}
              contract={data.contract}
              location={data.location}
              languages={tags}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
