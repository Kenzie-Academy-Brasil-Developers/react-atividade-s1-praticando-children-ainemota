import "./App.css";
import CenteredCard from "./components/Card/CenteredCard";
import Child from "./components/children/children";

function App() {
  const Aine = {
    title: "Aine",
    content: "Gosta de cachorros e pão de queijo. ",
  };
  const Pedro = {
    title: "Pedro",
    content: "Gosta de ir ao cinema e música eletrônica. ",
  };

  const Dyna = {
    title: "Dyna",
    content: "Gosta de pizza e Netflix.",
  };

  return (
    <div className="App">
      <CenteredCard>
        <Child title={Aine.title} content={Aine.content} />
        <Child title={Pedro.title} content={Pedro.content} />
        <Child title={Dyna.title} content={Dyna.content} />
      </CenteredCard>
    </div>
  );
}

export default App;
