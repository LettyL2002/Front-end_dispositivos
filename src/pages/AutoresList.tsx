// src/pages/AutoresList.tsx
import React, { useState, useEffect } from "react";
import { Autor } from "../models/Autor";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { apiService } from "../service/apiService";

const AutoresList: React.FC = () => {
  const [autores, setAutores] = useState<Autor[]>([]);
  const [filteredAutores, setFilteredAutores] = useState<Autor[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchAutores = async () => {
      const todosAutores = await apiService.getTodosAutores();
      setAutores(todosAutores);
      setFilteredAutores(todosAutores);
    };
    fetchAutores();
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = autores.filter((autor) =>
      autor.nombre.toLowerCase().includes(term.toLowerCase()),
    );
    setFilteredAutores(filtered);
  };

  return (
    <div className="space-y-6">
      <Input
        placeholder="Buscar autores..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="border-pink-300 focus:ring-pink-500"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAutores.map((autor) => (
          <Card
            key={autor.nombre}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-pink-800">{autor.nombre}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Nacionalidad: {autor.nacionalidad}</p>
              <p>Año de Nacimiento: {autor.nacimiento}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AutoresList;
