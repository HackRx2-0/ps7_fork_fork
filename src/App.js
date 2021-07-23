import MAppBar from "./Components/MAppBar";
import LandingPage from "./Pages/LandingPage";
import EditorPage from "./Pages/EditorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./UI/Loading";
import DropZonePage from "./Pages/DropZonePage";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/editor'>
            <EditorPage />
          </Route>
          <Route path='/Uploads'>
            <MAppBar />
            <div style={{ marginBottom: "40px" }} />
            <DropZonePage />
          </Route>
          <Route path='/'>
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
