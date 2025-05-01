// data/dogs.js

// Dados padrão (agora exportado explicitamente)
export const defaultDogs = [
  { id: 1, name: 'Bolt', breed: 'Husky', image: 'https://placedog.net/500/400?id=1' },
  { id: 2, name: 'Luna', breed: 'Labrador', image: 'https://placedog.net/500/400?id=2' },
  { id: 3, name: 'Max', breed: 'Pug', image: 'https://placedog.net/500/400?id=3' },
  { id: 4, name: 'Nina', breed: 'Golden Retriever', image: 'https://placedog.net/500/400?id=4' },
  { id: 5, name: 'Thor', breed: 'Pastor Alemão', image: 'https://placedog.net/500/400?id=5' },
  { id: 6, name: 'Bella', breed: 'Shih-tzu', image: 'https://placedog.net/500/400?id=6' },
  { id: 7, name: 'Bella2', breed: 'Shih-tzus', image: 'https://placedog.net/500/400?id=7' }
];

// Função para carregar os cães
const loadDogs = () => {
  try {
    const savedDogs = localStorage.getItem('dogsData');
    return savedDogs ? JSON.parse(savedDogs) : [...defaultDogs];
  } catch (error) {
    console.error('Erro ao carregar cães:', error);
    return [...defaultDogs];
  }
};

// Exporta tanto a lista carregada quanto os defaults
export const dogs = loadDogs();
export default dogs;