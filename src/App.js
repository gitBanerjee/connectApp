import { Route } from "react-router-dom";
import Stopwatch from "./components/Stopwatch";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/stopwatch" exact>
          <Stopwatch />
        </Route>
        <Route path="/todo" exact>
          <Todo />
        </Route>
      </main>
    </div>
  );
}

export default App;
