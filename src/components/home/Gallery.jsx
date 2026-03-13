import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const images = [
  // "/gallery/gallery1.jpeg",
  // "/gallery/gallery2.jpeg",
  // "/gallery/gallery3.jpeg",
  // "/gallery/gallery4.jpeg",
  // "/gallery/gallery5.jpeg",
  // "/gallery/gallery6.jpeg",
  "/gallery/gallery13.jpg",
  "/gallery/gallery9.jpg",
  "/gallery/gallery10.jpg",
  "/gallery/gallery11.jpg",
  "/gallery/gallery12.jpg",
  "/gallery/gallery14.jpg",
]

export default function Gallery() {
  return (
    <section className="py-20 bg-muted/20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">

          <h2 className="text-3xl lg:text-4xl font-bold">
            Our Gallery
          </h2>

          <p className="text-muted-foreground mt-4">
            Explore our latest granite and marble installations
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow"
            >

              <img
                src={img}
                className="w-full h-64 object-cover"
              />

            </motion.div>
          ))}

        </div>

        <div className="mt-4 flex items-center justify-center">

        <Link to={"/gallery"} className="cursor-pointer">
              <Button className="cursor-pointer" size="lg" variant="outline">
                Explore More Collection
              </Button>
            </Link>
        </div>

      </div>

    </section>
  )
}