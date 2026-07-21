export interface Area {
  name: string;
  type: 'Industrial' | 'Commercial' | 'Residential' | 'Mixed';
  note: string;
  since: string;
}

/** Corridors taken directly from the Bhartiya Property service board. */
export const areas: Area[] = [
  {
    name: 'UPSIDC',
    type: 'Industrial',
    note: 'Allotted plots and built sheds. We track transfer formalities and UPSIDC dues before you bid.',
    since: '2000',
  },
  {
    name: 'Site IV, Sahibabad',
    type: 'Industrial',
    note: 'Our branch sits opposite CEL. Small and mid-size units move fastest here.',
    since: '2002',
  },
  {
    name: 'Site II, Sahibabad',
    type: 'Industrial',
    note: 'Older industrial stock with strong rental demand from logistics and light manufacturing.',
    since: '2001',
  },
  {
    name: 'MGR Road',
    type: 'Mixed',
    note: 'Masoori to Hapur stretch. Land parcels, godowns and roadside commercial frontage.',
    since: '2006',
  },
  {
    name: 'Durga Industrial Area',
    type: 'Industrial',
    note: 'Compact sheds suited to first factory setups and job-work units.',
    since: '2004',
  },
  {
    name: 'Anand Industrial Estate',
    type: 'Industrial',
    note: 'Established estate with reliable power and good truck access.',
    since: '2005',
  },
  {
    name: 'Rajendra Nagar',
    type: 'Residential',
    note: 'Sector-wise residential resale, builder floors and rental inventory.',
    since: '2003',
  },
  {
    name: 'SSGT Road',
    type: 'Commercial',
    note: 'Showroom and office frontage on one of the busiest commercial corridors in Ghaziabad.',
    since: '2007',
  },
  {
    name: 'Mohan Nagar & Karehra',
    type: 'Mixed',
    note: 'Head office catchment. We know practically every building on these lanes.',
    since: '2000',
  },
  {
    name: 'Lal Kuan',
    type: 'Mixed',
    note: 'Branch near Silver City. Warehousing, plots and affordable residential stock.',
    since: '2009',
  },
];
