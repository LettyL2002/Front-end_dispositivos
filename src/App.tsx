import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LibrosList from "./pages/LibroList";
import { ThemeProvider } from "./components/ThemeProvider";
import LibroDetalles from "./pages/LibroDetalles";
import AutoresList from "./pages/AutoresList";
import AutorDetalles from "./pages/AutorDetalles";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-cream-50 text-pink-900">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/libros" element={<LibrosList />} />
              <Route path="/libros/:titulo" element={<LibroDetalles />} />
              <Route path="/autores" element={<AutoresList />} />
              <Route path="/autores/:nombre" element={<AutorDetalles />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
