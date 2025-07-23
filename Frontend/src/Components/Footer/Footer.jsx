import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMailBulk, FaMailchimp, FaVoicemail, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src='/assets/logo_small.svg'
              alt="Chirrp"
              className="h-10 w-auto mr-2"
            />
          </div>
          <p className="text-sm">
            Chirrp is a leading provider of awesome products and services,
            committed to delivering excellence and innovation worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#popularcoupon" className="hover:text-white">
                Popular Coupon
              </a>
            </li>
            <li>
              <a href="#newcoupon" className="hover:text-white">
                New Coupon
              </a>
            </li>
            <li>
              <a href="#form" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Rd. No 9, Jubilee Hills, Hyderabad</li>
            <li>Phone: 8019908855</li>
            <li>Email: ops.chirrp@gmail.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://wa.me/8019908855" target='_blank' className="hover:text-white">
              <FaWhatsapp size={20} />
            </a>
            <a href="#" target='_blank' className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" target='_blank' className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="mailto:ops.chirrp@gmail.com" target='_blank' className="hover:text-white">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Chirrp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
