import { useParams } from "react-router-dom"
import { marbleData } from "@/utils/marbleData"
import { motion } from "framer-motion"
import PageMeta from "@/components/common/PageMeta"

export default function MarblePage() {

  const { slug } = useParams()
  const marble = marbleData[slug]

  if (!marble) {
    return <div className="p-20 text-center">Marble not found</div>
  }

  return (
    <>
      <PageMeta
        title={`${marble.title} | Shiv Shakti Granites`}
        description={marble.description}
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
              src={marble.image}
              className="w-full object-cover"
              whileHover={{ scale: 1.05 }}
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
              {marble.title}
            </h1>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {marble.description}
            </p>

          </motion.div>

        </div>

      </section>
    </>
  )
}