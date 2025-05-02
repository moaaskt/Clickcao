// data/dogs.js

// Dados padrão (agora exportado explicitamente)
export const defaultDogs = [
  { id: 1, name: 'Bolt', breed: 'Vira-lata', image: 'https://i.ibb.co/Lz90kzRg/image-fx-36.png' },
  { id: 2, name: 'Luna', breed: 'Vira-lata', image: 'https://i.ibb.co/Rp14dj9q/image-fx-18.png' },
  { id: 3, name: 'Max', breed: 'Vira-lata', image: 'https://i.ibb.co/8D7zxnPt/image-fx-31.png' },
  { id: 4, name: 'Nina', breed: 'Vira-lata', image: 'https://i.ibb.co/WNPCtkGR/image-fx-26.png' },
  { id: 5, name: 'Thor', breed: 'Vira-lata', image: 'https://i.ibb.co/LTyXXmP/image-fx-24.png' },
  { id: 6, name: 'Bella', breed: 'Vira-lata', image: 'https://i.ibb.co/27mWjmb3/image-fx-33.png ' },
  { id: 7, name: 'Sol', breed: 'Vira-lata', image: ' https://i.ibb.co/nqjsKN3H/image-fx-21.png' }
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