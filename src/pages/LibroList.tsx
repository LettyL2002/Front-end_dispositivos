// src/pages/LibrosList.tsx
import React, { useState, useEffect } from "react";
import { Libro } from "../models/Libro";
import LibroCard from "../components/LibroCard";
import { Input } from "../components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { apiService } from "../service/apiService";

const LibrosList: React.FC = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [filteredLibros, setFilteredLibros] = useState<Libro[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchLibros = async () => {
      const todosLibros = await apiService.getTodosLibros();
      setLibros(todosLibros);
      setFilteredLibros(todosLibros);
    };
    fetchLibros();
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = libros.filter((libro) =>
      libro.título.toLowerCase().includes(term.toLowerCase()),
    );
    setFilteredLibros(filtered);
  };

  return (
    <div className="space-y-6">
      <Input
        placeholder="Buscar libros..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="border-pink-300 focus:ring-pink-500"
      />

      <Tabs defaultValue="todos">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="disponibles">Disponibles</TabsTrigger>
          <TabsTrigger value="nodisponibles">No Disponibles</TabsTrigger>
        </TabsList>
        <TabsContent value="todos">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLibros.map((libro) => (
              <LibroCard key={libro.título} libro={libro} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="disponibles">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLibros
              .filter((libro) => libro.disponible)
              .map((libro) => (
                <LibroCard key={libro.título} libro={libro} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="nodisponibles">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLibros
              .filter((libro) => !libro.disponible)
              .map((libro) => (
                <LibroCard key={libro.título} libro={libro} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LibrosList;
