import { Counter } from '@/components/shared/counter';
import { Reveal } from '@/components/shared/reveal';
import { stats } from '@/data/stats';

export function Statistics() {
  return (
    <section className="relative overflow-hidden border-y border-sand bg-ivory py-16 md:py-20">
      <div className="container">
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="border-l-2 border-sindoor-500 pl-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-5xl leading-none tracking-tight text-indigo_ink-900">
                    <Counter value={stat.value} />
                  </span>
                  <span className="mt-4 block text-sm font-semibold tracking-tight text-indigo_ink-800">
                    {stat.label}
                  </span>
                  <span className="mt-1 block text-[0.8125rem] text-muted">{stat.caption}</span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
