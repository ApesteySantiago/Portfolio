import React from "react";
import aboutImg from "../assets/fotodeprueba3.png";
import { TEXTO_ACERCA, TEXTO_ACERCA1, TEXTO_ACERCA2 } from "../constants";
import { motion } from "framer-motion";


const Acerca = React.forwardRef((props, ref) => {
  return (
    <section>
      <div ref={ref} className="p-4">
      <h2 className="text-center text-5xl mb-10">
        Acerca de Mi
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={aboutImg}
            alt="Acerca de Mi"
            className="w-full max-w-md mx-auto rounded-full shadow-lg"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0, x: -100 }}
          className="w-full max-w-xl mx-auto flex flex-col items-center justify-center p-4">
          <div className="flex items-center justify-center ">
            <p className="my-2 max-w-xl pt-6 font-light tracking-tighter text-justify">{TEXTO_ACERCA}</p>
          </div>
          <div className="flex items-center justify-center ">
            <p className="my-2 max-w-xl py-2 font-light tracking-tighter text-justify">{TEXTO_ACERCA1}</p>
          </div>
          <div className="flex items-center justify-center ">
            <p className="my-2 max-w-xl py-2 font-light tracking-tighter text-justify">{TEXTO_ACERCA2}</p>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
    
  );
});

export default Acerca;