import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { apiService } from "../service/apiService";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'libro' | 'autor';
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose, type }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    try {
      if (type === 'libro') {
        const libro = await apiService.buscarLibroPorTitulo(searchTerm);
        if (libro) {
          navigate(`/libros/${encodeURIComponent(searchTerm)}`);
          onClose();
        }
      } else {
        const autor = await apiService.buscarAutorPorNombre(searchTerm);
        if (autor) {
          navigate(`/autores/${encodeURIComponent(searchTerm)}`);
          onClose();
        }
      }
    } catch (error) {
        console.error(error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-pink-800">
            Buscar {type === 'libro' ? 'Libro' : 'Autor'}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder={`Ingrese ${type === 'libro' ? 'título del libro' : 'nombre del autor'}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            className="border-pink-500"
          />
          <Button 
            onClick={handleSearch}
            disabled={isSearching}
            className="bg-pink-500 hover:bg-pink-600"
          >
            {isSearching ? "Buscando..." : "Buscar"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
