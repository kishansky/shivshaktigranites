import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { MapPin, Phone, Mail } from "lucide-react"
import PageMeta from "@/components/common/PageMeta"
import { Link } from "react-router-dom"

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact Us | Shiv Shakti Granites"
        description="Get in touch with Shiv Shakti Granites for granite, marble, tiles and natural stone enquiries in Jaipur."
      />

      <section className="py-24 bg-background">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <h1 className="text-4xl font-bold">
              Contact Us
            </h1>

            <p className="text-muted-foreground mt-4">
              Reach out to Shiv Shakti Granites for enquiries and quotations.
            </p>

            <div className="mt-8 space-y-6">

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4"
              >
                <MapPin className="text-primary" />
                <p>
                  Shiv Shakti Granites
                  <br />
                  Sagar Road, Nai Galla Mandi Gate
                  <br />
                  Near Petrol Pump
                  <br />
                  Vidisha, Madhya Pradesh
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4"
              >
                <Phone className="text-primary" />
                 <Link to="tel:+918058938451">
                  +91 80589 38451
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4"
              >
                <Phone className="text-primary" />
                 <Link to="tel:+917891847811">
                  +91 78918 47811
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4"
              >
                <Mail className="text-primary" />
                <p>info@shivshaktigranites.com</p>
              </motion.div>

            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 border px-6 py-6 rounded-xl shadow-sm"
          >

            <Input placeholder="Your Name" />

            <Input placeholder="Your Email" />

            <Input placeholder="Phone Number" />

            <Textarea placeholder="Your Message" rows={5} />

            <Button className="w-full">
              Send Message
            </Button>

          </motion.div>

        </div>

      </section>
    </>
  )
}