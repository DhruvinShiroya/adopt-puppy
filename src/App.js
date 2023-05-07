import "./App.css";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode , useState } from "react";
import WrapperDetails from "./DetailsOld";
import ThemeContext from "./ThemeContext";
function App() {
  const theme = useState("orange");

  return (
    
    <StrictMode>
      <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Link to={"/"} >
        <h1> Adopt Me! </h1>
        </Link>
        <Routes>
          <Route path="/details/:id" element={<WrapperDetails />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
    </StrictMode>
  );
}

export default App;
