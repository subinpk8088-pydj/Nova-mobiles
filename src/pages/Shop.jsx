import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard.jsx";
import { PHONES, CATEGORIES } from "../data";

const SORTS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

const MAX_PRICE = 95000;

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  const filtered = useMemo(() => {
    let list = category === "All" ? [...PHONES] : PHONES.filter((p) => p.category === category);
    list = list.filter((p) => p.price <= maxPrice);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [category, sort, maxPrice]);

  return (
    <div className="pt-28 pb-24 bg-cloud min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-xl mb-10">
          <span className="text-blueprint text-xs font-bold uppercase tracking-[0.2em]">Shop</span>
          <h1 className="mt-3 font-display font-bold text-4xl sm:text-5xl text-navy">All Devices.</h1>
          <p className="mt-3 text-graphite">{filtered.length} products</p>
        </Reveal>

        <div className="grid lg:grid-cols-[220px_1fr] gap-10">
          <Reveal className="lg:sticky lg:top-28 h-fit">
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wide text-navy mb-3">Category</h4>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c} onClick={() => setCategory(c)}
                    className={`text-left text-xs sm:text-sm font-semibold px-4 py-2 rounded-full lg:rounded-lg border transition-colors ${
                      category === c ? "bg-navy text-white border-navy" : "bg-transparent text-navy border-navy/15 hover:border-navy/40"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-navy mb-3">Max Price: ₹{maxPrice.toLocaleString("en-IN")}</h4>
              <input
                type="range" min="1000" max={MAX_PRICE} step="1000" value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-blueprint"
              />
            </div>
          </Reveal>

          <div>
            <div className="flex items-center justify-end gap-2 mb-6">
              <SlidersHorizontal className="w-4 h-4 text-graphite" />
              <select
                value={sort} onChange={(e) => setSort(e.target.value)}
                className="text-sm text-navy border border-navy/15 rounded-full px-3.5 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blueprint"
              >
                {SORTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24 text-graphite">No products match these filters.</div>
            ) : (
              <motion.div layout className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filtered.map((p) => (
                    <motion.div
                      key={p.id} layout
                      initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProductCard product={p} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
