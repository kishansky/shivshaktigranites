import { useParams } from "react-router-dom"
import { stoneData } from "@/utils/stoneData"
import { motion } from "framer-motion"
import PageMeta from "@/components/common/PageMeta"

export default function StonePage() {
  const { slug } = useParams()
  const stone = stoneData[slug]

  if (!stone) {
    return (<>
    <PageMeta
        title={`Our Stones Collection | Shiv Shakti Granites`}
        description={"Our Stones Collection | Shiv Shakti Granites"}
      />
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <h1 className="text-4xl font-bold text-center mb-16">
          Our Stones Collection
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {Object.entries(stoneData).map(([key, item]) => (
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
        title={`${stone.title} | Shiv Shakti Granites`}
        description={stone.description}
      />

      <section className="py-24 bg-background">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={stone.image}
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold">{stone.title}</h1>
            <p className="mt-6 text-muted-foreground">
              {stone.description}
            </p>
          </motion.div>

        </div>

      </section>
            <section className="pb-24 bg-background">
                  <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
                    <h1 className="text-4xl font-bold text-center mb-16">
                      Our Others Marble Collection
                    </h1>
            
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
                      {Object.entries(stoneData).map(([key, item]) => (
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
                              href={`/stone/${key}`}
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