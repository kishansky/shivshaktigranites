import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const shortcuts = [
  // Granite
  { name: "Black Granite", path: "/granite/black-granite" },
  { name: "White Granite", path: "/granite/white-granite" },
  { name: "Red Granite", path: "/granite/red-granite" },
  { name: "Kitchen Granite", path: "/granite/kitchen-granite" },
  { name: "Granite Slabs", path: "/granite/granite-slabs" },

  // Marble
  { name: "Italian Marble", path: "/marble/italian-marble" },
  { name: "Indian Marble", path: "/marble/indian-marble" },
  { name: "White Marble", path: "/marble/white-marble" },
  { name: "Black Marble", path: "/marble/black-marble" },
  { name: "Galaxy Marble", path: "/marble/galaxy-marble" },
  { name: "Makrana Marble", path: "/marble/makrana-marble" },
  { name: "Udaipur Green Marble", path: "/marble/udaipur-green-marble" },
  { name: "Rajnagar Marble", path: "/marble/rajnagar-marble" },
  { name: "Banswara Marble", path: "/marble/banswara-marble" },
  { name: "Flooring Marble", path: "/marble/flooring-marble" },

  // Tiles
  { name: "Floor Tiles", path: "/tiles/floor-tiles" },
  { name: "Wall Tiles", path: "/tiles/wall-tiles" },
  { name: "Bathroom Tiles", path: "/tiles/bathroom-tiles" },
  { name: "Kitchen Tiles", path: "/tiles/kitchen-tiles" },
  { name: "Vitrified Tiles", path: "/tiles/vitrified-tiles" },
  { name: "Kota Stone Tiles", path: "/tiles/kota-stone-tiles" },
  { name: "Jaisalmer Yellow Tiles", path: "/tiles/jaisalmer-yellow-tiles" },
  { name: "Mandana Tiles", path: "/tiles/mandana-tiles" },

  // Stone Products
  { name: "Sandstone", path: "/stone/sandstone" },
  { name: "Quartz Stone", path: "/stone/quartz" },
  { name: "Natural Stone", path: "/stone/natural-stone" },
  { name: "Stone Cladding", path: "/stone/cladding" },
  { name: "Jodhpur Sandstone", path: "/stone/jodhpur-sandstone" },
  { name: "Dholpur Stone", path: "/stone/dholpur-stone" },
  { name: "Jaisalmer Yellow Stone", path: "/stone/jaisalmer-yellow-stone" },
  { name: "Kota Stone", path: "/stone/kota-stone" },
  { name: "Raj Green Sandstone", path: "/stone/raj-green-sandstone" },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function ProductShortcuts() {
  return (
    <section className="py-16 bg-background">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold">
            Explore All Stone Types
          </h3>

          <p className="text-muted-foreground mt-2">
            Quick access to all our granite, marble, tiles and stone products
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-3 gap-y-6"
        >

          {shortcuts.map((itemData, index) => (
            <motion.div key={index} variants={item} whileHover={{ scale: 1.08 }} >

              <Link
                to={itemData.path}
                className="px-4 py-2 rounded-full border text-sm font-medium
                hover:bg-primary bg-muted/50 hover:text-white transition"
              >
                {itemData.name}
              </Link>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  )
}