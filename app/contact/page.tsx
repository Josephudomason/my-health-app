"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-linear-to-br from-hospital-light via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-hospital-blue font-semibold">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Get in Touch With Us
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help. Contact us for appointments, questions, or any
              healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to us through any of the following channels.
                Our team is available 24/7 for emergencies.
              </p>

              <div className="space-y-6">
                {/* Emergency */}
                <div className="bg-hospital-red/10 rounded-2xl p-6 border border-hospital-red/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-hospital-red p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Emergency (24/7)</h3>
                      <p className="text-2xl font-bold text-hospital-red">+234-800-HEALTH</p>
                      <p className="text-gray-600 text-sm">For life-threatening emergencies, call immediately</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-hospital-blue/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-hospital-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(812) 827-4808</p>
                    <p className="text-gray-500 text-sm">Mon-Sat: 8AM-6PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-hospital-blue/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-hospital-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@citygeneralhospital.com</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-hospital-blue/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-hospital-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Medical Center Drive<br />
                      Ikoyi Lagos, NG 101001
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-hospital-blue/10 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-hospital-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hospital Hours</h3>
                    <p className="text-gray-600">Emergency: 24/7</p>
                    <p className="text-gray-500 text-sm">Outpatient: Mon-Sat 8AM-6PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-hospital-blue/10 p-3 rounded-xl hover:bg-hospital-blue hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-hospital-blue/10 p-3 rounded-xl hover:bg-hospital-blue hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-hospital-blue/10 p-3 rounded-xl hover:bg-hospital-blue hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-hospital-blue/10 p-3 rounded-xl hover:bg-hospital-blue hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-hospital-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-hospital-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-hospital-blue font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
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
                        Subject *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option>Appointment Request</option>
                        <option>General Inquiry</option>
                        <option>Patient Feedback</option>
                        <option>Career Opportunity</option>
                        <option>Media Request</option>
                        <option>Other</option>
                      </select>
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
                        <option>Oncology</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hospital-blue focus:ring-2 focus:ring-hospital-blue/20 outline-none transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-hospital-blue text-white py-4 rounded-xl font-semibold hover:bg-hospital-dark transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Find Us</h2>
            <p className="text-gray-600 mt-2">Conveniently located in Healthcare City</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-hospital-blue mx-auto mb-4" />
              <p className="text-gray-600">123 Medical Center Drive
              </p>
              <p className="text-gray-600">Ikoyi Lagos, NG 101001</p>

              <Link
                href="https://maps.google.com"
                target="_blank"
                className="inline-block mt-4 text-hospital-blue font-medium hover:underline"
              >
                Get Directions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
