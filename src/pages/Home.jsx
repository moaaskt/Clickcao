import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dogs, { defaultDogs } from '../data/dogs'; // Importação correta agora
import DogCard from '../components/DogCard';

export default function Home() {
  const [selectedDog, setSelectedDog] = useState(null);
  const [search, setSearch] = useState('');
  const [dogsList, setDogsList] = useState(dogs);

  useEffect(() => {
    const loadDogs = () => {
      const savedDogs = localStorage.getItem('dogsData');
      if (savedDogs) {
        const parsedDogs = JSON.parse(savedDogs);
        // Mescla garantindo que os cães padrão não sejam duplicados
        const mergedDogs = [
          ...parsedDogs,
          ...defaultDogs.filter(
            defaultDog => !parsedDogs.some(savedDog => savedDog.id === defaultDog.id)
          )
        ];
        setDogsList(mergedDogs);
      } else {
        setDogsList([...defaultDogs]);
      }
    };

    const handleDogsUpdated = () => loadDogs();

    // Carrega inicialmente
    loadDogs();

    // Configura listeners
    window.addEventListener('dogsUpdated', handleDogsUpdated);
    window.addEventListener('storage', handleDogsUpdated);

    return () => {
      window.removeEventListener('dogsUpdated', handleDogsUpdated);
      window.removeEventListener('storage', handleDogsUpdated);
    };
  }, []);


  // Filtra os cães baseado na busca
  const filteredDogs = dogsList.filter((dog) =>
    dog.name.toLowerCase().includes(search.toLowerCase()) ||
    dog.breed.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 sm:px-6 lg:px-20 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">
        Galeria de Doguinhos 🐶
      </h1>

      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Buscar por nome ou raça..."
          className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredDogs.length === 0 ? (
        <div className="text-center text-xl py-10">
          Nenhum doguinho encontrado com "{search}"
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredDogs.map((dog, index) => (
            <motion.div
              key={dog.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <DogCard 
                dog={dog} 
                onClick={() => setSelectedDog(dog)}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal de detalhes do dog */}
      {selectedDog && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedDog(null)}
        >
          <motion.div
            className="bg-white text-black rounded-2xl p-6 w-full max-w-md relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-red-500 hover:text-red-700"
              onClick={() => setSelectedDog(null)}
              aria-label="Fechar modal"
            >
              &times;
            </button>
            <img
              src={selectedDog.image}
              alt={selectedDog.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
              loading="lazy"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedDog.name}</h2>
            <p className="text-lg text-gray-700 mb-1">
              <span className="font-semibold">Raça:</span> {selectedDog.breed}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">ID:</span> {selectedDog.id}
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}