import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-[url('/cta/stone-bg.png')] bg-cover bg-center relative">

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

        <h2 className="text-3xl lg:text-4xl font-bold">
          Build Your Dream Space With Premium Granite
        </h2>

        <p className="mt-4 text-lg text-gray-200">
          Contact Shiv Shakti Granites today for the best quality stone and professional service.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">

          <a href="tel:+918058938451" target="_blank" className="cursor-pointer">
          <Button size="lg" className="flex gap-2 cursor-pointer hover:bg-accent/90">
            <Phone size={18} />
            Call +918058938451
            </Button>
            </a>

          
          <a href="https://wa.me/+918058938451" target="_blank" className="cursor-pointer"><Button size="lg" variant="secondary" className="flex gap-2 cursor-pointer">
            <MessageCircle size={18} />
            WhatsApp Enquiry
          </Button></a>

        </div>

      </div>

    </section>
  )
}