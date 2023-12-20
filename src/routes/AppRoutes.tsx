import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Hangman from "../pages/Hangman/Hangman";
// import Hangman from "src/pages/Hangman";
// import Home from "src/pages/Home";

export default function AppRoutes() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="Hangman" element={<Hangman />} />
    </Route>
  </Routes>
</BrowserRouter>
);}

