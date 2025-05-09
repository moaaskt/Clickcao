import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dogs, { defaultDogs } from '../data/dogs';
import '../index.css'



export default function Home() {
  const [selectedDog, setSelectedDog] = useState(null);
  const [search, setSearch] = useState('');
  const [dogsList, setDogsList] = useState(dogs);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const loadDogs = () => {
      setIsLoading(true);
      const savedDogs = localStorage.getItem('dogsData');
      
      if (savedDogs) {
        const parsedDogs = JSON.parse(savedDogs);
        const mergedDogs = [
          ...parsedDogs,
          ...defaultDogs.filter(defaultDog => 
            !parsedDogs.some(savedDog => savedDog.id === defaultDog.id)
          )
        ];
        setDogsList(mergedDogs);
      } else {
        setDogsList([...defaultDogs]);
      }
      
      setTimeout(() => setIsLoading(false), 500);
    };
  
    const handleDogsUpdated = () => loadDogs();
  
    loadDogs();
  
    window.addEventListener('dogsUpdated', handleDogsUpdated);
    window.addEventListener('storage', handleDogsUpdated);
  
    return () => {
      window.removeEventListener('dogsUpdated', handleDogsUpdated);
      window.removeEventListener('storage', handleDogsUpdated);
    };
  }, []);

  const filteredDogs = dogsList.filter((dog) =>
    dog.name.toLowerCase().includes(search.toLowerCase()) ||
    dog.breed.toLowerCase().includes(search.toLowerCase())
  );

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
          Galeria de Doguinhos
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Conheça nossos adoráveis doguinhos para doação. 
        </p>
      </motion.div>

      {/* Barra de Busca */}
      <motion.div
        className="mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por nome ou raça..."
            className="w-full p-4 pl-12 rounded-xl text-white-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </motion.div>

      {/* Loader */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      )}

      {/* Lista de Cães */}
      {!isLoading && (
        <>
          {filteredDogs.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🐾</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Nenhum doguinho encontrado</h3>
              <p className="text-gray-400">Não encontramos resultados para "{search}"</p>
            </motion.div>
          ) : (
            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {filteredDogs.map((dog, index) => (
                <motion.div
                  key={dog.id}
                  className="group bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedDog(dog)}
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
            </motion.div>
          )}
        </>
      )}

      {/* Modal de Detalhes */}
      {selectedDog && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedDog(null)}
        >
          <motion.div
            className="bg-gray-800 text-white rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl border border-gray-700"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <img
                src={selectedDog.image}
                alt={selectedDog.name}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-700 text-white rounded-full p-2 transition-colors"
                onClick={() => setSelectedDog(null)}
                aria-label="Fechar modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold">{selectedDog.name}</h2>
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  ID: {selectedDog.id}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-gray-400 text-sm mb-1">Raça</h4>
                  <p className="text-lg font-medium">{selectedDog.breed}</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-gray-400 text-sm mb-1">Tipo</h4>
                  <p className="text-lg font-medium">Doméstico</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-gray-400 text-sm mb-1">Situação</h4>
                  <p className="text font-medium">Disponivel para adoção</p>
                </div>
              
              </div>
              
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-lg transition-colors">
                Adotar {selectedDog.name} 🐾
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
