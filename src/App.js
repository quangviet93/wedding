import { Routes, Route } from "react-router-dom";
import Home from "./components/index";
import Content from "./components/content/index";

function App() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route path="/content" element={<Content />} />
    </Routes>
  );
}

export default App;
