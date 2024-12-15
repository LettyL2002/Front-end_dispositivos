import { z } from "zod";

// src/models/Autor.ts

export const AutorSchema = z.object({
  nombre: z.string(),
  nacionalidad: z.string(),
  nacimiento: z.string(),
});

export type Autor = z.infer<typeof AutorSchema>;
