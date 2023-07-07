import "./App.css";
import Layout from "./Components/Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Portfolio from "./Pages/Portfolio/Portfolio"
import CV from "./Pages/CV/CV";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cv" element={<CV />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
