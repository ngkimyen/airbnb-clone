import { Route, Routes } from "react-router-dom";
import ExperienceOnlinePage from "./features/ExperienceOnlinePage";
import ExperiencePage from "./features/ExperiencePage";

import FindingPage from "./features/FindingPage/FindingPage";
import HomePage from "./features/HomePage";

import SearchProvider from "./store/SearchProvider";

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/airbnb-clone/" element={<HomePage />} />
        <Route path="/airbnb-clone/flexible-finding" element={<FindingPage />} />
        <Route path="/airbnb-clone/experience" element={<ExperiencePage />} />
        <Route path="/airbnb-clone/experience/online" element={<ExperienceOnlinePage />} />
      </Routes>
    </SearchProvider>
  );
}

export default App;
