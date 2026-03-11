// App.js
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GranitePage from "./pages/GranitePage";
import MarblePage from "./pages/MarblePage";
import TilesPage from "./pages/TilesPage";
import StonePage from "./pages/StonePage";


function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/granite/:slug" element={<GranitePage />} />
        <Route path="/marble/:slug" element={<MarblePage />} />
        <Route path="/tiles/:slug" element={<TilesPage />} />
        <Route path="/stone/:slug" element={<StonePage />} />
        
      </Route>
    </Routes>
  );
}

export default App;
