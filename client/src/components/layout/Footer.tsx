import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg mb-4">La Fenice</h3>
            <p className="text-sm text-gray-600">
              Premium buffalo milk products crafted with tradition and excellence.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-sm text-gray-600 hover:text-primary">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-sm text-gray-600 hover:text-primary">Our Products</a>
                </Link>
              </li>
              <li>
                <Link href="/business">
                  <a className="text-sm text-gray-600 hover:text-primary">For Business</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-gray-600 hover:text-primary">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Dubai, UAE</li>
              <li>info@lafenice.ae</li>
              <li>+971 4 XXX XXXX</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 9am - 1pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} La Fenice Trading LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
