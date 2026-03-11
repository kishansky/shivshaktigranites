import { useParams } from "react-router-dom"
import { tileData } from "@/utils/tileData"
import { motion } from "framer-motion"
import PageMeta from "@/components/common/PageMeta"

export default function TilesPage() {
  const { slug } = useParams()
  const tile = tileData[slug]

  if (!tile) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold">Tile not found</h1>
      </div>
    )
  }

  return (
    <>
      <PageMeta
        title={`${tile.title} | Shiv Shakti Granites`}
        description={tile.description}
      />

      <section className="py-24 bg-background">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <motion.img
              src={tile.image}
              alt={tile.title}
              className="w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <h1 className="text-4xl font-bold">
              {tile.title}
            </h1>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {tile.description}
            </p>

          </motion.div>

        </div>

      </section>
    </>
  )
}