import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.slug}`}>
      <motion.div whileHover={{ y: -5 }} className="group bg-white rounded-2xl border border-navy/8 p-5 h-full">
        <div className="relative overflow-hidden rounded-xl bg-cloud aspect-square mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {discount > 0 && (
            <span className="absolute top-2.5 left-2.5 bg-blueprint text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
              -{discount}%
            </span>
          )}
          <span className="absolute bottom-2.5 left-2.5 bg-navy/80 text-white text-[10px] font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
            {product.category}
          </span>
        </div>
        <h3 className="text-sm font-display font-bold text-navy truncate">{product.name}</h3>
        <p className="text-xs text-graphite mt-0.5">{product.specs[0]?.value}</p>
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-sm font-bold text-navy">₹{product.price.toLocaleString("en-IN")}</span>
            {product.compareAtPrice && (
              <span className="text-xs text-graphite/60 line-through ml-1.5">₹{product.compareAtPrice.toLocaleString("en-IN")}</span>
            )}
          </div>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((c) => (
              <span key={c.name} className="w-3 h-3 rounded-full border border-navy/15" style={{ backgroundColor: c.hex }} title={c.name} />
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
