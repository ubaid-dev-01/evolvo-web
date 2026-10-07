import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex min-h-[calc(100vh-var(--navbar-height,80px))] flex-col items-center justify-center px-4 py-20 text-center"
      >
        <div className="mx-auto max-w-lg">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle className="h-10 w-10" aria-hidden />
          </div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Thank you
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We will get back to you within 24 hours.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Our team has received your inquiry and will respond with next steps soon. In the meantime, feel free to explore our case studies or services—we're here when you're ready.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="rounded-lg">
              <Link to="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg">
              <Link to="/contact">Submit another inquiry</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ThankYou;
