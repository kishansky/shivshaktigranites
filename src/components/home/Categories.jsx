import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Granite",
    image: "/categories/granite.png",
  },
  {
    name: "Marble",
    image: "/categories/marble.png",
  },
  {
    name: "Tiles",
    image: "/categories/tiles.png",
  },
  {
    name: "Stone Products",
    image: "/categories/stone.png",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-muted/50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Our Products
          </h2>

          <p className="text-muted-foreground mt-4">
            Explore our premium collection of granite, marble and stone products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition cursor-pointer"
            >
              <CardContent className="p-0">

                <img
                  src={item.image}
                  className="w-full h-72 object-cover p-0"
                />

                <div className="p-5 text-center font-semibold text-lg">
                  {item.name}
                </div>

              </CardContent>
            </Card>
          ))}

        </div>

      </div>

    </section>
  );
}