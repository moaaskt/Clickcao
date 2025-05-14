import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dogs, { defaultDogs } from '../data/dogs';
import styles from './Home.module.css';
import { s } from 'framer-motion/client';


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
      className={styles.container}
      style={{ backgroundImage: `url('src/assets/dog-home.jpg')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      {/* Cabeçalho */}
      <motion.div
        className={styles.header}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className={styles.title}>
          Galeria de Doguinhos
        </h1>
        <p className=
          {styles.subtitle}>
          Conheça nossos adoráveis doguinhos para doação.
        </p>
      </motion.div>

      {/* Barra de Busca */}
      <motion.div
        className={styles.searchBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por nome ou raça..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-100"
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
              className="text-center py-16 bg-black/60 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🐾</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Nenhum doguinho encontrado</h3>
              <p className="text-gray-300">Não encontramos resultados para "{search}"</p>
            </motion.div>
          ) : (
            <motion.div
              className={styles.cardGrid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {filteredDogs.map((dog, index) => (
                <motion.div
                  key={dog.id}
                  className={styles.card}
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
                      className={styles.cardImage}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-yellow-400 font-bold">ID: {dog.id}</span>
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{dog.name}</h3>
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                      <p className={styles.cardBreed}>{dog.breed}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </>
      )}

      {/* Modal */}
      {selectedDog && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedDog(null)}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalImageContainer}>
              <img
                src={selectedDog.image}
                alt={selectedDog.name}
                className={styles.modalImage}
              />
              <button
                className={styles.closeButton}
                onClick={() => setSelectedDog(null)}
                aria-label="Fechar modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className={styles.modalBody}>
            <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>{selectedDog.name}</h2>
            <span className={styles.modalId}>ID: {selectedDog.id}</span>
              </div>
              <div className={styles.modalDetails}>
                <div className={styles.detailBox}>
                  <h4 className={styles.detailLabel}>Raça</h4>
                  <p className={styles.detailValue}>{selectedDog.breed}</p>
                </div>
                <div className={styles.detailBox}>
                  <h4 className={styles.detailLabel}>Tipo</h4>
                  <p className={styles.detailValue}>Doméstico</p>
                </div>
                <div className={styles.detailBox}>
                  <h4 className={styles.detailLabel}>Situação</h4>
                  <p className={styles.detailValue}>Disponível para adoção</p>
                </div>
              </div>
              <button className={styles.adoptButton}>
                Adotar {selectedDog.name} 🐾
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
