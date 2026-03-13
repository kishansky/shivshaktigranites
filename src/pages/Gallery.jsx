import PageMeta from "@/components/common/PageMeta";
import ProductShortcuts from "@/components/home/ProductShortcuts";
import { motion } from "framer-motion";

const images = [
    "/gallery/gallery13.jpg",
  "/gallery/gallery9.jpg",
  "/gallery/gallery10.jpg",
  "/gallery/gallery11.jpg",
  "/gallery/gallery12.jpg",
  "/gallery/gallery14.jpg",
  "/gallery/gallery1.jpeg",
  "/gallery/gallery2.jpeg",
  "/gallery/gallery3.jpeg",
  "/gallery/gallery4.jpeg",
  "/gallery/gallery5.jpeg",
  "/gallery/gallery6.jpeg",
  "/gallery/gallery7.jpeg",
  "/gallery/gallery8.jpeg",
  // "/granite/red-granite.jpeg",
  // "/marble/udaipur-green-marble.jpeg",
  "/marble/flooring-marble.jpeg",
  "/tiles/jaisalmer-yellow-tiles.jpeg",
  // "/stone/natural-stone.jpeg",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Gallery() {
  return (
    <>
      <PageMeta
        title="Gallery | Shiv Shakti Granites"
        description="Explore our gallery showcasing premium granite, marble, tiles, and natural stone installations for homes and commercial spaces."
      />
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold">Our Gallery</h1>
            <p className="text-muted-foreground mt-4">
              Explore our granite, marble and stone installations
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl shadow"
              >
                <img src={img} className="w-full h-60 object-cover" />
              </motion.div>
            ))}
          </motion.div>
        <ProductShortcuts />
        </div>
      </section>
    </>
  );
}
