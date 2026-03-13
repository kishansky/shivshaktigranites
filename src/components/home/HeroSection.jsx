import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  const stones = [
    "/stones/stone1.png",
    "/stones/stone2.png",
    "/stones/stone3.png",
    "/stones/stone4.png",
    "/stones/stone5.png",
    "/stones/stone6.png",
    "/stones/stone7.png",
    "/stones/stone8.png",
    "/stones/stone9.png",
    "/stones/stone10.png",
    "/stones/stone11.png",
    "/stones/stone12.png",
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Premium Granite,
            <span className="text-primary"> Marble & Tiles</span>
            <br />
            For Modern Spaces
          </motion.h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg">
            Shiv Shakti Granites offers high-quality granite, marble and natural
            stone products for homes and commercial spaces.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <Link to={"/gallery"} className="cursor-pointer">
              <Button className="cursor-pointer" size="lg">
                Explore Collection
              </Button>
            </Link>
            <Link to={"/contact-us"} className="cursor-pointer">
              <Button className="cursor-pointer" size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="flex justify-center lg:-mt-5">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 rotate-[-12deg]"
          >
            {stones.map((stone, index) => (
              <motion.img
                key={index}
                src={stone}
                variants={item}
                whileHover={{ scale: 1.08 }}
                className="   w-20 h-28 sm:w-24 sm:h-32 lg:w-28 lg:h-40
    object-cover
    rounded-xl
    border border-white/20
    shadow-[0_12px_22px_rgba(0,0,0,0.35),0_8px_15px_rgba(0,0,0,0.25)]
    hover:shadow-[0_15px_25px_rgba(0,0,0,0.45),0_12px_25px_rgba(0,0,0,0.35)]
    cursor-grab active:cursor-grabbing"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function Hero() {

//   const stoneImages = [
//     "/stones/stone1.png",
//     "/stones/stone2.png",
//     "/stones/stone3.png",
//     "/stones/stone4.png",
//     "/stones/stone5.png",
//     "/stones/stone6.png",
//     "/stones/stone7.png",
//     "/stones/stone8.png",
//     "/stones/stone9.png",
//     "/stones/stone10.png",
//     "/stones/stone11.png",
//     "/stones/stone12.png",
//   ];

//   const [stones, setStones] = useState([]);

//   // Shuffle function
//   function shuffleArray(array) {
//     return [...array].sort(() => Math.random() - 0.5);
//   }

//   // Shuffle on refresh
//   useEffect(() => {
//     setStones(shuffleArray(stoneImages));
//   }, []);

//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.12
//       }
//     }
//   };

//   const item = {
//     hidden: {
//       opacity: 0,
//       y: 40,
//       scale: 0.8
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section className="relative overflow-hidden bg-background py-24">

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

//         {/* LEFT CONTENT */}
//         <div>

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-6xl font-bold leading-tight"
//           >
//             Premium Granite,
//             <span className="text-primary"> Marble & Tiles</span>
//             <br />
//             For Modern Spaces
//           </motion.h1>

//           <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg">
//             Shiv Shakti Granites offers high-quality granite, marble and
//             natural stone products for homes and commercial spaces.
//           </p>

//           <div className="flex gap-4 mt-8 flex-wrap">
//             <Link to="/gallery">
//               <Button size="lg">Explore Collection</Button>
//             </Link>

//             <Link to="/contact-us">
//               <Button size="lg" variant="outline">Contact Us</Button>
//             </Link>
//           </div>

//         </div>

//         {/* RIGHT GRID */}
//         <div className="flex justify-center lg:-mt-5">

//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="grid grid-cols-3 sm:grid-cols-4 gap-4 rotate-[-12deg]"
//           >

//             {stones.map((stone, index) => (
//               <motion.img
//                 key={index}
//                 src={stone}
//                 variants={item}

//                 drag
//                 dragElastic={0.7}
//                 whileDrag={{ scale: 1.15, rotate: 5 }}
//                 whileHover={{ scale: 1.08 }}

//             className="   w-20 h-28 sm:w-24 sm:h-32 lg:w-28 lg:h-40
// object-cover
// rounded-xl
// border border-white/20
// shadow-[0_12px_22px_rgba(0,0,0,0.35),0_8px_15px_rgba(0,0,0,0.25)]
// hover:shadow-[0_15px_25px_rgba(0,0,0,0.45),0_12px_25px_rgba(0,0,0,0.35)]
// cursor-grab active:cursor-grabbing"
//               />
// //               <motion.img
// //   key={index}
// //   src={stone}
// //   variants={item}
// //   drag
// //   dragElastic={0.7}
// //   whileDrag={{ scale: 1.1, rotate: 5 }}
// //   whileHover={{ scale: 1.06 }}
// //   className="
// //     w-20 h-28 sm:w-24 sm:h-32 lg:w-28 lg:h-40
// //     object-cover
// //     rounded-xl
// //     border border-white/20
// //     shadow-[0_25px_45px_rgba(0,0,0,0.35),0_8px_15px_rgba(0,0,0,0.25)]
// //     hover:shadow-[0_35px_60px_rgba(0,0,0,0.45),0_12px_25px_rgba(0,0,0,0.35)]
// //     transition
// //     cursor-grab active:cursor-grabbing
// //   "
// // />
//             ))}

//           </motion.div>

//         </div>

//       </div>

//     </section>
//   );
// }
