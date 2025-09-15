import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact TIAR.ai — CMS OCPP Demo & Consultation",
  description:
    "Request a demo or consultation for TIAR.ai's OCPP‑compliant Charging Station Management System (CMS) in Indonesia & Asia.",
};
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

// Import animations
import SlideInScroll from "@/components/animations/collection/SlideInScroll";
import AnimateOnScroll from "@/components/animations/collection/AnimateOnScroll";
import FadeInScroll from "@/components/animations/collection/FadeInScroll";
import ScaleInScroll from "@/components/animations/collection/ScaleInScroll";
import StaggeredScroll from "@/components/animations/collection/StaggeredScroll";

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    description: "Send us an email",
    contact: "support@tiar.ai",
    href: "mailto:support@tiar.ai"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    description: "Call us directly",
    contact: "+1 (412) 983-3798",
    href: "tel:+1 (412) 983-3798"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Office",
    description: "Visit our headquarters",
    contact: "Jl. Benda, Jl. H. Sainin no. 39 Kemang, Jakarta Selatan",
    href: "#"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Hours",
    description: "Monday - Friday",
    contact: "9AM - 6PM PST",
    href: "#"
  }
];

const benefits = [
  "Free consultation and project assessment",
  "Custom pricing tailored to your needs",
  "24/7 technical support and monitoring",
  "Dedicated account management team"
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-brand-50">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/5 to-brand-400/5" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <FadeInScroll duration={0.8}>
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4" />
                Let&apos;s Connect
              </div>
            </FadeInScroll>
            
            <AnimateOnScroll delay={0.2}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get in <span className="text-brand-600">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your charging infrastructure? We&apos;d love to hear about your project and show you how TIAR can help you succeed.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Left section: Company info and contact methods */}
            <div className="w-full lg:w-2/5 space-y-12">
              {/* Contact Methods */}
              <div className="space-y-6">
                <SlideInScroll direction="left" delay={0.4}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    How to Reach Us
                  </h3>
                </SlideInScroll>
                
                <StaggeredScroll stagger={0.1} delay={0.5}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                    {contactMethods.map((method, index) => (
                      <a
                        key={index}
                        href={method.href}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all duration-200 group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{method.title}</h4>
                          <p className="text-sm text-gray-500">{method.description}</p>
                          <p className="text-sm font-medium text-brand-600">{method.contact}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </StaggeredScroll>
              </div>

              {/* Benefits */}
              <SlideInScroll direction="left" delay={0.6}>
                <div className="bg-gradient-to-r from-brand-600 to-brand-500 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    What You Get
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideInScroll>
            </div>

            {/* Right section: Contact form */}
            <div className="w-full lg:w-3/5">
              <ScaleInScroll delay={0.4} duration={0.8} initialScale={0.95}>
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 lg:p-12">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Start Your Journey
                    </h2>
                    <p className="text-gray-600">
                      Tell us about your project and we&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </ScaleInScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}