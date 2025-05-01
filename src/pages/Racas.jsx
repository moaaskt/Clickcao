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
      className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white px-4 sm:px-6 lg:px-20 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">Raças</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {breeds.map((breed, index) => (
          <motion.button
            key={breed}
            onClick={() => setSelectedBreed(breed)}
            className={`px-4 py-2 rounded-full border transition hover:bg-yellow-400 hover:text-black ${
              selectedBreed === breed ? 'bg-yellow-400 text-black' : 'border-yellow-400'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {breed}
          </motion.button>
        ))}
      </div>

      {selectedBreed && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Doguinhos da raça: {selectedBreed}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dogsByBreed.map((dog, index) => (
              <motion.div
                key={dog.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg text-black"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-60 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{dog.name}</h3>
                  <p className="text-gray-600">Raça: {dog.breed}</p>
                  <p className="text-gray-500 text-sm">ID: {dog.id}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}