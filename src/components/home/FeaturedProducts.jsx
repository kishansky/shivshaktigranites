import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const products = [
  {
    name: "Black Galaxy Granite",
    image: "/products/black-galaxy.png",
  },
  {
    name: "Kashmir White Granite",
    image: "/products/kashmir-white.png",
  },
  {
    name: "Tan Brown Granite",
    image: "/products/tan-brown.png",
  },
{
  name: "Steel Grey Granite",
  image: "/products/steel-grey.png",
}
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 ">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Featured Granites
          </h2>

          <p className="text-muted-foreground mt-4">
            Discover our most popular granite collections
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

                <CardContent className="p-0">

                  <img
                    src={product.image}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-5 font-semibold text-center">
                    {product.name}
                  </div>

                </CardContent>

              </Card>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}