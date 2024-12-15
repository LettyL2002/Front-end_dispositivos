import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { SearchDialog } from "../components/SearchDialog";

const Home: React.FC = () => {
  const [isLibroSearchOpen, setIsLibroSearchOpen] = useState(false);
  const [isAutorSearchOpen, setIsAutorSearchOpen] = useState(false);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-pink-800">Libros Disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Explora nuestra colección de libros disponibles para préstamo.
            </p>
            <Link to="/libros">
              <Button className="bg-pink-500 hover:bg-pink-600">
                Ver Libros
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-pink-800">Autores</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Descubre los autores de nuestra biblioteca.</p>
            <Link to="/autores">
              <Button className="bg-pink-500 hover:bg-pink-600">
                Ver Autores
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-pink-800">Búsqueda</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Busca libros por título o autores por nombre.</p>
            <div className="space-x-2">
              <Button 
                className="bg-pink-500 hover:bg-pink-600"
                onClick={() => setIsLibroSearchOpen(true)}
              >
                Buscar Libros
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-500 text-pink-500"
                onClick={() => setIsAutorSearchOpen(true)}
              >
                Buscar Autores
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <SearchDialog 
        isOpen={isLibroSearchOpen}
        onClose={() => setIsLibroSearchOpen(false)}
        type="libro"
      />
      <SearchDialog 
        isOpen={isAutorSearchOpen}
        onClose={() => setIsAutorSearchOpen(false)}
        type="autor"
      />
    </>
  );
};

export default Home;
