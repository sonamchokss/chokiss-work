
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_7h3x0n8', // Service ID
        'template_i0vklb7', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sonam Choki',
        },
        'whFs7AeiOxi_gvwp6' // Public Key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "02240361.cst@rub.edu.bt",
      href: "mailto:02240361.cst@rub.edu.bt",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+975 77415178",
      href: "tel:+97577415178",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sonamchokss",
      href: "https://github.com/sonamchokss",
      color: "from-gray-400 to-slate-400"
    },
    {
      icon: Shield,
      label: "TryHackMe",
      value: "sonamchokss361",
      href: "https://tryhackme.com/p/sonamchokss361",
      color: "from-red-400 to-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <method.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{method.label}</p>
                        <p className="text-white font-medium group-hover:text-teal-400 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-lg border border-teal-400/20">
                  <h4 className="text-white font-semibold mb-2">Quick Response</h4>
                  <p className="text-gray-400 text-sm">
                    I typically respond to emails within 24 hours. For urgent matters, 
                    feel free to reach out via phone.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-teal-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-teal-400"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      rows={6}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-teal-400 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700/50">
          <p className="text-gray-400">
            © 2024 Sonam Choki. Designed with ❤️ and built with modern web technologies.
          </p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            variant="ghost"
            className="mt-4 text-teal-400 hover:text-white hover:bg-teal-400/10"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;