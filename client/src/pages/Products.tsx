import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PRODUCTS } from "@/lib/constants";

const ProductCard = ({ title, items }: { title: string; items: Array<{ name: string; description: string }> }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="shadow-lg group hover:shadow-xl transition-all duration-300 h-full">
        <CardHeader>
          <h2 className="text-2xl font-serif transition-colors group-hover:text-primary">{title}</h2>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group/item"
              >
                <h3 className="font-semibold group-hover/item:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 transition-all group-hover/item:text-gray-900">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-serif mb-12 text-center">Our Products</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard title="Artisanal Cheese" items={PRODUCTS.cheese} />
          <ProductCard title="Premium Yogurt" items={PRODUCTS.yogurt} />
          <ProductCard title="Gourmet Ice Cream" items={PRODUCTS.iceCream} />
        </div>
      </motion.div>
    </div>
  );
}