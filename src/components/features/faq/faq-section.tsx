"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CONTENT } from "@/config/content";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * FAQセクション
 */
export function FaqSection() {
  const { faq } = CONTENT;

  return (
    <section className="bg-slate-50 py-10 px-4">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-lg mx-auto"
      >
        <motion.h3
          variants={staggerItem}
          className="text-lg font-bold text-navy mb-4 text-center"
        >
          {faq.title}
        </motion.h3>

        <div className="space-y-4">
          {faq.items.map((item, index) => (
            <motion.details
              key={index}
              variants={staggerItem}
              className="bg-white rounded-xl p-4 shadow-sm group"
            >
              <summary className="font-bold text-navy cursor-pointer list-none flex justify-between items-center">
                {item.question}
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


