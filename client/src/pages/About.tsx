import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-serif mb-12 text-center">Our Story</h1>
        
        <div className="max-w-3xl mx-auto">
          <section className="mb-16">
            <h2 className="text-2xl font-serif mb-6">Heritage of Excellence</h2>
            <p className="text-lg text-gray-700 mb-6">
              La Fenice Trading LLC was founded with a vision to bring the finest buffalo milk
              products to discerning customers. Our journey began with a deep appreciation
              for traditional dairy craftsmanship combined with modern innovation.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-serif mb-6">Our Process</h2>
            <p className="text-lg text-gray-700 mb-6">
              Every product at La Fenice is crafted using traditional methods passed down
              through generations. We work exclusively with premium buffalo milk, ensuring
              the highest quality in every batch we produce.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6">Quality Assurance</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
              <li>100% pure buffalo milk</li>
              <li>No artificial preservatives</li>
              <li>Artisanal production methods</li>
              <li>Strict quality control standards</li>
              <li>Regular quality audits</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
