export interface Course {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isNew?: boolean;
  language: string;
  isOnline: boolean;
}

export interface BatchPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  isRecommended?: boolean;
  bgColor: string;
  textColor: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
