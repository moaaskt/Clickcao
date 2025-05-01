import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CadastrarCao = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    image: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const savedDogs = JSON.parse(localStorage.getItem('dogsData')) || [];
    const newId = savedDogs.length > 0 
      ? Math.max(...savedDogs.map(dog => dog.id)) + 1 
      : 1;

    const newDog = {
      id: newId,
      name: formData.name,
      breed: formData.breed,
      image: formData.image || `https://placedog.net/500/400?id=${newId}`
    };

    setTimeout(() => {
      localStorage.setItem('dogsData', JSON.stringify([...savedDogs, newDog]));
      window.dispatchEvent(new CustomEvent('dogsUpdated'));
      setIsSubmitting(false);
      navigate('/racas');
    }, 1000);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 sm:px-6 lg:px-20 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cabeçalho */}
      <div className="text-center mb-12">
        <motion.h1 
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Cadastrar Doguinho
        </motion.h1>
        <motion.p 
          className="text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Adicione um novo membro à nossa família canina
        </motion.p>
      </div>

      {/* Formulário */}
      <motion.div
        className="max-w-md mx-auto bg-gray-700 rounded-2xl p-8 shadow-xl border border-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <form onSubmit={handleSubmit}>
          {/* Campo Nome */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
              Nome do Doguinho
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500"
              placeholder="Ex: Thor"
              required
            />
          </div>

          {/* Campo Raça */}
          <div className="mb-6">
            <label htmlFor="breed" className="block text-gray-300 mb-2 font-medium">
              Raça
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500"
              placeholder="Ex: Pastor Alemão"
              required
            />
          </div>

          {/* Campo Imagem */}
          <div className="mb-8">
            <label htmlFor="image" className="block text-gray-300 mb-2 font-medium">
              URL da Imagem <span className="text-gray-500">(opcional)</span>
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500"
              placeholder="Deixe em branco para imagem aleatória"
            />
            <p className="mt-2 text-sm text-gray-400">
              Dica: Use <a href="https://placedog.net" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">placedog.net</a> para imagens de cachorros
            </p>
          </div>

          {/* Botão de Submit */}
          <motion.button
            type="submit"
            className={`w-full py-4 px-4 rounded-lg font-bold text-lg ${
              isSubmitting 
                ? 'bg-yellow-600 cursor-not-allowed' 
                : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
            } transition-colors shadow-lg`}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Cadastrando...
              </div>
            ) : (
              'Cadastrar Doguinho 🐾'
            )}
          </motion.button>
        </form>

        {/* Botão de voltar - mais discreto */}
        <div className="mt-8 pt-6 border-t border-gray-600">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center justify-center w-full text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para a página anterior
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CadastrarCao;