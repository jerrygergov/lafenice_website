import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Business from "@/pages/Business";
import Contact from "@/pages/Contact";

function Router() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow relative">
        <AnimatePresence mode="wait" initial={false}>
          <Switch location={location} key={location}>
            <Route path="/">
              <PageTransition>
                <Home />
              </PageTransition>
            </Route>
            <Route path="/about">
              <PageTransition>
                <About />
              </PageTransition>
            </Route>
            <Route path="/products">
              <PageTransition>
                <Products />
              </PageTransition>
            </Route>
            <Route path="/business">
              <PageTransition>
                <Business />
              </PageTransition>
            </Route>
            <Route path="/contact">
              <PageTransition>
                <Contact />
              </PageTransition>
            </Route>
            <Route>
              <PageTransition>
                <NotFound />
              </PageTransition>
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;