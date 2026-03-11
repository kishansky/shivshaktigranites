import { Truck, ShieldCheck, Gem, Wrench } from "lucide-react"

const features = [
  {
    icon: Gem,
    title: "Premium Quality Stone",
    desc: "We provide high-quality granite, marble and natural stones sourced from trusted quarries."
  },
  {
    icon: ShieldCheck,
    title: "Durable & Long Lasting",
    desc: "Our stones are strong, durable and perfect for residential and commercial spaces."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "We ensure safe and timely delivery of granite and marble to your project location."
  },
  {
    icon: Wrench,
    title: "Custom Cutting",
    desc: "We provide customized stone cutting and finishing as per your project requirements."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl lg:text-4xl font-bold">
            Why Choose Us
          </h2>

          <p className="text-muted-foreground mt-4">
            We deliver premium quality stones with trusted service
          </p>

        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="text-center p-6 border rounded-xl hover:shadow-lg transition bg-background"
              >

                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="font-semibold text-lg">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground mt-2 text-sm">
                  {feature.desc}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}