import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { graniteData } from "@/utils/graniteData";
import { marbleData } from "@/utils/marbleData";
import { tileData } from "@/utils/tileData";
import { stoneData } from "@/utils/stoneData";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Granite", path: "granite" },
  { name: "Marble", path: "marble" },
  { name: "Tiles", path: "tiles" },
  { name: "Stone Products", path: "stone" },
];

const collections = {
  granite: graniteData,
  marble: marbleData,
  tiles: tileData,
  stone: stoneData,
};

export default function Categories() {
  const [indexes, setIndexes] = useState({
    granite: 0,
    marble: 0,
    tiles: 0,
    stone: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) => {
        const updated = { ...prev };

        Object.keys(collections).forEach((key) => {
          const images = Object.values(collections[key]).map((i) => i.image);
          updated[key] = (prev[key] + 1) % images.length;
        });

        return updated;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold">Our Products</h2>
          <p className="text-muted-foreground mt-4">
            Explore our premium collection of granite, marble and stone products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => {
            const images = Object.values(collections[item.path]).map(
              (i) => i.image,
            );

            const current = indexes[item.path];
            const next = (current + 1) % images.length;

            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition"
              >
                <Link to={item.path}>
                  <CardContent className="p-0">
                    <div className="relative h-72 overflow-hidden">
                      {/* Current Image */}
                      <motion.img
                        key={images[current]}
                        src={images[current]}
                        className="absolute w-full h-full object-cover"
                        animate={{ y: "-100%" }}
                        transition={{ duration: 2.5, ease: "linear" }}
                      />

                      {/* Next Image */}
                      <motion.img
                        src={images[next]}
                        className="absolute w-full h-full object-cover"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 2.5, ease: "linear" }}
                      />
                    </div>
                    <p className=" text-center text-lg font-semibold mt-2">
                      {item.name}
                    </p>

                    <div className="flex items-center justify-center py-4">
                      <Button
                        size="lg"
                        variant="outline"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        Explore {item.name}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
