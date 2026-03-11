import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Excellent quality granite and professional service. Highly recommended for home and commercial projects.",
  },
  {
    name: "Amit Verma",
    review:
      "Great collection of marble and granite. Delivery was fast and the pricing was reasonable.",
  },
  {
    name: "Priya Singh",
    review:
      "Very satisfied with the stone quality and finishing. The team was very helpful.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="text-muted-foreground mt-4">
            Trusted by homeowners and builders
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition bg-background"
            >

              {/* Stars */}
              <div className="flex text-yellow-500 mb-4">
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
                <Star size={18} />
              </div>

              {/* Review */}
              <p className="text-muted-foreground mb-6">
                {item.review}
              </p>

              {/* Name */}
              <div className="font-semibold">
                {item.name}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}