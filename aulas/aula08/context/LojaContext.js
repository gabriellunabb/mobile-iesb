import { createContext, useState } from "react";

const categoriasDb = [
  { id: 1, nome: "Restaurantes", icone: "food" },
  { id: 2, nome: "Bares", icone: "beer" },
  { id: 3, nome: "Lanchonetes", icone: "hamburger" },
  { id: 4, nome: "Pizzarias", icone: "pizza" },
  { id: 5, nome: "Sorveterias", icone: "ice-cream" },
  { id: 6, nome: "Restaurantes", icone: "food" },
  { id: 7, nome: "Bares", icone: "food" },
  { id: 8, nome: "Lanchonetes", icone: "food" },
  { id: 9, nome: "Pizzarias", icone: "food" },
  { id: 10, nome: "Sorveterias", icone: "food" },
  { id: 11, nome: "Restaurantes", icone: "food" },
  { id: 12, nome: "Bares", icone: "food" },
  { id: 13, nome: "Lanchonetes", icone: "food" },
  { id: 14, nome: "Pizzarias", icone: "food" },
];

const lojasDb = [
  { id: 1, nome: "Restaurante Asa Sul", nota: "4,9" },
  { id: 2, nome: "Restaurante Asa Norte", nota: "4,7" },
  { id: 3, nome: "Restaurante Tagua", nota: "4,8" },
  { id: 4, nome: "Bar Ceilandia", nota: "4,6" },
  { id: 5, nome: "Bar Sudoeste", nota: "4,5" },
  { id: 6, nome: "Lanchonete Gama", nota: "4,7" },
  { id: 7, nome: "Pizzaria Nucleo", nota: "5.0" },
  { id: 8, nome: "Restaurante Tagua", nota: "4,0" },
  { id: 9, nome: "Bar Sudoeste", nota: "4,6" },
];

const LojaContext = createContext();

const LojaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [lojas, setLojas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const carregarDados = () => {
    setCarregando(true);
    setTimeout(() => {
      setLojas(lojasDb);
      setCategorias(categoriasDb);
      setCarregando(false);
    }, 200);
  };

  const buscarLojas = (filtro) => {
    setCarregando(true);
    setTimeout(() => {
      setLojas(
        lojasDb.filter((loja) =>
          loja.nome.toLowerCase().includes(filtro.toLowerCase())
        )
      );
      setCarregando(false);
    }, 200);
  };

  return (
    <LojaContext.Provider
      value={{ lojas, categorias, carregarDados, carregando, buscarLojas }}
    >
      {children}
    </LojaContext.Provider>
  );
};

export { LojaContext, LojaProvider };
