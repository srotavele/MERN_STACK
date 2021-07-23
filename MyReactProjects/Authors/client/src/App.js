import { Router } from "@reach/router";
import './App.css';
import ListAuthors from './components/ListAuthorsComp';
import CreateAuthor from "./components/CreateAuthorComponent";
import EditAuthor from "./components/EditAuthorComponent";

function App() {
  return (
    <div style={{padding: "20px"}}>
      <h1>Favorite Authors</h1>
      <Router>
        <ListAuthors path = "/"/>
        <CreateAuthor path = "/new"/>
        <EditAuthor path = "/edit/:author_id"/>
      </Router>
    </div>
  );
}

export default App;
