// src/services/apiService.ts
import axios from "axios";
import { Libro } from "../models/Libro";
import { Autor } from "../models/Autor";

const BASE_URL = "https://bibliotecaapi-three.vercel.app/api";

export const apiService = {
  async getLibrosNoDisponibles(): Promise<Libro[]> {
    const response = await axios.get(`${BASE_URL}/libros/nodisponibles/`);
    return response.data;
  },

  async getLibrosDisponibles(): Promise<Libro[]> {
    const response = await axios.get(`${BASE_URL}/libros/disponibles/`);
    return response.data;
  },

  async getTodosLibros(): Promise<Libro[]> {
    const response = await axios.get(`${BASE_URL}/libros/`);
    return response.data;
  },

  async getTodosAutores(): Promise<Autor[]> {
    const response = await axios.get(`${BASE_URL}/autores/`);
    return response.data;
  },

  async buscarAutorPorNombre(nombre: string): Promise<Autor> {
    const response = await axios.get(`${BASE_URL}/autores/${nombre}`);
    return response.data;
  },

  async buscarLibroPorTitulo(titulo: string): Promise<Libro> {
    const response = await axios.get(`${BASE_URL}/libros/${titulo}`);
    return response.data;
  },
};
