import { motion } from 'framer-motion';
import imagemSobre from '../assets/imagemSobre.jpg';


export default function Sobre() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 sm:px-6 lg:px-20 py-12 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background com overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imagemSobre} 
          alt="Cachorros para adoção" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/80"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Sobre o ClickCão
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conectando doguinhos a lares cheios de amor
          </p>
        </motion.div>

        {/* Card de conteúdo */}
        <motion.div
          className="max-w-4xl mx-auto bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Nossa Missão</h2>
              <p className="text-gray-300 leading-relaxed">
                O <span className="text-yellow-400 font-semibold">ClickCão Adoção</span> nasceu para transformar a vida de cães abandonados e conectar esses doguinhos incríveis a famílias amorosas. Acreditamos que todo cachorro merece um lar cheio de amor e cuidado.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-6 border-t border-gray-700"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Como Funciona</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-yellow-400 text-gray-900 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                  <p>Nossos doguinhos são resgatados, cuidados e preparados para adoção</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-yellow-400 text-gray-900 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                  <p>Você pode conhecer cada um através da nossa galeria virtual</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-yellow-400 text-gray-900 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                  <p>Agendamos um encontro para você conhecer pessoalmente seu futuro companheiro</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-yellow-400 text-gray-900 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">4</span>
                  <p>Todo o processo de adoção é acompanhado por nossa equipe especializada</p>
                </li>
              </ul>
            </motion.div>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="pt-6 border-t border-gray-700"
            >
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
                <p className="text-yellow-400 text-center italic">
                  "Adotar é um ato de amor que transforma vidas - tanto a do doguinho quanto a do humano que o acolhe."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Rodapé */}
        <motion.div
          className="text-center mt-12 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <p>© {new Date().getFullYear()} ClickCão Adoção - Todos os direitos reservados</p>
        </motion.div>
      </div>
    </motion.div>
  );
}