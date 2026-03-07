import { CheckCircle, Heart, Shield, Users, Award, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-linear-to-br from-hospital-light via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-hospital-blue font-semibold">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Committed to Excellence in Healthcare
            </h1>
            <p className="text-xl text-gray-600">
              For over 35 years, City General Hospital has been providing exceptional medical care
              to our community with compassion, excellence, and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-hospital-blue font-semibold">Our History</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                A Legacy of Healing Since 1985
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  City General Hospital was founded with a simple mission: to provide
                  world-class healthcare to every member of our community. What started
                  as a small clinic has grown into one of the region's leading medical centers.
                </p>
                <p>
                  Over the years, we've expanded our services, invested in cutting-edge
                  technology, and assembled a team of the finest medical professionals.
                  Through it all, our commitment to compassionate care has never wavered.
                </p>
                <p>
                  Today, we serve over 50,000 patients annually, offering more than 50
                  medical specialties and sub-specialties. Our dedication to excellence
                  has earned us numerous accolades and, more importantly, the trust of
                  our community.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-hospital-light rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-hospital-blue mb-2">1985</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-hospital-dark mb-2">35+</div>
                <div className="text-gray-600">Years</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">50K+</div>
                <div className="text-gray-600">Patients/Year</div>
              </div>
              <div className="bg-hospital-blue/5 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-hospital-blue mb-2">100+</div>
                <div className="text-gray-600">Beds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-hospital-blue font-semibold">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="bg-hospital-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-hospital-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Compassion
              </h3>
              <p className="text-gray-600">
                We treat every patient with empathy and kindness, understanding that
                healing extends beyond physical care to emotional support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="bg-hospital-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-hospital-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for the highest standards in everything we do, from
                clinical outcomes to patient experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="bg-hospital-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-hospital-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards, being transparent and
                accountable in all our interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-hospital-blue font-semibold">Accreditation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Recognized for Quality Care
              </h2>
              <p className="text-gray-600 mb-8">
                City General Hospital maintains the highest standards of quality and
                safety. Our accreditations demonstrate our commitment to continuous
                improvement and excellence in healthcare.
              </p>

              <div className="space-y-4">
                {[
                  "Joint Commission Accredited",
                  "ISO 9001:2015 Certified",
                  "Magnet Recognition for Nursing Excellence",
                  "National Health Board Approved",
                  "CMS 5-Star Rating",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-hospital-green shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="bg-hospital-light rounded-2xl p-6 text-center">
                <Award className="w-12 h-12 text-hospital-blue mx-auto mb-3" />
                <div className="font-semibold text-gray-900">Joint Commission</div>
                <div className="text-sm text-gray-500">Accredited</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <Shield className="w-12 h-12 text-hospital-dark mx-auto mb-3" />
                <div className="font-semibold text-gray-900">ISO</div>
                <div className="text-sm text-gray-500">Certified</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <Users className="w-12 h-12 text-gray-700 mx-auto mb-3" />
                <div className="font-semibold text-gray-900">Magnet</div>
                <div className="text-sm text-gray-500">Recognition</div>
              </div>
              <div className="bg-hospital-blue/5 rounded-2xl p-6 text-center">
                <Star className="w-12 h-12 text-hospital-blue mx-auto mb-3" />
                <div className="font-semibold text-gray-900">5-Star</div>
                <div className="text-sm text-gray-500">CMS Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-hospital-blue font-semibold">Our Facilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              State-of-the-Art Infrastructure
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Emergency & Trauma Center",
                description: "24/7 emergency services with dedicated trauma bays and rapid response capabilities.",
              },
              {
                title: "Surgical Suites",
                description: "12 modern operating rooms equipped with the latest surgical technology.",
              },
              {
                title: "Intensive Care Unit",
                description: "Advanced ICU with private rooms and continuous monitoring systems.",
              },
              {
                title: "Diagnostic Imaging Center",
                description: "Full range of imaging services including MRI, CT, and interventional radiology.",
              },
              {
                title: "Cardiac Catheterization Lab",
                description: "State-of-the-art facility for cardiac procedures and interventions.",
              },
              {
                title: "Maternity Center",
                description: "Comfortable labor, delivery, and recovery rooms with family accommodations.",
              },
            ].map((facility) => (
              <div key={facility.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
