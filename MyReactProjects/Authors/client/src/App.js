import { Router } from "@reach/router";
import './App.css';
import ListAuthors from './components/ListAuthorsComp';
import CreateAuthor from "./components/CreateAuthorComponent";

function App() {
  return (
    <div style={{padding: "20px"}}>
      <h1>Favorite Authors</h1>
      <Router>
        <ListAuthors path = "/"/>
        <CreateAuthor path = "/new"/>  
      </Router>
    </div>
  );
}

export default App;
