import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Clock,
  Shield,
  Heart,
  Brain,
  Bone,
  Baby,
  Eye,
  Stethoscope,
  Activity,
  Ambulance,
  Users,
  Star,
  CheckCircle
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Services data
const services = [
  {
    icon: Ambulance,
    name: "Emergency Care",
    description: "24/7 emergency services with state-of-the-art trauma center and rapid response team.",
  },
  {
    icon: Heart,
    name: "Cardiology",
    description: "Comprehensive heart care including diagnostic testing, interventional procedures, and cardiac surgery.",
  },
  {
    icon: Brain,
    name: "Neurology",
    description: "Advanced neurological care for brain and spine conditions with cutting-edge treatments.",
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description: "Expert bone, joint, and muscle care including sports medicine and joint replacement.",
  },
  {
    icon: Baby,
    name: "Pediatrics",
    description: "Compassionate healthcare for infants, children, and adolescents in a child-friendly environment.",
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description: "Complete eye care services from routine exams to advanced surgical procedures.",
  },
  {
    icon: Stethoscope,
    name: "Internal Medicine",
    description: "Comprehensive adult healthcare focusing on prevention, diagnosis, and treatment.",
  },
  {
    icon: Activity,
    name: "Diagnostic Imaging",
    description: "Advanced imaging services including MRI, CT scan, ultrasound, and X-ray.",
  },
];

// Doctors data
const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ years",
    image: "/doctors/doctor1.jpg",
  },
  {
    name: "Dr. Michael Ogunrinde",
    specialty: "Neurologist",
    experience: "12+ years",
    image: "/doctors/doctor2.jpg",
  },
  {
    name: "Dr. Emily Umo",
    specialty: "Pediatrician",
    experience: "10+ years",
    image: "/doctors/doctor3.jpg",
  },
  {
    name: "Dr. Umaru Amad",
    specialty: "Orthopedic Surgeon",
    experience: "18+ years",
    image: "/doctors/doctor4.jpg",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "segin Balogun",
    role: "Patient",
    content: "The care I received at City General Hospital was exceptional. The doctors and nurses were professional, compassionate, and always kept me informed about my treatment.",
    rating: 5,
  },
  {
    name: "Jennifer Agwu",
    role: "Patient's Family",
    content: "When my father needed emergency surgery, the team at City General acted quickly and professionally. We're forever grateful for saving his life.",
    rating: 5,
  },
  {
    name: "Amad Sodiq",
    role: "Patient",
    content: "From the moment I walked in, I felt comfortable. The staff was friendly, the facility was clean, and the doctors explained everything clearly.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 bg-linear-to-br from-hospital-light via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-hospital-blue/10 text-hospital-dark px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                <span>Accredited by National Health Board</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Health is Our{" "}
                <span className="text-hospital-blue">Priority</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Experience world-class healthcare with our team of experienced doctors,
                advanced medical technology, and compassionate care that puts you first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-hospital-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-hospital-dark transition-all hover:shadow-lg hover:shadow-hospital-blue/25"
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:1-800-HEALTH"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-700 px--200 text-gray8 py-4 rounded-xl font-semibold hover:border-hospital-blue hover:text-hospital-blue transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>+234-800-HEALTH</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-hospital-blue">35+</div>
                  <div className="text-gray-600">Years of Service</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hospital-blue">500+</div>
                  <div className="text-gray-600">Expert Doctors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hospital-blue">50K+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-linear-to-br from-hospital-blue to-hospital-dark p-1">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                  <div className="text-center p-8">
                    <Heart className="w-24 h-24 text-hospital-blue mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900">City General</div>
                    <div className="text-hospital-blue">Hospital</div>
                  </div>
                </div>
              </div>
              {/* Floating cards */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 animate-fade-in-up">
                <div className="bg-hospital-green/10 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-hospital-green" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Verified</div>
                  <div className="text-sm text-gray-500">ISO Certified</div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 animate-fade-in-up delay-200">
                <div className="bg-hospital-blue/10 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-hospital-blue" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500">Support Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-hospital-blue font-semibold">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Comprehensive Medical Care
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a wide range of medical services to meet all your healthcare needs,
              from routine checkups to complex surgeries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-hospital-blue/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-hospital-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-hospital-blue font-medium mt-4 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="text-hospital-blue font-semibold">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                World-Class Healthcare at Your Fingertips
              </h2>
              <p className="text-xl text-gray-600">
                At City General Hospital, we combine cutting-edge medical technology with
                compassionate care to provide the best possible outcomes for our patients.
              </p>

              <div className="space-y-4">
                {[
                  "State-of-the-art medical equipment and facilities",
                  "Team of board-certified specialists",
                  "24/7 emergency and trauma care",
                  "Personalized treatment plans",
                  "Comfortable and modern patient rooms",
                  "Comprehensive insurance coverage accepted",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-hospital-green shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-hospital-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-hospital-dark transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-hospital-light rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-hospital-blue mb-2">24/7</div>
                <div className="text-gray-600">Emergency Care</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-hospital-dark mb-2">98%</div>
                <div className="text-gray-600">Patient Satisfaction</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Medical Specialties</div>
              </div>
              <div className="bg-hospital-blue/5 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-hospital-blue mb-2">100+</div>
                <div className="text-gray-600">Beds Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-gray-50" id="doctors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-hospital-blue font-semibold">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Meet Our Expert Doctors
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Our team of highly qualified and experienced doctors is dedicated to
              providing you with the best medical care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-square bg-linear-to-br from-hospital-light to-hospital-blue/20 flex items-center justify-center">
                  <Users className="w-24 h-24 text-hospital-blue/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {doctor.name}
                  </h3>
                  <p className="text-hospital-blue font-medium">
                    {doctor.specialty}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {doctor.experience} Experience
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all"
            >
              View All Doctors
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-hospital-blue font-semibold">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              We value your feedback and are proud to share the experiences of our patients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-hospital-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-hospital-blue font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hospital-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards better health. Our team is ready to provide you
            with exceptional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-hospital-blue px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
            >
              Book Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:1-800-HEALTH"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>+234-800-HEALTH</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-hospital-blue font-semibold">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Contact Us Today
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions or need to schedule an appointment? We're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-hospital-blue/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-hospital-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+234-800-HEALTH (24/7)</p>
                    <p className="text-gray-500 text-sm">(812) 827-4808</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-hospital-blue/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-hospital-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600">Emergency: 24/7</p>
                    <p className="text-gray-500 text-sm">Outpatient: Mon-Sat 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Request an Appointment
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none transition-all"
                    placeholder="(812) 827-4808"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Department
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none transition-all">
                    <option>Select a department</option>
                    <option>Emergency Care</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your symptoms or concerns..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-hospital-blue text-white py-4 rounded-xl font-semibold hover:bg-hospital-dark transition-all"
                >
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
