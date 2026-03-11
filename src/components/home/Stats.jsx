import { Users, Hammer, Gem, Award } from "lucide-react"

const stats = [
  {
    icon: Award,
    number: "10+",
    label: "Years Experience",
  },
  {
    icon: Users,
    number: "1500+",
    label: "Happy Clients",
  },
  {
    icon: Hammer,
    number: "1000+",
    label: "Projects Completed",
  },
  {
    icon: Gem,
    number: "150+",
    label: "Granite Designs",
  },
]

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <div key={index}>

                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10" />
                </div>

                <div className="text-3xl font-bold">
                  {stat.number}
                </div>

                <p className="mt-2 text-sm opacity-90">
                  {stat.label}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}