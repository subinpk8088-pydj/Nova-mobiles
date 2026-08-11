import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Check, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard.jsx";
import { getPhoneBySlug, PHONES } from "../data";
import { useCart } from "../context/CartContext.jsx";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getPhoneBySlug(slug);
  const { addItem } = useCart();

  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState(product?.colors[0]?.name);
  const [storage, setStorage] = useState(product?.storageOptions[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return <Navigate to="/shop" replace />;

  const related = PHONES.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  const isLight = (hex) => ["#F0EFEA", "#17D9B4"].includes(hex);

  const handleAdd = () => {
    addItem(product, color, storage, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="pt-28 pb-24 bg-cloud min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <motion.div key={activeImg} initial={{ opacity: 0.6 }} animate={{ opacity: 1 }} className="rounded-2xl overflow-hidden bg-white border border-navy/8 aspect-square mb-4">
              <img src={product.images[activeImg]} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img} onClick={() => setActiveImg(i)}
                  className={`rounded-lg overflow-hidden aspect-square border-2 bg-white transition-colors ${activeImg === i ? "border-blueprint" : "border-transparent"}`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <Reveal>
            <span className="text-blueprint text-xs font-bold uppercase tracking-[0.2em]">{product.category}</span>
            <h1 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-navy mb-3">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold text-navy">₹{product.price.toLocaleString("en-IN")}</span>
              {product.compareAtPrice && (
                <span className="text-base text-graphite/60 line-through">₹{product.compareAtPrice.toLocaleString("en-IN")}</span>
              )}
            </div>
            <p className="text-graphite leading-relaxed mb-8">{product.description}</p>

            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-navy mb-2 block">Color: {color}</span>
              <div className="flex gap-2.5">
                {product.colors.map((c) => (
                  <button
                    key={c.name} onClick={() => setColor(c.name)}
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${color === c.name ? "border-blueprint scale-110" : "border-transparent"}`}
                    style={{ backgroundColor: c.hex }} title={c.name}
                  >
                    {color === c.name && <Check className="w-4 h-4" style={{ color: isLight(c.hex) ? "#0F1729" : "#F7F8FA" }} />}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-wide text-navy mb-2 block">Storage</span>
              <div className="flex flex-wrap gap-2.5">
                {product.storageOptions.map((s) => (
                  <button
                    key={s} onClick={() => setStorage(s)}
                    className={`px-4 h-11 rounded-lg border text-sm font-semibold transition-colors ${
                      storage === s ? "bg-navy text-white border-navy" : "border-navy/20 text-navy hover:border-navy/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3 border border-navy/20 rounded-full px-3 py-2">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}><Minus className="w-4 h-4" /></button>
                <span className="text-sm font-semibold w-5 text-center">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)}><Plus className="w-4 h-4" /></button>
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleAdd}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold rounded-full px-6 py-3.5 hover:bg-navy/85 transition-colors"
              >
                {added ? (<><Check className="w-4 h-4" /> Added to Cart</>) : "Add to Cart"}
              </motion.button>
            </div>

            <div className="border-t border-navy/10 pt-6 mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-navy mb-4">Specifications</h3>
              <dl className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                {product.specs.map((s) => (
                  <React.Fragment key={s.label}>
                    <dt className="text-graphite">{s.label}</dt>
                    <dd className="text-navy font-medium">{s.value}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>

            <div className="flex flex-col gap-3 text-sm text-graphite">
              <span className="flex items-center gap-2"><Truck className="w-4 h-4" /> Free delivery on orders over ₹5,000</span>
              <span className="flex items-center gap-2"><RefreshCw className="w-4 h-4" /> 7-day replacement guarantee</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 100% genuine, authorized stock</span>
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <Reveal><h2 className="font-display font-bold text-2xl text-navy mb-8">More in {product.category}</h2></Reveal>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.08}><ProductCard product={p} /></Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
