"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, MapPin, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    subspecialty: "Interventional Cardiology",
    experience: "15+ years",
    education: "MD, Harvard Medical School",
    languages: ["English", "Igbo"],
    bio: "Dr. Johnson is a renowned cardiologist with extensive experience in interventional cardiology procedures. She has performed over 5,000 cardiac procedures and is recognized for her expertise in complex coronary interventions.",
    certifications: ["Board Certified in Cardiovascular Disease", "Interventional Cardiology Certification"],
    image: "SJ",
    available: true,
  },
  {
    id: 2,
    name: "Dr. Michael Ogunrinde",
    specialty: "Neurology",
    subspecialty: "Stroke & Neurocritical Care",
    experience: "12+ years",
    education: "MD, Olabisi Onabanjo University",
    languages: ["English", "Yoruba"],
    bio: "Dr. Michael is a leading neurologist specializing in stroke care and neurocritical care. He has been instrumental in establishing our comprehensive stroke center.",
    certifications: ["Board Certified in Neurology", "Neurocritical Care Certification"],
    image: "MO",
    available: true,
  },
  {
    id: 3,
    name: "Dr. Williams Umo",
    specialty: "Pediatrics",
    subspecialty: "General Pediatrics",
    experience: "10+ years",
    education: "MD, Stanford University School of Medicine",
    languages: ["English", "Efik"],
    bio: "Dr. Williams is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence. She focuses on preventive care and childhood development.",
    certifications: ["Board Certified in Pediatrics"],
    image: "WU",
    available: true,
  },
  {
    id: 4,
    name: "Dr. Umaru Amad",
    specialty: "Orthopedics",
    subspecialty: "Joint Replacement Surgery",
    experience: "18+ years",
    education: "MD, Mayo Clinic School of Medicine",
    languages: ["Hausa", "English", "French"],
    bio: "Dr. Umaru is a highly skilled orthopedic surgeon specializing in joint replacement and minimally invasive surgery. He has performed over 3,000 joint replacement procedures.",
    certifications: ["Board Certified in Orthopedic Surgery", "Sports Medicine Certification"],
    image: "UA",
    available: true,
  },
  {
    id: 5,
    name: "Dr. Maria Rodriguez",
    specialty: "Oncology",
    subspecialty: "Medical Oncology",
    experience: "14+ years",
    education: "MD, MD Anderson Cancer Center",
    languages: ["English", "Spanish", "Portuguese"],
    bio: "Dr. Rodriguez is a dedicated oncologist specializing in breast cancer and gastrointestinal cancers. She is committed to providing personalized cancer care with a focus on quality of life.",
    certifications: ["Board Certified in Medical Oncology", "Hematology Certification"],
    image: "MR",
    available: true,
  },
  {
    id: 6,
    name: "Dr. David Kim",
    specialty: "Gastroenterology",
    subspecialty: "Advanced Endoscopy",
    experience: "11+ years",
    education: "MD, Columbia University",
    languages: ["English", "Korean"],
    bio: "Dr. Kim is an expert gastroenterologist specializing in advanced endoscopic procedures including ERCP and endoscopic ultrasound. He treats a wide range of digestive disorders.",
    certifications: ["Board Certified in Gastroenterology"],
    image: "DK",
    available: true,
  },
  {
    id: 7,
    name: "Dr. Jennifer Taylor",
    specialty: "Obstetrics & Gynecology",
    subspecialty: "High-Risk Pregnancy",
    experience: "16+ years",
    education: "MD, Yale School of Medicine",
    languages: ["English"],
    bio: "Dr. Taylor is a skilled OB/GYN with expertise in managing high-risk pregnancies. She provides comprehensive women's health services with a focus on safe childbirth.",
    certifications: ["Board Certified in OB/GYN", "Maternal-Fetal Medicine Certification"],
    image: "JT",
    available: false,
  },
  {
    id: 8,
    name: "Dr. Robert Martinez",
    specialty: "Pulmonology",
    subspecialty: "Critical Care Medicine",
    experience: "13+ years",
    education: "MD, UCLA School of Medicine",
    languages: ["English", "Spanish"],
    bio: "Dr. Martinez is a pulmonologist specializing in respiratory diseases and critical care. He has extensive experience treating complex lung conditions and managing ICU patients.",
    certifications: ["Board Certified in Pulmonology", "Critical Care Certification"],
    image: "RM",
    available: true,
  },
];

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [showFiltered, setShowFiltered] = useState(false);

  const filterSearch = () => {
    let filtered = doctors;

    // Filter by specialty
    if (selectedSpecialty !== "all") {
      filtered = filtered.filter(
        (doc) => doc.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
      );
    }

    // Filter by availability
    if (selectedAvailability === "available") {
      filtered = filtered.filter((doc) => doc.available === true);
    }

    setFilteredDoctors(filtered);
    setShowFiltered(true);
  };

  const resetFilters = () => {
    setSelectedSpecialty("all");
    setSelectedAvailability("all");
    setFilteredDoctors(doctors);
    setShowFiltered(false);
  };

  const displayDoctors = showFiltered ? filteredDoctors : doctors;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-linear-to-br from-hospital-light via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-hospital-blue font-semibold">Our Doctors</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Meet Our Expert Physicians
            </h1>
            <p className="text-xl text-gray-600">
              Our team of highly qualified and experienced doctors is dedicated to
              providing you with the best medical care.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-gray-600 font-medium">Filter by:</span>
            <select
              className="px-4 py-2 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="all">All Specialties</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Oncology">Oncology</option>
              <option value="Gastroenterology">Gastroenterology</option>
              <option value="Obstetrics & Gynecology">Obstetrics & Gynecology</option>
              <option value="Pulmonology">Pulmonology</option>
            </select>
            <select
              className="px-4 py-2 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none"
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
            >
              <option value="all">All Availability</option>
              <option value="available">Available Today</option>
            </select>
            <button
              onClick={filterSearch}
              className="bg-hospital-blue px-4 py-2 rounded text-white hover:bg-hospital-dark transition-colors"
            >
              Apply
            </button>
            {showFiltered && (
              <button
                onClick={resetFilters}
                className="bg-gray-400 px-4 py-2 rounded text-white hover:bg-gray-500 transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filtered Results Section */}
      <section id="filter" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showFiltered && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Filter Results
              </h2>
              <p className="text-gray-600">
                Found {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} matching your criteria
              </p>
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                {/* Doctor Image */}
                <div className="aspect-square bg-linear-to-br from-hospital-light to-hospital-blue/20 flex items-center justify-center relative">
                  <span className="text-6xl font-bold text-hospital-blue/30">
                    {doctor.image}
                  </span>
                  {doctor.available ? (
                    <span className="absolute top-4 right-4 bg-hospital-green text-white text-xs font-medium px-3 py-1 rounded-full">
                      Available
                    </span>
                  ) : (
                    <span className="absolute top-4 right-4 bg-gray-400 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Unavailable
                    </span>
                  )}
                </div>

                {/* Doctor Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-hospital-blue font-medium">
                    {doctor.specialty}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {doctor.subspecialty}
                  </p>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{doctor.experience} Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{doctor.education}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {doctor.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {doctor.languages.map((lang) => (
                      <span
                        key={lang}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className="flex-1 bg-hospital-blue text-white text-center py-2 rounded-lg font-medium hover:bg-hospital-dark transition-colors"
                    >
                      Book Appointment
                    </Link>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-hospital-blue hover:text-hospital-blue transition-colors">
                      Profile
                    </button>
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
            Need Help Finding the Right Doctor?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the right specialist for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-hospital-blue px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:1-800-HEALTH"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>1-800-HEALTH</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
