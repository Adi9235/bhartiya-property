import { Check } from 'lucide-react';

import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { differentiators } from '@/data/stats';

export function WhyChooseUs() {
  return (
    <section className="section bg-white" id="why-us">
      <div className="container">
        <SectionHeading
          eyebrow="Why clients stay"
          title="Depth in one belt beats a listing count you cannot verify."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-sand bg-sand md:grid-cols-2">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07} className="bg-white">
              <div className="h-full p-8 md:p-10">
                <span className="grid size-9 place-items-center rounded-full bg-sindoor-50 text-sindoor-600">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight text-indigo_ink-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
