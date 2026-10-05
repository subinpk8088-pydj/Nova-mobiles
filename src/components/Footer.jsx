import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { waLink } from "../data";
import "./Footer.css"; // 👈 import the CSS here

export default function Footer() {
  return (
    <footer className="footer-3d bg-navy text-white/80 pt-16 pb-10 bg-grid-3d">
      <div className="footer-inner mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-4 gap-8 lg:gap-10">

        {/* Brand Column */}
        <div className="sm:col-span-2 depth-col">
          <span className="flex items-center gap-2.5 font-display font-bold text-lg text-white">
            <Smartphone className="w-5 h-5 text-blueprint float-icon" />
            <span className="tracking-tight drop-shadow-[0_2px_10px_rgba(0,140,255,0.5)]">
              NOVA MOBILES
            </span>
          </span>
          <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-sm">
            Flagship, mid-range, and budget smartphones, plus accessories — with real specs and honest pricing, no
            inflated "launch offers."
          </p>
        </div>

        {/* Shop Column */}
        <div className="depth-col">
          <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-blueprint rounded-full inline-block shadow-[0_0_14px_#3b82f6]" />
            Shop
          </h4>
          <ul className="space-y-2.5 text-sm text-white/50">
            <li><Link to="/shop" className="footer-link-3d hover:text-white">All Phones</Link></li>
            <li><Link to="/shop" className="footer-link-3d hover:text-white">Flagship</Link></li>
            <li><Link to="/shop" className="footer-link-3d hover:text-white">Accessories</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="depth-col">
          <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-blueprint rounded-full inline-block shadow-[0_0_14px_#3b82f6]" />
            Visit / Contact
          </h4>
          <ul className="space-y-2.5 text-sm text-white/50">
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 icon-3d text-blueprint" />
              +91 99999 99999
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 icon-3d text-blueprint" />
              Brigade Road, Bengaluru
            </li>
            <li>
              <a
                href={waLink("Hi! I have a question about a phone.")}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1.5 footer-link-3d"
              >
                <MessageCircle className="w-3.5 h-3.5 icon-3d text-blueprint" />
                WhatsApp Us
              </a>
            </li>
          </ul>

          <div className="flex gap-4 mt-5 text-sm text-white/50">
            <a href="#" className="social-3d hover:text-white" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="social-3d hover:text-white" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-3d mx-auto max-w-7xl px-5 sm:px-8 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Nova Mobiles. All rights reserved.</span>
        <span>Warranty and support on every device we sell.</span>
      </div>

      <div className="absolute bottom-16 right-10 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
    </footer>
  );
}