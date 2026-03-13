import { useParams } from "react-router-dom"
import { tileData } from "@/utils/tileData"
import { motion } from "framer-motion"
import PageMeta from "@/components/common/PageMeta"

export default function TilesPage() {
  const { slug } = useParams()
  const tile = tileData[slug]

   if (!tile) {
    return (<>
    <PageMeta
        title={`Our Tile Collection | Shiv Shakti Granites`}
        description={"Our Tile Collection | Shiv Shakti Granites"}
      />
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <h1 className="text-4xl font-bold text-center mb-16">
          Our Tile Collection
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {Object.entries(tileData).map(([key, item]) => (
            <motion.div
              key={key}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="mt-3 text-muted-foreground text-sm">
                  {item.description}
                </p>

                <a
                  href={`/marble/${key}`}
                  className="inline-block mt-4 text-primary font-medium"
                >
                  View Details →
                </a>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
    </>
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
            <section className="pb-24 bg-background">
                  <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
                    <h1 className="text-4xl font-bold text-center mb-16">
                      Our Others Tiles Collection
                    </h1>
            
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
                      {Object.entries(tileData).map(([key, item]) => (
                        <motion.div
                          key={key}
                          whileHover={{ y: -6 }}
                          className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                          <img
                            src={item.image}
                            className="w-full h-56 object-cover"
                          />
            
                          <div className="p-6">
                            <h2 className="text-xl font-semibold">
                              {item.title}
                            </h2>
            
                            <p className="mt-3 text-muted-foreground text-sm">
                              {item.description}
                            </p>
            
                            <a
                              href={`/tiles/${key}`}
                              className="inline-block mt-4 text-primary font-medium"
                            >
                              View Details →
                            </a>
                          </div>
                        </motion.div>
                      ))}
            
                </div>
                </div>
                </section>
    </>
  )
}