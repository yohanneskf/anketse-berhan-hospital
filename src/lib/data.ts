export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  image: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Selamawit Bekele",
    specialization: "Gynecology",
    experience: 15,
    image: "/images/doctors/doctor1.jpg",
    description:
      "Specialized in high-risk pregnancies and reproductive health.",
  },
  {
    id: 2,
    name: "Dr. Yohannes Tesfaye",
    specialization: "Pediatrics",
    experience: 12,
    image: "/images/doctors/doctor2.jpg",
    description: "Expert in childhood development and infectious diseases.",
  },
  {
    id: 3,
    name: "Dr. Marta Girma",
    specialization: "Neonatology",
    experience: 10,
    image: "/images/doctors/doctor3.jpg",
    description:
      "Specialized in premature baby care and neonatal intensive care.",
  },
  {
    id: 4,
    name: "Dr. Daniel Worku",
    specialization: "Obstetric Surgery",
    experience: 18,
    image: "/images/doctors/doctor4.jpg",
    description: "Expert in complex obstetric and gynecological surgeries.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Prenatal Care Essentials",
    excerpt: "Learn about the importance of regular checkups during pregnancy.",
    date: "2024-03-15",
    category: "Pregnancy",
    readTime: 5,
  },
  {
    id: 2,
    title: "Child Vaccination Schedule",
    excerpt: "Complete guide to childhood immunizations in Ethiopia.",
    date: "2024-03-10",
    category: "Pediatrics",
    readTime: 8,
  },
  {
    id: 3,
    title: "Nutrition for New Mothers",
    excerpt: "Essential dietary tips for postpartum recovery.",
    date: "2024-03-05",
    category: "Nutrition",
    readTime: 6,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alemtsehay Tadesse",
    role: "New Mother",
    content:
      "The care I received during my delivery was exceptional. The staff was supportive and professional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Hailu",
    role: "Father",
    content:
      "Our premature baby received excellent care in the NICU. We're forever grateful.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Mohammed",
    role: "Patient",
    content:
      "Regular checkups helped detect my condition early. The doctors are very knowledgeable.",
    rating: 4,
  },
];
