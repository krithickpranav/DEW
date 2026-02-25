// --- 1. Imports ---
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Building, Users, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { sendContactForm, isEmailJsConfigured } from '../services/emailService';

const ContactPage: React.FC = () => {
  // --- 2. Hooks ---
  const [headerRef, isHeaderVisible] = useScrollAnimation();
  const [formRef, isFormVisible] = useScrollAnimation();
  const [mapRef, isMapVisible] = useScrollAnimation();

  // --- 3. State Management ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- 4. Event Handlers ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    if (!isEmailJsConfigured()) {
      toast.error('Email service is not configured. Please contact support.');
      setIsSubmitting(false);
      return;
    }

    try {
      await sendContactForm(formData);
      toast.success('✅ Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EMAILJS FAILED...', error);
      toast.error('Failed to send message. Check console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // --- 5. JSX Rendering ---
  return (
    <div className="min-h-screen bg-slate-50 pt-24 md:pt-32">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center bg-blue-600/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-6 py-2 mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></span>
              <span className="text-blue-600 text-sm font-medium">Get In Touch</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Let's Discuss Your Project
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to get started on your container or cabin project? Get in touch with our team 
              for a free consultation and custom quote tailored to your specific requirements.
            </p>
          </div>

          <div 
            ref={formRef}
            className={`grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12 transition-all duration-1000 delay-300 ${
              isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-fit">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Visit Our Workshop</h4>
                      <p className="text-slate-600">
                        No: 317/3, Salem Main Road,<br />
                        Opp to Syndicate Bank,<br />
                        Tiruchengode, Namakkal District,<br />
                        Tamil Nadu 637209, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Call Us</h4>
                      <p className="text-slate-600">
                        +91 94422 62444<br />
                        +91 97872 62444
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email Us</h4>
                      <p className="text-slate-600">
                        deepamengineeringworks.contact@gmail.co<br />
                        deepamengineeringworks2018@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                      <p className="text-slate-600">
                        Mon - sat: 9:00 AM - 6:30 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Buttons - Enhanced for Mobile */}
                <div className="mt-8 space-y-4">
                  <a
                    href="https://wa.me/919442262444?text=Hello%20Deepam%20Engineering,%20I'm%20interested%20in%20your%20container%20solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" size={22} />
                    <span className="text-base">Chat on WhatsApp</span>
                  </a>
                  <a
                    href="tel:+919442262444"
                    className="group flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    <Phone className="mr-2 group-hover:scale-110 transition-transform" size={22} />
                    <span className="text-base">Call Now</span>
                  </a>
                  <a
                    href="tel:+917418698082"
                    className="group flex items-center justify-center w-full bg-gradient-to-r from-slate-600 to-slate-500 text-white py-4 rounded-lg font-semibold hover:from-slate-700 hover:to-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    <Phone className="mr-2 group-hover:scale-110 transition-transform" size={22} />
                    <span className="text-base">Call Alternative</span>
                  </a>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-lg mt-8">
                <h3 className="text-xl font-bold mb-6">Why Choose Deepam Engineering?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="text-blue-200" size={20} />
                    <span className="text-blue-100">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="text-blue-200" size={20} />
                    <span className="text-blue-100">500+ Containers Built</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-blue-200" size={20} />
                    <span className="text-blue-100">100+ Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Service Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Please describe your requirements, including container/cabin type, quantity, timeline, and any special specifications..."
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
          </div>

          {/* Enhanced Map Section */}
          <div
            ref={mapRef}
            className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 delay-500 ${
              isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-6 md:p-8 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-slate-50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Find Our Workshop</h2>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    Located in Tiruchengode, Tamil Nadu, our state-of-the-art facility
                    is easily accessible for client visits and project consultations.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Open Now</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock size={16} />
                      <span>Mon-Sat: 9:00 AM - 6:30 PM</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://maps.app.goo.gl/x7gNiTTd9nhfrh2G9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    <MapPin className="mr-2" size={20} />
                    Open in Google Maps
                  </a>
                  <a
                    href="https://maps.app.goo.gl/x7gNiTTd9nhfrh2G9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-96 md:h-[550px] relative group">
              {/* Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.8!2d77.796771!3d11.239488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE0JzIyLjIiTiA3N8KwNDcnNDguNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Deepam Engineering Works Location"
                className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
              
              {/* Enhanced Location Card */}
              <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm bg-white/95 backdrop-blur-md px-5 py-4 rounded-xl shadow-2xl border border-slate-200 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Building className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-slate-900 mb-1">Deepam Engineering Works</p>
                    <p className="text-sm text-slate-600 mb-2">No: 317/3, Salem Main Road, Tiruchengode</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin size={14} className="text-blue-600" />
                      <span>Namakkal District, Tamil Nadu 637209</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Overlay */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  onClick={() => window.open('https://maps.app.goo.gl/x7gNiTTd9nhfrh2G9', '_blank')}
                  className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn"
                  title="View larger map"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
                <a
                  href="tel:+919442262444"
                  className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300"
                  title="Call us"
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
                    <p className="text-sm text-slate-600">Located on Salem Main Road, opposite Syndicate Bank. Easy access from NH-47.</p>
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
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Visit Us</h4>
                    <p className="text-sm text-slate-600">Schedule a visit to see our manufacturing facility and discuss your requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;