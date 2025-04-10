import { motion } from 'framer-motion';
import imagemSobre from '../assets/imagemSobre.jpg';  // Certifique-se de que o caminho da imagem está correto!

export default function Sobre() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white px-6 lg:px-32 py-16 flex flex-col justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${imagemSobre})` }}  // Aplicando a imagem de fundo
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Sobre o ClickCão 🐾
      </motion.h1>

      <motion.div
        className="bg-gray-900/70 border border-yellow-500 rounded-2xl p-8 shadow-lg space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.4,
            },
          },
        }}
      >
        <motion.p
          className="text-lg leading-relaxed text-gray-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          O <span className="text-yellow-400 font-semibold">ClickCão</span> nasceu da paixão pelos animais e da vontade de
          aproximar pessoas dos seus companheiros de quatro patas. Nosso objetivo é criar uma
          plataforma divertida, acessível e cheia de carinho, onde amantes de cães podem
          explorar diferentes raças, conhecer histórias inspiradoras e compartilhar momentos.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed text-gray-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Desenvolvido com ❤️ por Moacir — um entusiasta de tecnologia, skate e, claro, doguinhos! Esse projeto
          também tem como foco mostrar minhas habilidades com React, TailwindCSS e animações
          com Framer Motion.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed text-gray-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Espero que você se divirta tanto navegando por aqui quanto eu me diverti criando esse
          espaço. Obrigado por visitar o ClickCão 🐶🚀
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
