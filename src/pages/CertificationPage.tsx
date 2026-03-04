// --- 1. Imports ---
import React from 'react';
import { Shield, Award, CheckCircle, FileCheck, Building2, User, MapPin, Calendar, BadgeCheck, Target, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CertificationPage: React.FC = () => {
  // --- 2. Hooks ---
  const [heroRef, isHeroVisible] = useScrollAnimation();
  const [certRef, isCertVisible] = useScrollAnimation();
  const [companyRef, isCompanyVisible] = useScrollAnimation();
  const [qualityRef, isQualityVisible] = useScrollAnimation();

  // --- 3. JSX Rendering ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-24 md:pt-32">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <div
            ref={heroRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full px-6 py-2 mb-6 shadow-lg">
              <Shield className="mr-2 animate-pulse" size={20} />
              <span className="text-sm font-semibold tracking-wide">ARAI CERTIFIED</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              ARAI Certified<br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Bus Body Builder
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Deepam Engineering Works is officially accredited by the{' '}
              <span className="font-semibold text-slate-900">
                Automotive Research Association of India (ARAI)
              </span>{' '}
              for Bus Body Building.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md">
                <BadgeCheck className="text-green-600" size={24} />
                <span className="font-semibold text-slate-900">Government Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md">
                <Award className="text-blue-600" size={24} />
                <span className="font-semibold text-slate-900">CMVR Compliant</span>
              </div>
            </div>
          </div>

          {/* Certificate Details Section */}
          <div
            ref={certRef}
            className={`mb-16 transition-all duration-1000 delay-200 ${
              isCertVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FileCheck size={32} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-center mb-2">Certificate of Accreditation</h2>
                <p className="text-center text-blue-100 text-lg">Bus Body Building</p>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileCheck className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Certificate Type</p>
                        <p className="text-lg font-semibold text-slate-900">
                          Certificate of Accreditation for Bus Body Building
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BadgeCheck className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Certificate Number</p>
                        <p className="text-lg font-semibold text-slate-900 font-mono">
                          ARAI/BBB/22-23/3000022181/454, Ext 01
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Category</p>
                        <p className="text-lg font-semibold text-slate-900">Category B</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Date of Issue</p>
                        <p className="text-lg font-semibold text-slate-900">April 06, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl border border-blue-100">
                  <p className="text-center text-slate-700 leading-relaxed">
                    This certification validates our commitment to manufacturing excellence and compliance with 
                    <span className="font-semibold text-slate-900"> Central Motor Vehicle Rules (CMVR)</span> and 
                    government-mandated safety standards for bus body building.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details Section */}
          <div
            ref={companyRef}
            className={`mb-16 transition-all duration-1000 delay-300 ${
              isCompanyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Accredited Company Details</h2>
              <p className="text-slate-600 text-lg">Official information as per ARAI certification</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Building2 className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">Company Name</h3>
                <p className="text-slate-600 text-center text-lg">M/s Deepam Engineering</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">Location</h3>
                <p className="text-slate-600 text-center text-lg">
                  Tiruchengode, Namakkal<br />Tamil Nadu
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <User className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">Proprietor</h3>
                <p className="text-slate-600 text-center text-lg">B. Logeswaran</p>
              </div>
            </div>
          </div>

          {/* Quality Commitment Section */}
          <div
            ref={qualityRef}
            className={`transition-all duration-1000 delay-400 ${
              isQualityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-4">
                <Target className="text-blue-600 mr-2" size={20} />
                <span className="text-blue-600 font-semibold">Our Commitment</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Quality Assurance Standards</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                We maintain the highest standards of quality and safety in every bus body we manufacture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: CheckCircle,
                  title: 'Government Compliance',
                  description: 'Full compliance with Government bus body building norms and regulations'
                },
                {
                  icon: BadgeCheck,
                  title: 'CMVR Guidelines',
                  description: 'Approved manufacturing capability as per Central Motor Vehicle Rules'
                },
                {
                  icon: TrendingUp,
                  title: 'Periodic Audits',
                  description: 'Regular audit and technical assessment by ARAI authorities'
                },
                {
                  icon: Shield,
                  title: 'Structural Strength',
                  description: 'Assured structural strength and safety standards in all builds'
                },
                {
                  icon: Award,
                  title: 'Quality Improvement',
                  description: 'Commitment to continuous quality improvement and innovation'
                },
                {
                  icon: FileCheck,
                  title: 'Documentation',
                  description: 'Complete documentation and traceability for every project'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Partner with a Certified Leader
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Experience the difference of working with an ARAI-certified bus body builder committed to excellence, 
              safety, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-white/20"
              >
                View Our Products
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CertificationPage;
