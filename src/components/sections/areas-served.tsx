'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

import { SectionHeading } from '@/components/shared/section-heading';
import { areas, type Area } from '@/data/areas';
import { cn } from '@/lib/utils';

const typeStyles: Record<Area['type'], string> = {
  Industrial: 'bg-indigo_ink-700',
  Commercial: 'bg-sindoor-600',
  Residential: 'bg-brass',
  Mixed: 'bg-indigo_ink-400',
};

export function AreasServed() {
  const [active, setActive] = useState(0);
  const current = areas[active];

  return (
    <section className="section scroll-mt-24 bg-indigo_ink-900 text-ivory" id="areas">
      <div className="container">
        <SectionHeading
          eyebrow="Areas we serve"
          title="Ten corridors we work daily, from UPSIDC to Lal Kuan."
          description="Pick a corridor to see how we read it. These are the same roads listed on our board since the first office opened in Mohan Nagar."
          variant="light"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ul className="grid gap-3 sm:grid-cols-2">
            {areas.map((area, index) => (
              <li key={area.name}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  className={cn(
                    'group flex w-full items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300',
                    active === index
                      ? 'border-white/30 bg-white/10 backdrop-blur-xl'
                      : 'border-white/10 hover:border-white/25 hover:bg-white/5',
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={cn('size-2 rounded-full', typeStyles[area.type])}
                    />
                    <span className="font-display text-lg tracking-tight">{area.name}</span>
                  </span>
                  <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-ivory/45">
                    {area.type}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <motion.aside
            key={current.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel flex h-full flex-col justify-between p-8"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.6875rem] uppercase tracking-[0.16em] text-ivory/70">
                <MapPin className="size-3.5 text-sindoor-300" />
                {current.type} corridor
              </span>
              <h3 className="mt-6 font-display text-display-md leading-none text-ivory">
                {current.name}
              </h3>
              <p className="mt-5 text-pretty leading-relaxed text-ivory/70">{current.note}</p>
            </div>
            <p className="mt-8 border-t border-white/10 pt-5 text-sm text-ivory/50">
              Active in this corridor since {current.since}
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
