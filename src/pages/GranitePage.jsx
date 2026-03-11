import { useParams } from "react-router-dom"
import { graniteData } from "@/utils/graniteData"
import { motion } from "framer-motion"
import PageMeta from "@/components/common/PageMeta"

export default function GranitePage() {
  const { slug } = useParams()
  const granite = graniteData[slug]

  if (!granite) {
    return <div className="p-20 text-center">Granite not found</div>
  }

  return (
    <>
      <PageMeta
        title={`${granite.title} | Shiv Shakti Granites`}
        description={granite.description}
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
              src={granite.image}
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
              {granite.title}
                      </h1>
                      

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {granite.description}
            </p>

          </motion.div>

        </div>

      </section>
    </>
  )
}