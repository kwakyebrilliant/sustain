import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ActionPage from "./components/ActionPage";
import AboutPage from "./components/AboutPage";
import SinglePage from "./components/SinglePage";
import TermsPage from "./components/TermsPage";
import PrivacyPage from "./components/PrivacyPage";
import FaqPage from "./components/Faq";
import Summary from "./dashboard/Pages/Summary";
import Action from "./dashboard/Pages/Action";
import Support from "./dashboard/Pages/Support";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/action" exact element={<ActionPage />} />
      <Route path="/about" exact element={<AboutPage />} />
      <Route path="/singlepage" exact element={<SinglePage />} />
      <Route path="/termspage" exact element={<TermsPage />} />
      <Route path="/privacypage" exact element={<PrivacyPage />} />
      <Route path="/faqpage" exact element={<FaqPage />} />
      <Route path="/summary" exact element={<Summary />} />
      <Route path="/useraction" exact element={<Action />} />
      <Route path="/support" exact element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
