import React from 'react'
import { motion } from 'framer-motion'

const bigBoxVariants = {
    hidden: {
        x:-350,
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.8,
            
            when: "beforeChildren",
            ease: 'easeOut',
            staggerChildren: .4,
        }
    }
}

const listVariants = {
    hidden: {
        y: 50,
        opacity: 0,
        
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 1.5
        }
        
       
    }

}

const Box = () => {
  return (
      <motion.ul 
      className="bigBox"
      variants={bigBoxVariants}
      initial="hidden"
      animate="visible"
      >

   {/* {[1,2,3].map((box, index)=> {
       return <motion.li key={index}
       className='bg-blue-200 w-32 h-32 m-3'
       variants={listVariants}
       ></motion.li>
    })} */}
<motion.li 
       className='font-black text-7xl mb-14'
       variants={listVariants}
       ><h1>Išamnūs it sprendimai < br/>tiesiai į Jūsų namus</h1></motion.li>
<motion.li 

       className='mb-20'
       variants={listVariants}
       > <h3 className='mb-6'>Kvieciame užsirašyti konsultacijai apie jums rūpimus sprendimus <br/> Kvieciame užsirašyti konsultacijai apie jums rūpimus sprendimus</h3>
           <button className=' text-xl font-black bg-blue-200 px-8 py-3'>Batonas</button></motion.li>
<motion.li 
       className=''
       variants={listVariants}
       ><div className='bg-green-600 h-80 w-full'></div></motion.li>

    </motion.ul>
  )
}

export default Box