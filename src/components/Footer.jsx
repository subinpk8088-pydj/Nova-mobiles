import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { waLink } from "../data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-4 gap-10">
        <div className="sm:col-span-2">
          <span className="flex items-center gap-2 font-display font-bold text-lg text-white">
            <Smartphone className="w-5 h-5 text-blueprint" /> NOVA MOBILES
          </span>
          <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-sm">
            Flagship, mid-range, and budget smartphones, plus accessories — with real specs and honest pricing, no
            inflated "launch offers."
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Shop</h4>
          <ul className="space-y-2.5 text-sm text-white/50">
            <li><Link to="/shop" className="hover:text-white">All Phones</Link></li>
            <li><Link to="/shop" className="hover:text-white">Flagship</Link></li>
            <li><Link to="/shop" className="hover:text-white">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Visit / Contact</h4>
          <ul className="space-y-2.5 text-sm text-white/50">
            <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> +91 99999 99999</li>
            <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Brigade Road, Bengaluru</li>
            <li>
              <a href={waLink("Hi! I have a question about a phone.")} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
              </a>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-sm text-white/50">
            <a href="#" className="hover:text-white"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Nova Mobiles. All rights reserved.</span>
        <span>Warranty and support on every device we sell.</span>
      </div>
    </footer>
  );
}
