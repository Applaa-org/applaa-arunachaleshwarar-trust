export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Food Distribution Beneficiary",
    image: "https://i.pravatar.cc/150?img=1",
    content: "This charity has been a blessing to my family. During tough times, the monthly food supplies helped us stay afloat. The volunteers treat us with such dignity and respect. Forever grateful!",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Parent of School Beneficiary",
    image: "https://i.pravatar.cc/150?img=12",
    content: "My daughter received school supplies and uniform through the Back to School program. She's so happy to go to school now. This organization is changing lives, one child at a time.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Volunteer Coordinator",
    image: "https://i.pravatar.cc/150?img=5",
    content: "Volunteering here has been the most rewarding experience. The team is professional, organized, and genuinely cares about making a difference. Proud to be part of this mission!",
    rating: 5
  },
  {
    id: 4,
    name: "Mohammed Ali",
    role: "Medical Camp Participant",
    image: "https://i.pravatar.cc/150?img=13",
    content: "The free medical camp saved my life. Doctors diagnosed my condition early and provided free medicines. I couldn't afford private healthcare. This trust is doing God's work.",
    rating: 5
  },
  {
    id: 5,
    name: "Anita Desai",
    role: "Women's Training Graduate",
    image: "https://i.pravatar.cc/150?img=9",
    content: "The skill training program changed my life completely. I learned tailoring and now run my own small business. I can support my children's education. Thank you for believing in women like me!",
    rating: 5
  },
  {
    id: 6,
    name: "David Chen",
    role: "Regular Donor",
    image: "https://i.pravatar.cc/150?img=14",
    content: "I've been donating for 2 years. The transparency and impact reports give me confidence that my money is truly helping people. This is the most trustworthy charity I've supported.",
    rating: 5
  }
];