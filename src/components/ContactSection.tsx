
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { addContactMessage, testFirestoreConnection, ContactMessage } from '@/services/resumeService';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

const ContactSection = () => {
  const { toast: shadowToast } = useToast();
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<null | { text: string; isError: boolean }>(null);
  const [connectionStatus, setConnectionStatus] = useState<boolean | null>(null);

  // Test Firebase connection on component mount
  useEffect(() => {
    const checkConnection = async () => {
      const isConnected = await testFirestoreConnection();
      setConnectionStatus(isConnected);
      console.log("Firebase connection status:", isConnected ? "Connected" : "Not connected");
    };
    
    checkConnection();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      console.log("Submitting form data:", formData);
      
      // Show a loading toast
      const loadingToast = toast.loading("Sending your message...");
      
      const messageId = await addContactMessage(formData);
      
      // Dismiss the loading toast
      toast.dismiss(loadingToast);
      
      if (messageId) {
        setSubmitMessage({ 
          text: "Thank you for your message! I'll get back to you soon.", 
          isError: false 
        });
        
        // Show success toast
        toast.success("Message sent successfully!");
        shadowToast({
          title: "Message sent",
          description: "Your message has been sent successfully!",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error("Failed to send message - no message ID returned");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      
      let errorMessage = "There was an error sending your message. Please try again later.";
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
        console.error("Error details:", error.stack);
      }
      
      setSubmitMessage({
        text: errorMessage,
        isError: true
      });
      
      // Show error toast
      toast.error("Failed to send message");
      shadowToast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-2">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-portfolio-blue mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {connectionStatus === false && (
            <Alert className="mb-6 border-amber-300 bg-amber-50">
              <AlertDescription className="text-amber-800">
                Warning: Unable to connect to the database. Contact form may not work properly.
              </AlertDescription>
            </Alert>
          )}
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            {submitMessage && (
              <Alert 
                className={`mb-6 ${
                  submitMessage.isError ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'
                }`}
              >
                <AlertDescription className={submitMessage.isError ? 'text-red-800' : 'text-green-800'}>
                  {submitMessage.text}
                </AlertDescription>
              </Alert>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6 space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="mb-6 space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hello, I'd like to discuss a project..."
              />
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                disabled={isSubmitting || connectionStatus === false}
                className="inline-flex items-center px-8 py-3 bg-portfolio-blue text-white font-semibold rounded-full hover:bg-portfolio-darkBlue transition duration-300 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
