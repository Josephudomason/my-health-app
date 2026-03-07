import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Brain,
  Bone,
  Baby,
  Eye,
  Stethoscope,
  Activity,
  Ambulance,
  Pill,
  Scan,
  FlaskConical,
  // Microscope,
  // Thermometer,
  HeartHandshake
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    icon: Ambulance,
    name: "Emergency Care",
    shortDescription: "24/7 emergency services with state-of-the-art trauma center.",
    fullDescription: "Our Emergency Department operates 24/7 with a dedicated team of emergency medicine specialists, trauma surgeons, and rapid response teams. We have dedicated trauma bays, isolation rooms, and advanced life support equipment to handle all medical emergencies.",
    features: [
      "24/7 Emergency Services",
      "Trauma Center Level II",
      "Dedicated Pediatric Emergency",
      "Ambulance Services",
      "Rapid Response Team"
    ]
  },
  {
    icon: Heart,
    name: "Cardiology",
    shortDescription: "Comprehensive heart care from prevention to surgery.",
    fullDescription: "Our cardiology department offers complete cardiac care including preventive cardiology, diagnostic testing, interventional procedures, and cardiac surgery. Our team of cardiologists, cardiac surgeons, and nurses work together to provide personalized treatment plans.",
    features: [
      "Cardiac Catheterization Lab",
      "Heart Failure Clinic",
      "Arrhythmia Management",
      "Cardiac Rehabilitation",
      "Structural Heart Program"
    ]
  },
  {
    icon: Brain,
    name: "Neurology",
    shortDescription: "Advanced neurological care for brain and spine conditions.",
    fullDescription: "Our neurology department provides comprehensive care for disorders of the brain, spine, and nervous system. We use cutting-edge technology and treatment approaches for conditions ranging from headaches to complex neurological diseases.",
    features: [
      "Stroke Center",
      "Epilepsy Monitoring Unit",
      "Movement Disorders Clinic",
      "Multiple Sclerosis Center",
      "Neurological Rehabilitation"
    ]
  },
  {
    icon: Bone,
    name: "Orthopedics",
    shortDescription: "Expert bone, joint, and muscle care.",
    fullDescription: "Our orthopedic specialists provide comprehensive musculoskeletal care including sports medicine, joint replacement, spine surgery, and trauma care. We use minimally invasive techniques whenever possible for faster recovery.",
    features: [
      "Joint Replacement Center",
      "Sports Medicine",
      "Spine Surgery",
      "Hand & Upper Extremity",
      "Orthopedic Trauma"
    ]
  },
  {
    icon: Baby,
    name: "Pediatrics",
    shortDescription: "Compassionate healthcare for children.",
    fullDescription: "Our pediatric department provides comprehensive healthcare for infants, children, and adolescents. From well-child care to complex medical conditions, our pediatric specialists are dedicated to providing the best care in a child-friendly environment.",
    features: [
      "Well-Child Care",
      "Pediatric ICU",
      "Neonatal ICU",
      "Pediatric Surgery",
      "Developmental Pediatrics"
    ]
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    shortDescription: "Complete eye care services.",
    fullDescription: "Our ophthalmology department offers comprehensive eye care from routine exams to advanced surgical procedures. We treat all eye conditions including cataracts, glaucoma, macular degeneration, and diabetic eye disease.",
    features: [
      "Cataract Surgery",
      "LASIK & Refractive Surgery",
      "Glaucoma Treatment",
      "Retina Services",
      "Pediatric Ophthalmology"
    ]
  },
  {
    icon: Stethoscope,
    name: "Internal Medicine",
    shortDescription: "Comprehensive adult healthcare.",
    fullDescription: "Our internal medicine physicians provide comprehensive primary care for adults, focusing on prevention, diagnosis, and treatment of adult diseases. We manage complex medical conditions and coordinate care with specialists.",
    features: [
      "Primary Care",
      "Chronic Disease Management",
      "Preventive Medicine",
      "Geriatric Care",
      "Hospital Medicine"
    ]
  },
  {
    icon: Activity,
    name: "Diagnostic Imaging",
    shortDescription: "Advanced imaging for accurate diagnosis.",
    fullDescription: "Our diagnostic imaging department offers a full range of imaging services using state-of-the-art technology. Our radiologists are experts in interpreting imaging studies to provide accurate diagnoses.",
    features: [
      "MRI",
      "CT Scan",
      "Ultrasound",
      "X-Ray",
      "Interventional Radiology"
    ]
  },
  {
    icon: Pill,
    name: "Pharmacy",
    shortDescription: "Full-service pharmacy for patients.",
    fullDescription: "Our pharmacy services provide medications and pharmaceutical care to patients during their hospital stay and after discharge. Our pharmacists work closely with your healthcare team to ensure safe and effective medication therapy.",
    features: [
      "Inpatient Pharmacy",
      "Outpatient Pharmacy",
      "Medication Counseling",
      "Clinical Pharmacy Services",
      "Immunization Services"
    ]
  },
  {
    icon: Scan,
    name: "Radiation Oncology",
    shortDescription: "Advanced cancer treatment.",
    fullDescription: "Our radiation oncology department provides advanced radiation therapy for cancer treatment. We use state-of-the-art equipment and techniques to deliver precise, effective treatment while minimizing side effects.",
    features: [
      "IMRT",
      "VMAT",
      "Stereotactic Radiosurgery",
      "Brachytherapy",
      "PET-CT Simulation"
    ]
  },
  {
    icon: FlaskConical,
    name: "Laboratory Services",
    shortDescription: "Comprehensive diagnostic testing.",
    fullDescription: "Our laboratory provides comprehensive testing services 24/7. From routine blood tests to complex molecular diagnostics, our laboratory team delivers accurate results to support your healthcare.",
    features: [
      "Blood Testing",
      "Pathology",
      "Microbiology",
      "Molecular Diagnostics",
      "Blood Bank"
    ]
  },
  {
    icon: HeartHandshake,
    name: "Maternity Services",
    shortDescription: "Family-centered childbirth experience.",
    fullDescription: "Our maternity center provides comprehensive care for expectant mothers and their babies. We offer a family-centered approach with comfortable labor, delivery, and recovery rooms, as well as Level III neonatal care.",
    features: [
      "Labor & Delivery",
      "Level III NICU",
      "High-Risk Pregnancy Care",
      "Lactation Consulting",
      "Childbirth Education"
    ]
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-linear-to-br from-hospital-light via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-hospital-blue font-semibold">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Comprehensive Medical Services
            </h1>
            <p className="text-xl text-gray-600">
              We offer a wide range of medical services across more than 50 specialties,
              all delivered with compassion and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="bg-hospital-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-hospital-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.shortDescription}
                </p>


                <details className="group">
                  <summary className="cursor-pointer text-hospital-blue font-medium flex items-center gap-2">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-gray-600 mb-4">{service.fullDescription}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <Heart className="w-4 h-4 text-hospital-blue shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-hospital-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing a Service?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the right care for your needs.
            Contact us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-hospital-blue px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/doctors"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Our Doctors
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
