import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-16 px-4 lg:px-0 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left section: text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            We'd love to hear from you. Whether you have a question, a project idea, or just want to connect—reach out and we’ll get back to you as soon as possible.
          </p>
          <p className="text-md text-gray-500">
            You can also email us directly at{" "}
            <a href="mailto:hello@yourcompany.com" className="text-blue-600 hover:underline">
              noreply@tiar.ai
            </a>
          </p>
        </div>

        {/* Right section: contact form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

