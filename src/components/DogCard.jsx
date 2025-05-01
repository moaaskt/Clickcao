import { motion } from 'framer-motion';

export default function DogCard({ dog, onClick }) {
  return (
    <motion.div
      className="group bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-600 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        transition: { type: 'spring', stiffness: 400 }
      }}
      onClick={() => onClick(dog)}
    >
      {/* Container da imagem com overlay hover */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={dog.image}
          alt={dog.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Overlay hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-yellow-400 font-bold text-sm bg-gray-900/80 px-2 py-1 rounded">
            ID: {dog.id}
          </span>
        </div>
      </div>

      {/* Informações do dog */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white truncate">{dog.name}</h3>
            <div className="flex items-center mt-1">
              <span className="block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
              <p className="text-gray-300 text-sm">{dog.breed}</p>
            </div>
          </div>
          
          {/* Badge de disponibilidade */}
          <span className="bg-yellow-400/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
            Para adoção
          </span>
        </div>

        {/* Botão invisível para toda a área */}
        <button 
          className="absolute inset-0 w-full h-full opacity-0"
          aria-label={`Ver detalhes de ${dog.name}`}
        >
          Ver detalhes
        </button>
      </div>

      {/* Efeito de brilho hover */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
}