import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for your inquiry. We'll get back to you soon.",
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-serif mb-12 text-center">Contact Us</h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>Address:</strong><br />
                  La Fenice Trading LLC<br />
                  Dubai, UAE
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong><br />
                  info@lafenice.ae
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong><br />
                  +971 4 XXX XXXX
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className="w-full"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <Input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    placeholder="Your Email"
                    className="w-full"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <Textarea
                    {...register("message", { required: "Message is required" })}
                    placeholder="Your Message"
                    className="w-full"
                    rows={5}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                  )}
                </div>

                <Button type="submit" className="w-full bg-primary">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
