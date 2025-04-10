import { motion } from 'framer-motion';
import { User, Mail, MessageCircle, Send } from 'lucide-react';
import pugPhone from '../assets/dog-contact.jpg';

// Criando um MotionIcon para usar com os ícones do Lucide
const MotionIcon = motion.div;

export default function Contato() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 sm:px-6 lg:px-20 py-10 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${pugPhone})` }}>
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Fale com a Gente! ☎️🐶
      </motion.h1>

      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-12"
        style={{
          backgroundImage: `url(${pugPhone})`,
          backgroundSize: 'cover', // Faz a imagem cobrir toda a seção
          backgroundPosition: 'center', // Centraliza a imagem
          backgroundAttachment: 'fixed', // Efeito parallax
          minHeight: '550px', // Garante que a seção tenha altura suficiente
        }}
      >
        {/* Formulário */}
        <motion.form
          className="w-full max-w-lg p-8 rounded-2xl shadow-xl space-y-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semi-transparente
            backdropFilter: 'blur(7px)', // Suaviza o fundo para maior contraste
          }}
        >
          <div>
            <label className="block mb-1 font-medium flex items-center gap-2">
              <MotionIcon
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  transition: { type: 'spring', stiffness: 500, damping: 10 },
                }}
              >
                <User className="w-5 h-5" />
              </MotionIcon>
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-3 rounded-lg text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium flex items-center gap-2">
              <MotionIcon
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  transition: { type: 'spring', stiffness: 500, damping: 10 },
                }}
              >
                <Mail className="w-5 h-5" />
              </MotionIcon>
              Email
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full p-3 rounded-lg text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium flex items-center gap-2">
              <MotionIcon
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  transition: { type: 'spring', stiffness: 500, damping: 10 },
                }}
              >
                <MessageCircle className="w-5 h-5" />
              </MotionIcon>
              Mensagem
            </label>
            <textarea
              placeholder="Escreva sua mensagem aqui..."
              className="w-full p-3 rounded-lg text-black h-32"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Send className="w-5 h-5" /> Enviar
          </motion.button>
        </motion.form>
      </div>
    </main>
  );
}
