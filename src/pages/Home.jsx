import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, RefreshCw, Star } from "lucide-react";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard.jsx";
import PhoneOrbit from "../components/PhoneOrbit.jsx";
import { PHONES } from "../data";

const FEATURED = [PHONES[0], PHONES[2], PHONES[4], PHONES[6]];

const VALUES = [
  { icon: ShieldCheck, title: "100% Genuine Stock", desc: "Sourced directly from authorized distributors, never gray market." },
  { icon: Truck, title: "Free Delivery Over ₹5,000", desc: "Tracked delivery across India, most orders in 2–5 days." },
  { icon: RefreshCw, title: "7-Day Replacement", desc: "Dead-on-arrival or wrong item? Full replacement, no questions." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-cloud overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-blueprint border border-blueprint/30 rounded-full px-4 py-1.5 mb-6">
              Flagship to Budget, All Genuine
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-navy leading-[1.05] mb-6">
              Real specs. <span className="text-blueprint">Honest</span> prices.
            </h1>
            <p className="text-graphite text-base sm:text-lg max-w-md leading-relaxed mb-8">
              No inflated "launch price" gimmicks — every phone listed at what it actually costs, with full specs up
              front and a real warranty behind it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop" className="inline-flex items-center gap-2 bg-navy text-white font-semibold rounded-full px-6 py-3.5 hover:bg-navy/85 transition-colors">
                Shop All Phones <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/shop" className="inline-flex items-center gap-2 border border-navy/20 text-navy font-semibold rounded-full px-6 py-3.5 hover:bg-navy/5 transition-colors">
                See Accessories
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <PhoneOrbit image={PHONES[0].images[0]} />
          </motion.div>
        </div>
      </section>

      {/* Value strip */}
      <section className="bg-navy py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blueprint/20 flex items-center justify-center flex-shrink-0">
                <v.icon className="w-4.5 h-4.5 text-blueprint" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{v.title}</h3>
                <p className="text-xs text-white/50 mt-0.5">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured phones */}
      <section className="py-20 sm:py-28 bg-cloud">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex items-end justify-between mb-12">
            <div>
              <span className="text-blueprint text-xs font-bold uppercase tracking-[0.2em]">Bestsellers</span>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-navy">Most ordered this month.</h2>
            </div>
            <Link to="/shop" className="hidden sm:inline-flex items-center gap-1.5 text-navy text-sm font-semibold hover:text-blueprint transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-blueprint text-blueprint" />)}
            </div>
            <p className="font-display text-xl sm:text-2xl text-navy leading-snug">
              "Compared prices across four stores before buying the X1 Pro here — same phone, ₹6,000 cheaper, and it
              arrived two days early."
            </p>
            <p className="mt-5 text-sm font-semibold text-graphite">— Rohit K., Verified Buyer</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blueprint/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">
              Not sure which phone fits your budget?
            </h2>
            <a
              href="https://wa.me/919999999999?text=Hi!%20Can%20you%20help%20me%20pick%20a%20phone%20within%20my%20budget%3F"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-teal text-navy font-semibold rounded-full px-7 py-3.5 hover:bg-[#13c0a0] transition-colors"
            >
              Ask Us on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
