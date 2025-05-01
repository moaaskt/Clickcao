import { motion } from 'framer-motion';
import { User, Mail, MessageCircle, Send, Phone, MapPin } from 'lucide-react';
import pugPhone from '../assets/dog-contact.jpg';
import './contato.css'

const MotionIcon = motion.div;

export default function Contato() {
  return (
    <motion.div
      className="min-h-screen text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background com overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={pugPhone} 
          alt="Cachorro no telefone" 
          className="w-full h-full object-cover animate-subtleZoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/80"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20 py-12">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Fale Conosco
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tem dúvidas sobre adoção? Quer saber mais sobre nossos doguinhos? Mande uma mensagem!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Formulário */}
          <motion.form
            className="w-full max-w-lg bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Campo Nome */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium flex items-center gap-2">
                  <MotionIcon
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{
                      scale: 1.2,
                      y: -3,
                      transition: { type: 'spring', stiffness: 500 }
                    }}
                  >
                    <User className="w-5 h-5 text-yellow-400" />
                  </MotionIcon>
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500"
                  required
                />
              </div>

              {/* Campo Email */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium flex items-center gap-2">
                  <MotionIcon
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{
                      scale: 1.2,
                      y: -3,
                      transition: { type: 'spring', stiffness: 500 }
                    }}
                  >
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </MotionIcon>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500"
                  required
                />
              </div>

              {/* Campo Mensagem */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium flex items-center gap-2">
                  <MotionIcon
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{
                      scale: 1.2,
                      y: -3,
                      transition: { type: 'spring', stiffness: 500 }
                    }}
                  >
                    <MessageCircle className="w-5 h-5 text-yellow-400" />
                  </MotionIcon>
                  Mensagem
                </label>
                <textarea
                  placeholder="Como podemos te ajudar?"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-500 h-32"
                  required
                />
              </div>

              {/* Botão Enviar */}
              <motion.button
                type="submit"
                className="w-full py-4 px-4 rounded-lg font-bold text-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 flex items-center justify-center gap-2 shadow-lg mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </motion.button>
            </div>
          </motion.form>

          {/* Informações de Contato */}
          <motion.div
            className="w-full max-w-md bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Outras Formas de Contato</h2>
            
            <div className="space-y-6">
              {/* Telefone */}
              <div className="flex items-start gap-4">
                <MotionIcon
                  className="bg-yellow-400/20 p-3 rounded-full flex-shrink-0"
                  whileHover={{ rotate: 10 }}
                >
                  <Phone className="w-6 h-6 text-yellow-400" />
                </MotionIcon>
                <div>
                  <h3 className="font-bold text-gray-300">Telefone</h3>
                  <p className="text-gray-400">(XX) XXXX-XXXX</p>
                  <p className="text-sm text-gray-500 mt-1">Seg-Sex, 9h às 18h</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <MotionIcon
                  className="bg-yellow-400/20 p-3 rounded-full flex-shrink-0"
                  whileHover={{ rotate: 10 }}
                >
                  <Mail className="w-6 h-6 text-yellow-400" />
                </MotionIcon>
                <div>
                  <h3 className="font-bold text-gray-300">Email</h3>
                  <p className="text-gray-400">adocao@clickcao.com</p>
                  <p className="text-sm text-gray-500 mt-1">Respondemos em até 24h</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-4">
                <MotionIcon
                  className="bg-yellow-400/20 p-3 rounded-full flex-shrink-0"
                  whileHover={{ rotate: 10 }}
                >
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </MotionIcon>
                <div>
                  <h3 className="font-bold text-gray-300">Abrigo</h3>
                  <p className="text-gray-400">Rua dos Doguinhos, 123</p>
                  <p className="text-gray-400">Bairro Canino - Palhoça/SC</p>
                  <p className="text-sm text-gray-500 mt-1">Visitas com agendamento</p>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="pt-4 border-t border-gray-700">
                <h3 className="font-bold text-gray-300 mb-3">Nos siga nas redes</h3>
                <div className="flex gap-4">
                  {['Instagram', 'Facebook', 'Twitter'].map((rede, index) => (
                    <MotionIcon
                      key={rede}
                      className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
                      whileHover={{ y: -3 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="sr-only">{rede}</span>
                      <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                    </MotionIcon>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}