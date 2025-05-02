import { motion } from "framer-motion";
import Image from "next/image";
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // choose the font weights you need
})

const Hero = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse lg:flex lg:justify-center items-center gap-6 lg:gap-0">
        {/* Image behind text */}
        <motion.div
          className="lg:absolute left-[700px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/yusufpics.png"
            alt="Yusuf Unfiltered"
            width={327}
            height={322}
            className="lg:w-[327.671px] lg:h-[322px]"
          />
        </motion.div>        {/* Text in front */}
        <motion.div
          className="mt-4 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className={`${workSans.className} text-start font-[Manrope] lg:text-[25px] not-italic text-[#CACACA] lg:text-center font-manrope text-[13px] lg:not-italic lg:font-medium  font-medium leading-none`}>
            Hi, I’m Yusuf. UI/UX designer who loves turning rough ideas into smooth digital experiences. If it needs to be clean, clear, and a little bit cool—you’re in the right place.
          </h1>
        </motion.div>

        <motion.div
          className="lg:relative lg:z-10"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h1 className={` ${workSans.className}text-[#ECECEC] lg:text-[#ECECEC] md:text-[#ECECEC]  text-[25px] font-[Work_Sans] lg:text-[170px] italic font-extrabold leading-none uppercase`}>
            UI/UX Designer
          </h1>
        </motion.div>
      </div>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h1 className={` ${workSans.className}text-start hidden lg:block font-[Manrope] lg:text-[25px] not-italic text-[#CACACA] lg:text-center font-manrope text-[13px] lg:not-italic lg:font-medium  font-medium leading-normal`}>
          Hi, I’m <span className="text-[#ffffff]">Yusuf.</span>  UI/UX designer who loves turning rough ideas into smooth digital experiences. If it needs to be clean, clear, and a little bit cool—you’re in the right place.
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;
