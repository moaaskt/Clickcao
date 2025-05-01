import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dogs, { defaultDogs } from '../data/dogs'; // Importação correta

export default function Racas() {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [dogsList, setDogsList] = useState(dogs);

  // Atualiza quando o localStorage muda
  useEffect(() => {
    const loadDogs = () => {
      const savedDogs = localStorage.getItem('dogsData');
      if (savedDogs) {
        const parsedDogs = JSON.parse(savedDogs);
        // Mescla com defaultDogs, evitando duplicatas por ID
        const mergedDogs = [
          ...parsedDogs,
          ...defaultDogs.filter(
            defaultDog => !parsedDogs.some(savedDog => savedDog.id === defaultDog.id)
          )
        ];
        setDogsList(mergedDogs);
      } else {
        setDogsList([...defaultDogs]); // Usa os dados padrão
      }
    };

    const handleStorageChange = () => loadDogs();

    // Carrega inicialmente
    loadDogs();

    // Configura listeners
    window.addEventListener('dogsUpdated', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('dogsUpdated', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const breeds = [...new Set(dogsList.map((dog) => dog.breed))];
  const dogsByBreed = selectedBreed 
    ? dogsList.filter((dog) => dog.breed === selectedBreed) 
    : [];

   return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 sm:px-6 lg:px-20 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cabeçalho */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          Raças Caninas
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore nossa coleção de doguinhos por raça. Clique em uma raça para ver todos os membros!
        </p>
      </motion.div>

      {/* Filtro de Raças */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {breeds.map((breed, index) => (
          <motion.button
            key={breed}
            onClick={() => setSelectedBreed(breed)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedBreed === breed
                ? 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/30'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-500'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {breed}
          </motion.button>
        ))}
      </motion.div>

      {/* Lista de Cães */}
      {selectedBreed && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
            {selectedBreed} <span className="text-white">({dogsByBreed.length})</span>
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dogsByBreed.map((dog, index) => (
              <motion.div
                key={dog.id}
                className="group bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-600"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <motion.img
                    src={dog.image}
                    alt={dog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-yellow-400 font-bold">ID: {dog.id}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-1">{dog.name}</h3>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                    <p className="text-gray-300">{dog.breed}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Rodapé */}
      {!selectedBreed && (
        <motion.div
          className="text-center mt-20 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>Selecione uma raça para ver os doguinhos</p>
        </motion.div>
      )}
    </motion.div>
  );
}