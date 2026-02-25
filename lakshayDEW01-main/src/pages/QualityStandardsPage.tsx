// --- 1. Imports ---
import React from 'react';
import { Award, Shield, CheckCircle, Target, Users, Cog, FileCheck, Truck, Factory, Eye } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const QualityStandardsPage: React.FC = () => {
  // --- 2. Hooks ---
  const [headerRef, isHeaderVisible] = useScrollAnimation();
  const [certificationsRef, visibleCertifications] = useStaggeredAnimation(6, 150);
  const [processRef, isProcessVisible] = useScrollAnimation();
  const [standardsRef, visibleStandards] = useStaggeredAnimation(4, 200);
  const [qualityRef, isQualityVisible] = useScrollAnimation();

  // --- 3. Data Definitions ---
  const certifications = [
    {
      icon: Award,
      title: 'ISO 9001:2015',
      description: 'Quality Management System certification ensuring consistent quality in all our processes.',
      status: 'Certified',
      validUntil: '2025',
      color: 'from-blue-500 to-blue-600',
      certificateImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Shield,
      title: 'ISO 14001:2015',
      description: 'Environmental Management System certification for sustainable manufacturing practices.',
      status: 'Certified',
      validUntil: '2025',
      color: 'from-green-500 to-green-600',
      certificateImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: FileCheck,
      title: 'CE Marking',
      description: 'European Conformity marking for products meeting EU safety, health, and environmental requirements.',
      status: 'Compliant',
      validUntil: 'Ongoing',
      color: 'from-purple-500 to-purple-600',
      certificateImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Truck,
      title: 'ARAI Certification',
      description: 'Automotive Research Association of India certification for vehicle components and cabins.',
      status: 'Certified',
      validUntil: '2024',
      color: 'from-orange-500 to-orange-600',
      certificateImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Factory,
      title: 'BIS Standards',
      description: 'Bureau of Indian Standards compliance for manufacturing quality and safety standards.',
      status: 'Compliant',
      validUntil: 'Ongoing',
      color: 'from-red-500 to-red-600',
      certificateImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: CheckCircle,
      title: 'MSME Registration',
      description: 'Micro, Small & Medium Enterprises registration ensuring compliance with government standards.',
      status: 'Registered',
      validUntil: 'Active',
      color: 'from-cyan-500 to-cyan-600',
      certificateImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const qualityProcess = [
    {
      step: '01',
      title: 'Material Inspection',
      description: 'Rigorous inspection of all raw materials including steel, aluminum, and components before production.',
      icon: Eye,
      details: ['Chemical composition analysis', 'Dimensional verification', 'Surface quality check', 'Supplier certification review']
    },
    {
      step: '02',
      title: 'Production Control',
      description: 'Continuous monitoring and control throughout the manufacturing process with quality checkpoints.',
      icon: Cog,
      details: ['Welding quality control', 'Dimensional accuracy checks', 'Assembly verification', 'Process documentation']
    },
    {
      step: '03',
      title: 'Testing & Validation',
      description: 'Comprehensive testing of finished products to ensure they meet all specifications and standards.',
      icon: Target,
      details: ['Load testing', 'Durability testing', 'Weather resistance testing', 'Safety compliance verification']
    },
    {
      step: '04',
      title: 'Final Inspection',
      description: 'Thorough final inspection and quality assurance before product delivery to customers.',
      icon: CheckCircle,
      details: ['Visual inspection', 'Functional testing', 'Documentation review', 'Customer specification compliance']
    }
  ];

  const qualityStandards = [
    {
      icon: Shield,
      title: 'Material Standards',
      description: 'We use only high-grade materials that meet international standards for strength, durability, and safety.',
      standards: ['IS 2062 Grade B Steel', 'Aluminum 6061-T6', 'Corrosion-resistant coatings', 'Food-grade materials for specialized containers']
    },
    {
      icon: Cog,
      title: 'Manufacturing Standards',
      description: 'Our manufacturing processes follow strict quality protocols to ensure consistent product quality.',
      standards: ['AWS D1.1 Welding Standards', 'Precision cutting tolerances', 'Assembly quality protocols', 'Surface treatment standards']
    },
    {
      icon: Target,
      title: 'Testing Standards',
      description: 'Comprehensive testing procedures ensure our products meet or exceed industry requirements.',
      standards: ['Load capacity testing', 'Weather resistance testing', 'Fatigue testing', 'Safety compliance testing']
    },
    {
      icon: Users,
      title: 'Service Standards',
      description: 'Our commitment to customer satisfaction through quality service and support.',
      standards: ['24/7 customer support', 'Timely delivery guarantee', 'After-sales service', 'Warranty compliance']
    }
  ];

  // --- 4. JSX Rendering ---
  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32">
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
              <span className="text-blue-600 text-sm font-medium">Quality Assurance</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Quality Standards & Certifications
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is reflected in our comprehensive quality management system, 
              international certifications, and rigorous testing procedures that ensure every product meets the highest standards.
            </p>
          </div>

          {/* Certifications Section */}
          <div className="mb-16">
            <div className={`text-center mb-10 transition-all duration-1000 ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Certifications</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We maintain the highest industry standards through internationally recognized certifications and compliance programs.
              </p>
            </div>

            <div ref={certificationsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 ${
                    visibleCertifications[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-xl transition-all duration-500`}></div>
                  
                  {/* Certificate Image */}
                  <div className="relative mb-4">
                    <img
                      src={cert.certificateImage}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg"></div>
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-slate-700">
                      Certificate
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center`}>
                        <cert.icon className="text-white" size={24} />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          {cert.status}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">{cert.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{cert.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Valid Until:</span>
                      <span className="font-semibold text-slate-700">{cert.validUntil}</span>
                    </div>

                    {/* View Certificate Button */}
                    <button className="w-full mt-4 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                      View Certificate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Process Section */}
          <div 
            ref={processRef}
            className={`mb-16 transition-all duration-1000 ${
              isProcessVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Quality Process</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A systematic approach to quality control that ensures every product meets our exacting standards.
              </p>
            </div>

            <div className="space-y-8">
              {qualityProcess.map((process, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {process.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-slate-50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <process.icon className="text-blue-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h3>
                        <p className="text-slate-600 mb-4">{process.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {process.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-2">
                              <CheckCircle className="text-green-600" size={16} />
                              <span className="text-sm text-slate-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Standards Section */}
          <div ref={standardsRef} className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Quality Standards We Follow</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We adhere to international standards and best practices across all aspects of our operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {qualityStandards.map((standard, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 ${
                    visibleStandards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                      <standard.icon className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{standard.title}</h3>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{standard.description}</p>

                  <div className="space-y-3">
                    {standard.standards.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Commitment Section */}
          <div 
            ref={qualityRef}
            className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 lg:p-12 text-center transition-all duration-1000 ${
              isQualityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">Our Quality Commitment</h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Quality is not just a goal for us—it's a fundamental principle that guides every aspect of our business. 
                From material selection to final delivery, we ensure that every container and cabin meets the highest standards 
                of durability, safety, and performance.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-blue-200">Quality Inspection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99%</div>
                  <div className="text-blue-200">Customer Satisfaction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg">
                  Download All Certificates
                </button>
                <button className="text-white font-semibold hover:text-blue-200 transition-colors">
                  Contact Quality Team →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityStandardsPage;