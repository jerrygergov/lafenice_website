import { motion } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto py-24"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center leading-tight">
          The Art of Buffalo Milk
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            At La Fenice, we honor the ancient traditions of Italian dairy craftsmanship,
            creating exceptional products that elevate the culinary experience.
            Our commitment to excellence begins with the finest buffalo milk,
            transformed through artisanal processes into products of unparalleled quality.
          </p>
          <Button asChild variant="outline" size="lg" className="transition-premium">
            <Link href="/about">Discover Our Heritage</Link>
          </Button>
        </div>
      </motion.section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-serif mb-16 text-center"
          >
            Artisanal Excellence
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif mb-4">Premium Cheese</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Handcrafted mozzarella and burrata, made fresh daily using
                    traditional techniques passed down through generations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif mb-4">Artisanal Yogurt</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rich, creamy yogurt crafted from pure buffalo milk,
                    offering an unparalleled taste experience.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif mb-4">Luxury Ice Cream</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Indulgent flavors made with the finest ingredients,
                    delivering a truly premium dessert experience.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-24 text-center"
      >
        <h2 className="text-4xl font-serif mb-12">For Fine Dining Excellence</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Partner with La Fenice to offer your guests an unparalleled dairy experience.
          Our products are crafted specifically for luxury hotels and fine dining establishments.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/business">Partner With Us</Link>
        </Button>
      </motion.section>
    </div>
  );
}