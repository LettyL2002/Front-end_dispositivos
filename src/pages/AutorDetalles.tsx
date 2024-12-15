// src/pages/AutorDetalles.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Autor } from "../models/Autor";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { apiService } from "../service/apiService";

const AutorDetalles: React.FC = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const [autor, setAutor] = useState<Autor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAutorDetalles = async () => {
      try {
        if (nombre) {
          const autorData = await apiService.buscarAutorPorNombre(nombre);
          setAutor(autorData);
        }
      } catch (err) {
        setError(`No se pudo cargar los detalles del autor ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchAutorDetalles();
  }, [nombre]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!autor) return <div>Autor no encontrado</div>;

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-pink-800">{autor.nombre}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            <strong>Nacionalidad:</strong> {autor.nacionalidad}
          </p>
          <p>
            <strong>Año de Nacimiento:</strong> {autor.nacimiento}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AutorDetalles;
