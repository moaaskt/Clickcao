// data/dogs.js

// Dados padrão (agora exportado explicitamente)
export const defaultDogs = [
  {
    id: 1,
    name: "Bolt",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/Lz90kzRg/image-fx-36.png",
  },
  {
    id: 2,
    name: "Luna",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/Rp14dj9q/image-fx-18.png",
  },
  {
    id: 3,
    name: "Max",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/8D7zxnPt/image-fx-31.png",
  },
  {
    id: 4,
    name: "Nina",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/WNPCtkGR/image-fx-26.png",
  },
  {
    id: 5,
    name: "Thor",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/LTyXXmP/image-fx-24.png",
  },
  {
    id: 6,
    name: "Bella",
    breed: "Pitbull",
    image: "https://i.ibb.co/nMtfbGws/image-fx-41.png ",
  },
  {
    id: 7,
    name: "Flip",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/Q7WM2MT1/image-fx-51.png ",
  },
  {
    id: 8,
    name: "Toninho",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/LXJP86FN/image-fx-50.png ",
  },
  {
    id: 9,
    name: "Brad",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/pjLhjjvh/image-fx-49.png",
  },
  {
    id: 10,
    name: "Tom",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/6cNZtFT3/image-fx-47.png ",
  },
  {
    id: 11,
    name: "Xico",
    breed: "Vira-Lata",
    image: " https://i.ibb.co/dJbxBFXH/image-fx-45.png",
  },
  {
    id: 12,
    name: "Alfredo",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/GvZQmgc6/image-fx-44.png ",
  },
  {
    id: 13,
    name: "Fly",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/xt1GjNKZ/image-fx-39.png ",
  },
  {
    id: 14,
    name: "Carmem",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/F4CXSb7t/image-fx-43.png ",
  },
  {
    id: 15,
    name: "Godofredo",
    breed: "Golden",
    image: "https://i.ibb.co/wZMSSqPp/image-fx-37.png",
  },
  {
    id: 16,
    name: "Frida",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/hRXtWdbQ/image-fx-53.png",
  },
  {
    id: 17,
    name: "Hiana",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/vb9yJvT/Image-fx-12.png",
  },
  {
    id: 18,
    name: "Maria",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/ksZNdWYC/Image-fx-13.png",
  },
  {
    id: 19,
    name: "Manu",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/tM9F6BzQ/Image-fx-11.png",
  },
  {
    id: 20,
    name: "Patrick",
    breed: "Vira-Lata",
    image: "https://i.ibb.co/vCZzhkPc/Image-fx-10.png",
  },
];

// Função para carregar os cães
const loadDogs = () => {
  try {
    const savedDogs = localStorage.getItem("dogsData");
    return savedDogs ? JSON.parse(savedDogs) : [...defaultDogs];
  } catch (error) {
    console.error("Erro ao carregar cães:", error);
    return [...defaultDogs];
  }
};

// Exporta tanto a lista carregada quanto os defaults
export const dogs = loadDogs();
export default dogs;
