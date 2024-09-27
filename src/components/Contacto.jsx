import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'


const Contacto = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 ">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl">Get  in Touch
        </motion.h2>
        <div className="text-center tracking-tighter flex items-center justify-center">
            <motion.div 
              // Animación flotante cuando no hay hover
              animate={{
                y: [0, -20, 0], // Mueve la tarjeta hacia arriba y abajo
              }}
              transition={{
                duration: 4,      // Duración de la animación completa
                repeat: Infinity, // Se repite indefinidamente
                ease: "easeInOut" // Suaviza la animación
              }}
              // Cuando pasa el mouse, la tarjeta se queda quieta
              whileHover={{
                y: 0,
              }}
              className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center border border-gray-300 "
              >
              <h2 className="text-2xl font-bold mb-2 text-gray-700">Juan Pérez</h2>
              <p className="text-gray-600">Email: {CONTACT.email}</p>
              <p className="text-gray-600">Teléfono: {CONTACT.phoneNo}</p>
              <p className="text-gray-600">Dirección: {CONTACT.address}</p>
            </motion.div>
        </div>

        
    </div>

    
  )
}

export default Contacto