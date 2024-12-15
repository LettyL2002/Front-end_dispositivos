import axios from 'axios';
import { Libro } from '../models/Libro';
import { Autor } from '../models/Autor';

export const apiService = {
  async getLibrosNoDisponibles(): Promise<Libro[]> {
    const response = await axios.get('/api/libros/nodisponibles/');
    return response.data;
  },

  async getLibrosDisponibles(): Promise<Libro[]> {
    const response = await axios.get('/api/libros/disponibles/');
    return response.data;
  },

  async getTodosLibros(): Promise<Libro[]> {
    const response = await axios.get('/api/libros/');
    return response.data;
  },

  async getTodosAutores(): Promise<Autor[]> {
    const response = await axios.get('/api/autores/');
    return response.data;
  },

  async buscarAutorPorNombre(nombre: string): Promise<Autor> {
    const response = await axios.get(`/api/autores/${nombre}`);
    return response.data;
  },

  async buscarLibroPorTitulo(titulo: string): Promise<Libro> {
    const response = await axios.get(`/api/libros/${titulo}`);
    return response.data;
  }
}

// Configure axios base URL
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || '';