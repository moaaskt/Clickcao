import { useState } from 'react';
import { motion } from 'framer-motion'; // <- import do framer-motion
import dogs from '../data/dogs';
import DogCard from '../components/DogCard';

export default function Home() {
  const [selectedDog, setSelectedDog] = useState(null);
  const [search, setSearch] = useState('');

  const filteredDogs = dogs.filter((dog) =>
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
          className="w-full p-3 rounded-lg text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredDogs.map((dog, index) => (
          <motion.div
            key={dog.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <DogCard dog={dog} onClick={setSelectedDog} />
          </motion.div>
        ))}
      </div>

      {/* Modal do dog */}
      {selectedDog && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white text-black rounded-2xl p-6 w-11/12 max-w-md relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-red-500"
              onClick={() => setSelectedDog(null)}
            >
              &times;
            </button>
            <img
              src={selectedDog.image}
              alt={selectedDog.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedDog.name}</h2>
            <p className="text-lg text-gray-700">{selectedDog.breed}</p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
