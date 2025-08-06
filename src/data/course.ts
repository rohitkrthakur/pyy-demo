import { Course, BatchPlan } from '@/types/course';

export const courseData: Course = {
  id: 'arjuna-neet-2026',
  title: 'Arjuna NEET 3.0 2026',
  description: 'For Neet Aspirants',
  startDate: '14 Jul 2025',
  endDate: '30 Jun 2027',
  image: '/placeholder.svg?height=300&width=400&text=ARJUNA+NEET+3.0+2026',
  price: 4500,
  originalPrice: 5000,
  discount: 10,
  isNew: true,
  language: 'Hinglish',
  isOnline: true
};

export const batchPlans: BatchPlan[] = [
  {
    id: 'batch',
    name: 'Batch',
    price: 4500,
    bgColor: 'bg-indigo-600',
    textColor: 'text-white',
    features: [
      'Live Lectures by top faculties',
      'DPPs with Video Solution',
      'Regular Test & AITS',
      '24*7 Doubt Support',
      'Class notes & Handwritten Notes'
    ]
  },
  {
    id: 'infinity',
    name: 'Infinity',
    price: 6700,
    isRecommended: true,
    bgColor: 'bg-green-600',
    textColor: 'text-white',
    features: [
      'Live Lectures by top faculties',
      'DPPs with Video Solution',
      'Regular Test & AITS',
      '24*7 Doubt Support',
      'Class notes & Handwritten Notes'
    ]
  },
  {
    id: 'infinity-pro',
    name: 'Infinity Pro',
    price: 8900,
    bgColor: 'bg-yellow-500',
    textColor: 'text-black',
    features: [
      'Live Lectures by top faculties',
      'DPPs with Video Solution',
      'Regular Test & AITS',
      '24*7 Doubt Support',
      'Class notes & Handwritten Notes'
    ]
  }
];
