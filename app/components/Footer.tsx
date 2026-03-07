import Link from "next/link";
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-hospital-blue p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">City General</span>
                <span className="text-sm text-hospital-blue block -mt-1">Hospital</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Providing exceptional medical care with state-of-the-art facilities and compassionate healthcare services since 1985.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-hospital-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hospital-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hospital-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hospital-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/doctors" className="text-gray-400 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Emergency Care</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Cardiology</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Neurology</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Pediatrics</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Orthopedics</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Oncology</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-hospital-blue shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Medical Center Drive<br />
                  Ikoyi Lagos, NG 101001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-hospital-blue shrink-0" />
                <span className="text-gray-400">+234-800-HEALTH (24/7)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-hospital-blue shrink-0" />
                <span className="text-gray-400">info@citygeneralhospital.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-hospital-blue shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Emergency: 24/7<br />
                  Outpatient: Mon-Sat 8AM-6PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} City General Hospital. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
