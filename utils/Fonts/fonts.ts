import { Playfair_Display } from "next/font/google";
import { EB_Garamond } from 'next/font/google'


import { Pacifico, Poppins, Lora, Montserrat, Abril_Fatface } from 'next/font/google'

export const pacifico = Pacifico({
  weight: ['400'], 
  subsets: ['latin'] 
})

export const poppins = Poppins({
  weight: ['400', '700'],  // Puedes elegir los pesos que necesites
  subsets: ['latin'] 
})

export const playfair = Playfair_Display({
    weight: ['400', '700', '900'],
    subsets: ['latin']
  })

export const ebGaramond = EB_Garamond({
    weight: ['400', '500', '600', '700', '800'], // EB Garamond tiene varios pesos disponibles
    subsets: ['latin']  
  })

  export const lora = Lora({
    weight: ['400', '700'], // Puedes elegir los pesos que necesites
    subsets: ['latin']      // Y los subconjuntos 
  })

  export const montserrat = Montserrat({
    weight: ['400', '700'],  // Elige los pesos que necesites para Montserrat
    subsets: ['latin'] 
  })

  export const abrilFatface = Abril_Fatface({
    weight: ['400'],  // Puedes elegir los pesos que necesites
    subsets: ['latin'] 
  })