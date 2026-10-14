export interface NavMenuItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface AccommodationItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  note?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'amenity';
  image: string;
  imageAlt: string;
  description: string;
}

export interface AboutFeature {
  title: string;
  description: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  actionText: string;
  isExternal?: boolean;
  type: 'phone' | 'zalo' | 'facebook' | 'map';
}
