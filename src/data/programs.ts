export interface Program {
  id: number;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  category: 'education' | 'food' | 'healthcare' | 'shelter' | 'emergency';
  status: 'completed' | 'ongoing' | 'upcoming';
  image: string;
  gallery: string[];
  date: string;
  location: string;
  beneficiaries: number;
  fundsRaised: number;
  fundsGoal: number;
  impact: string[];
}

export const programs: Program[] = [
  {
    id: 1,
    title: "Monthly Food Distribution Drive",
    slug: "monthly-food-distribution",
    description: "Providing nutritious meals and essential food supplies to underprivileged families across urban and rural communities.",
    fullDescription: "Our monthly food distribution program reaches over 500 families in need, providing them with essential groceries, fresh produce, and nutritious meal kits. We partner with local farmers and food banks to ensure quality and sustainability. Each family receives enough supplies to last two weeks, helping them maintain food security and dignity.",
    category: 'food',
    status: 'ongoing',
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop"
    ],
    date: "2024-01-15",
    location: "Multiple locations across the city",
    beneficiaries: 2500,
    fundsRaised: 45000,
    fundsGoal: 60000,
    impact: [
      "500+ families receive monthly food supplies",
      "Zero food waste through efficient distribution",
      "Partnership with 15 local food banks",
      "95% beneficiary satisfaction rate"
    ]
  },
  {
    id: 2,
    title: "Back to School Initiative 2024",
    slug: "back-to-school-2024",
    description: "Providing school supplies, uniforms, and educational materials to children from low-income families to ensure they start the academic year prepared.",
    fullDescription: "Education is the key to breaking the cycle of poverty. Our Back to School Initiative provides complete educational kits including books, stationery, school bags, uniforms, and shoes to children who otherwise couldn't afford them. We've partnered with 25 schools to identify children in need and ensure they have everything required for a successful academic year.",
    category: 'education',
    status: 'completed',
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
    ],
    date: "2024-01-05",
    location: "25 schools across 5 districts",
    beneficiaries: 850,
    fundsRaised: 125000,
    fundsGoal: 120000,
    impact: [
      "850 children received complete school kits",
      "100% attendance improvement in first month",
      "Partnership with 25 schools established",
      "15 volunteer teachers recruited for tutoring"
    ]
  },
  {
    id: 3,
    title: "Free Medical Camp & Health Checkups",
    slug: "free-medical-camp-2024",
    description: "Organizing free medical checkups, consultations, and medicine distribution for underprivileged communities with limited healthcare access.",
    fullDescription: "Healthcare is a fundamental right. Our medical camps bring qualified doctors, nurses, and healthcare professionals to underserved communities. We provide free consultations, basic diagnostics, medicines, and referrals for serious cases. Special focus is given to maternal health, child nutrition, and chronic disease management.",
    category: 'healthcare',
    status: 'upcoming',
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=600&fit=crop"
    ],
    date: "2024-02-10",
    location: "Rural Health Center, District 3",
    beneficiaries: 600,
    fundsRaised: 28000,
    fundsGoal: 55000,
    impact: [
      "Expected 600+ patients to be served",
      "10+ specialist doctors volunteering",
      "Free medicines worth $10,000",
      "Follow-up care coordination planned"
    ]
  },
  {
    id: 4,
    title: "Winter Blanket Distribution",
    slug: "winter-blanket-distribution",
    description: "Distributing warm blankets, winter clothing, and essential supplies to homeless individuals and families during cold winter months.",
    fullDescription: "No one should suffer from the cold. Our winter relief program distributes warm blankets, winter jackets, thermal wear, and hot meals to homeless individuals and families living in vulnerable conditions. We work through the night during extreme cold weather to ensure everyone has access to warmth and shelter.",
    category: 'shelter',
    status: 'completed',
    image: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=600&fit=crop"
    ],
    date: "2023-12-20",
    location: "City-wide distribution",
    beneficiaries: 1200,
    fundsRaised: 35000,
    fundsGoal: 35000,
    impact: [
      "1200 blankets distributed",
      "500 winter jackets provided",
      "3000 hot meals served",
      "Zero cold-related incidents reported"
    ]
  },
  {
    id: 5,
    title: "Clean Water Initiative",
    slug: "clean-water-initiative",
    description: "Installing water purification systems and hand pumps in villages lacking access to clean drinking water.",
    fullDescription: "Access to clean water transforms lives. We're installing sustainable water purification systems and bore wells in villages where families walk miles for water. Each installation serves 100-150 families and includes training for local maintenance, ensuring long-term sustainability and community ownership.",
    category: 'emergency',
    status: 'ongoing',
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop"
    ],
    date: "2024-01-20",
    location: "15 villages in rural areas",
    beneficiaries: 4500,
    fundsRaised: 85000,
    fundsGoal: 150000,
    impact: [
      "8 water systems installed so far",
      "2000+ people have clean water access",
      "50% reduction in water-borne diseases",
      "Women save 3 hours daily on average"
    ]
  },
  {
    id: 6,
    title: "Women Empowerment & Skill Training",
    slug: "women-empowerment-training",
    description: "Providing vocational training and skill development programs to help women achieve financial independence and support their families.",
    fullDescription: "Empowering women transforms entire communities. Our comprehensive skill training program offers courses in tailoring, handicrafts, computer literacy, and entrepreneurship. We provide free training, equipment, and market linkages to help women start their own businesses or find employment, breaking the cycle of poverty.",
    category: 'education',
    status: 'ongoing',
    image: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
    ],
    date: "2024-01-10",
    location: "Community Center, Main District",
    beneficiaries: 250,
    fundsRaised: 42000,
    fundsGoal: 75000,
    impact: [
      "150 women trained so far",
      "45 women started own businesses",
      "85% employment rate after training",
      "Average income increase of 200%"
    ]
  },
  {
    id: 7,
    title: "Emergency Flood Relief 2024",
    slug: "emergency-flood-relief",
    description: "Providing immediate relief supplies, temporary shelter, and rehabilitation support to families affected by recent flooding.",
    fullDescription: "When disaster strikes, immediate response saves lives. Our emergency flood relief provides food, clean water, medicine, temporary shelter materials, and hygiene kits to affected families. We're also helping with home repairs and livelihood restoration so families can rebuild their lives with dignity.",
    category: 'emergency',
    status: 'upcoming',
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop"
    ],
    date: "2024-02-01",
    location: "Coastal regions (Districts 7-9)",
    beneficiaries: 3000,
    fundsRaised: 95000,
    fundsGoal: 200000,
    impact: [
      "Target: 800 families to receive aid",
      "Emergency supplies being procured",
      "Medical teams on standby",
      "Coordination with local authorities"
    ]
  },
  {
    id: 8,
    title: "Elderly Care Program",
    slug: "elderly-care-program",
    description: "Supporting senior citizens with healthcare, nutrition, and companionship to ensure their dignity and wellbeing in their golden years.",
    fullDescription: "Our elders deserve respect and care. This program provides regular health checkups, nutritious meals, essential medicines, and most importantly, companionship to senior citizens who are alone or abandoned. Volunteers spend time with them, organize activities, and ensure they feel valued and loved.",
    category: 'healthcare',
    status: 'ongoing',
    image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&h=600&fit=crop"
    ],
    date: "2024-01-08",
    location: "3 senior care centers",
    beneficiaries: 180,
    fundsRaised: 38000,
    fundsGoal: 65000,
    impact: [
      "120 seniors receiving regular care",
      "Daily meal service established",
      "Monthly health checkups provided",
      "50+ volunteers engaged weekly"
    ]
  }
];

export const categories = [
  { id: 'food', name: 'Food & Nutrition', color: 'bg-orange-500', icon: '🍽️' },
  { id: 'education', name: 'Education', color: 'bg-blue-500', icon: '📚' },
  { id: 'healthcare', name: 'Healthcare', color: 'bg-green-500', icon: '⚕️' },
  { id: 'shelter', name: 'Shelter & Relief', color: 'bg-purple-500', icon: '🏠' },
  { id: 'emergency', name: 'Emergency Relief', color: 'bg-red-500', icon: '🚨' }
];

export const getStatusColor = (status: Program['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'ongoing':
      return 'bg-blue-100 text-blue-800';
    case 'upcoming':
      return 'bg-yellow-100 text-yellow-800';
  }
};

export const getStatusText = (status: Program['status']) => {
  switch (status) {
    case 'completed':
      return 'Completed';
    case 'ongoing':
      return 'Ongoing';
    case 'upcoming':
      return 'Upcoming';
  }
};