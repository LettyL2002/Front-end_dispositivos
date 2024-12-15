import { z } from "zod";

// src/models/Libro.ts

export const LibroSchema = z.object({
  título: z.string(),
  añoEdición: z.number(),
  disponible: z.boolean(),
  autor: z.string().optional(),
});

export type Libro = z.infer<typeof LibroSchema>;
