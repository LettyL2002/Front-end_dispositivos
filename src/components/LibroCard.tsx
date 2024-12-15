// src/components/LibroCard.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Libro } from "../models/Libro";
import { Badge } from "./ui/badge";

interface LibroCardProps {
  libro: Libro;
}

const LibroCard: React.FC<LibroCardProps> = ({ libro }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-pink-800">{libro.título}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
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

export default LibroCard;
