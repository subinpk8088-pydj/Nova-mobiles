import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Minus, Plus, Trash2, MessageCircle, Smartphone } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { waLink } from "../data";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { items, count, subtotal, removeItem, updateQty, cartOpen, setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const checkoutText = () => {
    const lines = items.map((i) => `• ${i.name} (${i.color}, ${i.storage}) x${i.qty} — ₹${i.price * i.qty}`).join("\n");
    return `Hi! I'd like to order:\n${lines}\n\nSubtotal: ₹${subtotal}`;
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-cloud/95 backdrop-blur-md shadow-sm" : "bg-cloud"}`}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-18 py-4">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg tracking-tight text-navy">
            <Smartphone className="w-5 h-5 text-blueprint" /> NOVA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.path} to={l.path} className="relative group py-2">
                {({ isActive }) => (
                  <>
                    <span className="text-sm font-semibold text-navy">{l.label}</span>
                    <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-blueprint transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setCartOpen(true)} className="relative p-2.5 rounded-full hover:bg-navy/5" aria-label="Open cart">
              <ShoppingBag className="w-5 h-5 text-navy" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-blueprint text-white text-[10px] font-bold rounded-full flex items-center justify-center min-w-[18px] h-[18px]">
                  {count}
                </span>
              )}
            </button>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-navy" aria-label="Toggle menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-cloud shadow-lg overflow-hidden border-t border-navy/10"
            >
              <div className="flex flex-col px-5 pb-5 gap-1 pt-3">
                {NAV_LINKS.map((l) => (
                  <Link key={l.path} to={l.path} className="px-3 py-3 rounded-lg text-navy font-semibold hover:bg-navy/5">
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Cart drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-navy/50 backdrop-blur-sm z-[70]"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-cloud z-[80] flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-navy/10">
                <h3 className="font-display font-bold text-lg text-navy">Your Cart ({count})</h3>
                <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-navy/5 rounded-full">
                  <X className="w-5 h-5 text-navy" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-20">
                    <ShoppingBag className="w-10 h-10 text-navy/20" />
                    <p className="text-sm text-navy/50">Your cart is empty.</p>
                    <Link to="/shop" onClick={() => setCartOpen(false)} className="text-sm font-semibold text-blueprint hover:underline">
                      Browse phones →
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {items.map((i) => (
                      <div key={i.key} className="flex gap-4">
                        <img src={i.image} alt={i.name} className="w-20 h-20 rounded-lg object-cover flex-shrink-0 bg-white" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-navy truncate">{i.name}</h4>
                          <p className="text-xs text-graphite mt-0.5">{i.color} · {i.storage}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2 border border-navy/15 rounded-full px-1">
                              <button onClick={() => updateQty(i.key, i.qty - 1)} className="p-1 hover:text-blueprint"><Minus className="w-3 h-3" /></button>
                              <span className="text-xs font-semibold w-4 text-center">{i.qty}</span>
                              <button onClick={() => updateQty(i.key, i.qty + 1)} className="p-1 hover:text-blueprint"><Plus className="w-3 h-3" /></button>
                            </div>
                            <span className="text-sm font-semibold text-navy">₹{(i.price * i.qty).toLocaleString("en-IN")}</span>
                          </div>
                        </div>
                        <button onClick={() => removeItem(i.key)} className="text-navy/30 hover:text-blueprint h-fit">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-navy/10 px-6 py-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-graphite">Subtotal</span>
                    <span className="font-display font-bold text-lg text-navy">₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <a
                    href={waLink(checkoutText())}
                    target="_blank" rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold rounded-full px-6 py-3.5 hover:bg-navy/85 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Checkout on WhatsApp
                  </a>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
