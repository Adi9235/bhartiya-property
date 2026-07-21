import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from '@/components/shared/section-heading';
import { Reveal } from '@/components/shared/reveal';
import { faqs } from '@/data/faqs';

export function FaqSection() {
  return (
    <section className="section bg-white" id="faq">
      <div className="container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <SectionHeading
          eyebrow="Questions"
          title="The things people ask before they call."
          description="If your question is not here, send it across. We answer plainly."
        />
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="border-t border-sand">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
