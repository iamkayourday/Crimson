import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#8B0000] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="wine.svg" alt="Crimson Wine Logo" className="h-12 w-12 mr-4" />
              <h3 className="text-2xl font-serif italic">Crimson Wine</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Handcrafted wines rooted in tradition and crafted with passion for refined taste. 
              Established in 2001 in the heart of Izmir Urla.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Our Wines</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Vineyards</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Winemaking</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Tastings</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 flex-shrink-0" />
                <span className="text-white/80">123 Vineyard Road, Urla, Izmir, Turkey</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3" />
                <span className="text-white/80">+234 456 789 4567</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3" />
                <span className="text-white/80">info@crimsonwine.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Crimson Wine. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;