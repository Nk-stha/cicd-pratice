export interface Service {
    icon: string;
    title: string;
    description: string;
    gradient: 'teal-yellow' | 'pink-orange';
}

export interface PortfolioItem {
    title: string;
    description: string;
    image: string;
    tags: string[];
    gradient: 'teal-yellow' | 'pink-orange';
}

export interface Testimonial {
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    rating: number;
}

export interface Stat {
    icon: string;
    value: string;
    label: string;
    gradient: 'teal-yellow' | 'pink-orange';
}

export interface Resource {
    title: string;
    description: string;
    image: string;
    tags: string[];
}

export interface NavLink {
    label: string;
    href: string;
}
