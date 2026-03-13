import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const products = [
  {
    name: "Galaxy Marble",
    image: "/marble/galaxy-marble.jpeg",
    path:"/marble/galaxy-marble"
  },
  {
    name: "Makrana Marble",
    image: "/marble/makrana-marble.jpeg",
    path:"/marble/makrana-marble"
  },
  {
    name: "Udaipur Green Marble",
    image: "/marble/udaipur-green-marble.jpeg",
    path:"/marble/udaipur-green-marble"
  },
{
  name: "Rajnagar Marble",
  image: "/marble/rajnagar-marble.jpg",
  path:"/marble/rajnagar-marble"
}
]

export default function ImportantMarble() {
  return (
    <section className="py-20 bg-muted/50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Important Marble
          </h2>

          <p className="text-muted-foreground mt-4">
            Discover our most popular marble collections
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
            >

              <Card className="overflow-hidden cursor-pointer">
                <Link to={product.path}>
                <CardContent className="p-0">

                  <img
                    src={product.image}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-5 font-semibold text-center">
                    {product.name}
                  </div>

                  </CardContent>
                  </Link>

              </Card>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}