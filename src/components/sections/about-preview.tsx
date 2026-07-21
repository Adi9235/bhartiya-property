import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';
import { processSteps } from '@/data/stats';

export function AboutPreview() {
  return (
    <section className="section bg-ivory-fade" id="about">
      <div className="container grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About the firm"
            title="A property consultancy built on one market, not fifty."
            description="Bhartiya Property has operated from Mohan Nagar, Ghaziabad since 2000. We started with industrial plots and sheds around Site II and Site IV, and grew outward as the belt did, into commercial frontage on SSGT Road, land on MGR Road, and residential resale in Rajendra Nagar."
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted">
              Today we run a head office and three branch offices, and we are registered with the
              Ministry of MSME as a proprietorship under NIC 68200. What has not changed is how we
              work: we walk the property, we read the papers, and we tell you what we would do if
              the money were ours.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/about">
                Read our full story
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ol>
            {processSteps.map((item, index) => {
              const isLast = index === processSteps.length - 1;
              return (
                <li key={item.step} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-sand bg-white text-[0.6875rem] font-bold tracking-widest text-sindoor-600">
                      {item.step}
                    </span>
                    {!isLast ? <span aria-hidden className="my-2 w-px flex-1 bg-sand" /> : null}
                  </div>
                  <div className={`pt-1.5 ${isLast ? '' : 'pb-9'}`}>
                    <h3 className="font-display text-xl tracking-tight text-indigo_ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
