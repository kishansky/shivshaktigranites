import { useParams } from "react-router-dom"
import { stoneData } from "@/utils/stoneData"
import { motion } from "framer-motion"
import PageMeta from "@/components/common/PageMeta"

export default function StonePage() {
  const { slug } = useParams()
  const stone = stoneData[slug]

  if (!stone) {
    return <div className="py-32 text-center">Stone not found</div>
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
    </>
  )
}