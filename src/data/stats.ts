export interface Stat {
  value: string;
  label: string;
  caption: string;
}

export const stats: Stat[] = [
  { value: '25', label: 'Years in one market', caption: 'Operating in Ghaziabad since 2000' },
  { value: '4', label: 'Offices', caption: 'One head office, three branches' },
  { value: '10', label: 'Corridors covered', caption: 'Industrial, commercial and residential' },
  { value: 'MSME', label: 'Udyam registered', caption: 'UDYAM-UP-29-0156958' },
];

export interface Differentiator {
  title: string;
  body: string;
}

export const differentiators: Differentiator[] = [
  {
    title: 'One market, twenty-five years',
    body: 'We have not chased every new township in NCR. We stayed in the Ghaziabad belt since 2000, which is why we can tell you what a plot on Site IV actually transacted at last month, not what it is being advertised at.',
  },
  {
    title: 'Auction work is our specialisation',
    body: 'Bank property carries risks most brokers avoid: symbolic possession, sitting occupants, unpaid dues. We check those before you deposit EMD, because that is where auction buyers get hurt.',
  },
  {
    title: 'Registered and accountable',
    body: 'Udyam-registered proprietorship with a fixed head office address, a stated fee agreed in writing, and four offices you can physically walk into. No anonymous numbers.',
  },
  {
    title: 'We tell you when to walk away',
    body: 'A deal we talk you out of costs us a commission and keeps you as a client for the next twenty years. That trade has worked out well for us so far.',
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Tell us the requirement',
    body: 'Budget, corridor, size and timeline. A five-minute call or a WhatsApp message is enough to start.',
  },
  {
    step: '02',
    title: 'We shortlist and verify',
    body: 'You get a shortlist with real rates, plus the title, approval and dues position on each option.',
  },
  {
    step: '03',
    title: 'Site visits',
    body: 'We accompany you. You see the property, the access, the neighbours and the condition, not photographs.',
  },
  {
    step: '04',
    title: 'Negotiate and close',
    body: 'We negotiate on your side, prepare the agreement and coordinate registry, mutation and handover.',
  },
];
