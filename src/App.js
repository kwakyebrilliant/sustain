import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ActionPage from "./components/ActionPage";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/action" exact element={<ActionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
