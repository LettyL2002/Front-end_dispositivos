// src/pages/LibroDetalles.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Libro } from "../models/Libro";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { apiService } from "../service/apiService";

const LibroDetalles: React.FC = () => {
  const { titulo } = useParams<{ titulo: string }>();
  const [libro, setLibro] = useState<Libro | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLibroDetalles = async () => {
      try {
        if (titulo) {
          const libroData = await apiService.buscarLibroPorTitulo(titulo);
          setLibro(libroData);
        }
      } catch (err) {
        setError(`No se pudo cargar los detalles del libro: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchLibroDetalles();
  }, [titulo]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!libro) return <div>Libro no encontrado</div>;

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-pink-800">{libro.título}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>Año de Edición: {libro.añoEdición}</p>
          <Badge
            variant={libro.disponible ? "default" : "destructive"}
            className="bg-pink-500 hover:bg-pink-600"
          >
            {libro.disponible ? "Disponible" : "No Disponible"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default LibroDetalles;
