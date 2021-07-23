import MAppBar from "./Components/MAppBar";
import LandingPage from "./Pages/LandingPage";
import EditorPage from "./Pages/EditorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./UI/Loading";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/editor">
            <EditorPage />
          </Route>
          <Route path="/">
            <MAppBar />
            <LandingPage />
          </Route>
        </Switch>
      </Router>
      <Loading />
    </div>
  );
}

export default App;
