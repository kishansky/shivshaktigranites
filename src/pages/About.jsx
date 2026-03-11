import PageMeta from "@/components/common/PageMeta"
import { motion } from "framer-motion"

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us | Shiv Shakti Granites"
        description="Learn about Shiv Shakti Granites, a trusted supplier of premium granite, marble, tiles and natural stones for residential and commercial projects."
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
              src="/about.jpeg"
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
              About Shiv Shakti Granites
            </h1>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Shiv Shakti Granites is a trusted supplier of premium granite,
              marble and natural stone products. We provide high quality
              materials for residential, commercial and architectural
              projects with professional service and reliable delivery.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              With years of experience in the stone industry, we offer a wide
              collection of granite, marble and tiles sourced from trusted
              quarries. Our mission is to deliver durable, elegant and
              affordable stone solutions.
            </p>

          </motion.div>

        </div>

      </section>
    </>
  )
}