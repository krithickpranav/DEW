// --- 1. Imports ---
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  // --- 2. State Management ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- 3. Event Handlers ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error('EmailJS credentials missing. Check your .env file.');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      toast.success('✅ Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      // Log the full error object from EmailJS for more details
      console.error('EMAILJS FAILED...', error);
      toast.error('Failed to send message. Check console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- 4. JSX Rendering ---
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg mb-2 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Let’s Discuss Your Project
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to get started? Send us your requirements and our team will get in touch soon.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-600">
                    No: 317/3, Salem Main Road,<br />
                    Opp to Syndicate Bank,<br />
                    Tiruchengode, Namakkal District,<br />
                    Tamil Nadu 637209, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600">
                    +91 97872 62444<br />+91 9442262444
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600">
                    deepamengineeringworks2018@gmail.com<br />
                    deepamengineeringworks.contact@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-slate-600">
                    Mon - Sat: 9:00 AM - 6:30 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/94422 62444"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="mr-2" size={20} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="+91 97872 62444"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Service Type
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select service type</option>
                      <option value="32ft-container">32ft Container Inquiry</option>
                      <option value="24ft-container">24ft Container Inquiry</option>
                      <option value="driver-cabin">Driver Cabin Inquiry</option>
                      <option value="body-cabin">Body Cabin Inquiry</option>
                      <option value="modified-cabin">Modified Cabin Inquiry</option>
                      <option value="custom-container">Custom Container Solution</option>
                      <option value="both-services">Containers & Cabins</option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Please describe your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Enhanced Map Section */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Map Header */}
              <div className="p-6 md:p-8 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-slate-50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Visit Our Workshop</h3>
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed">
                      Located in Tiruchengode, Tamil Nadu. Easy access from Salem Main Road.
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/x7gNiTTd9nhfrh2G9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    <MapPin className="mr-2" size={20} />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Map Container */}
              <div className="h-96 md:h-[500px] relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.8!2d77.796771!3d11.239488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE0JzIyLjIiTiA3N8KwNDcnNDguNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Deepam Engineering Works Location"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                ></iframe>

                {/* Enhanced Location Card */}
                <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm bg-white/95 backdrop-blur-md px-5 py-4 rounded-xl shadow-2xl border border-slate-200 transform transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-bold text-slate-900 mb-1">Deepam Engineering Works</p>
                      <p className="text-sm text-slate-600 mb-2">No: 317/3, Salem Main Road</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Open Mon-Sat: 9:00 AM - 6:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Call Button */}
                <div className="absolute top-4 right-4">
                  <a
                    href="tel:+919442262444"
                    className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300"
                    title="Call us now"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              </div>

              {/* Directions Info */}
              <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-200">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">By Road</h4>
                      <p className="text-sm text-slate-600">Salem Main Road, opposite Syndicate Bank. Easy access from NH-47.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Distance</h4>
                      <p className="text-sm text-slate-600">15 km from Namakkal, 45 km from Salem, 60 km from Erode.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Working Hours</h4>
                      <p className="text-sm text-slate-600">Mon-Sat: 9:00 AM - 6:30 PM. Sunday: Closed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
