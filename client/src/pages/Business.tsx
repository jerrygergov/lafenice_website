import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Business() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-serif mb-12 text-center">For Businesses</h1>

        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-2xl font-serif mb-8">Why Choose La Fenice?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif mb-4">Premium Quality</h3>
                  <p className="text-gray-600">
                    Our products are crafted from 100% buffalo milk, ensuring superior
                    taste and quality that will delight your customers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif mb-4">Exclusive Supply</h3>
                  <p className="text-gray-600">
                    Partner with us to offer unique, premium dairy products that set
                    your establishment apart from the competition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-serif mb-8">Partnership Benefits</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>• Dedicated account management</li>
              <li>• Flexible delivery schedules</li>
              <li>• Custom product solutions</li>
              <li>• Quality assurance guarantee</li>
              <li>• Professional training support</li>
            </ul>
          </section>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary">
              <Link href="/contact">Contact Us to Partner</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
