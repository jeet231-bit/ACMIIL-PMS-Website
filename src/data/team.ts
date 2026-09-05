import { ABOUT } from './content';

// Leadership, board and fund-management people shown on the About page.
// Grouped and ordered by hierarchy: Promoters → Independent Directors →
// Fund Management. Each card is clickable and opens the member's full bio.
// Photos live in /public/team; a member with no photo shows an initials avatar.

export interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  bio: string[];
  timeline?: string[];
}

export interface TeamGroup {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export const TEAM_GROUPS: TeamGroup[] = [
  {
    title: 'Promoters',
    subtitle: 'The visionaries behind the group’s legacy and leadership.',
    members: [
      {
        name: 'Mrs. Madhu Lunawat',
        role: 'Founder, Wealth Company',
        photo: '/team/madhu-lunawat.jpg',
        bio: [
          'Founder of Wealth Company and the Bharat Value Fund. She built India’s first female-founded mutual fund house, which launched four active funds simultaneously in 2025 and achieved ₹2,000 crore in debut NFO collections.',
        ],
      },
    ],
  },
  {
    title: 'Independent Directors',
    subtitle: 'A distinguished board panel strengthening governance and oversight.',
    members: [
      {
        name: 'Mr. Krishan Kumar Jalan, IAS (Retd.)',
        role: 'Independent Director',
        photo: '/team/krishan-kumar-jalan.jpg',
        bio: [
          'Mr. Krishan Kumar Jalan, IAS (Retd.), has over 35 years of experience and has served in various senior positions with distinction. He retired as Principal Secretary, Government of India, Ministry of Micro, Small and Medium Enterprises. Earlier roles included Central Provident Fund Commissioner, Additional Chief Secretary to the Government of Haryana, and Administrative Secretary of departments including Public Works & Architecture, Town and Country Planning, Urban Estate, Urban Local Bodies and Irrigation.',
          'In the Government of India he served as Director and Joint Secretary in the Ministry of Textiles and as Secretary General of the Apparel Export Promotion Council, and was instrumental in the construction of the Apparel Mart at Gurgaon. He has also served as Deputy Commissioner / District Magistrate of five districts — Bhiwani, Faridabad, Karnal, Sonepat and Rewari.',
        ],
      },
      {
        name: 'Mr. Suresh Kumar Jain',
        role: 'Independent Director',
        photo: '/team/suresh-kumar-jain.jpg',
        bio: [
          'Mr. Suresh Kumar Jain has over 36 years of rich experience with public-sector banks in India. He served as an Executive Director of Union Bank of India, overseeing the bank’s operations in London, Hong Kong, Abu Dhabi, Dubai, Beijing, Shanghai, Antwerp and Sydney, and was responsible for Human Resource Development and the management of non-performing / stressed-asset and MSME portfolios.',
          'Prior to Union Bank of India, he served up to the position of General Manager, National Banking Group — Western India at Bank of India, looking after overseas banking and large-credit processing. He also worked as Manager (Credit) at Bank of India, Hong Kong, overseeing one of the bank’s largest international portfolios of trade finance and loan syndications.',
        ],
      },
    ],
  },
  {
    title: 'Fund Management',
    subtitle: 'Leadership that combines wisdom, strategy and execution.',
    members: [
      {
        name: ABOUT.leadership.name,
        role: ABOUT.leadership.role,
        photo: ABOUT.leadership.photo,
        bio: ABOUT.leadership.bio,
        timeline: ABOUT.leadership.timeline,
      },
    ],
  },
];
