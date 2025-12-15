import type { Service, PortfolioItem, Testimonial, Stat, Resource, NavLink } from '@/types';

export const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
];

export const services: Service[] = [
    {
        icon: 'brush',
        title: 'Brand Identity & Design',
        description: 'Crafting unique visual identities that resonate and leave a lasting impression.',
        gradient: 'pink-orange',
    },
    {
        icon: 'web',
        title: 'Intuitive Web Experiences',
        description: 'Designing and developing cutting-edge websites with seamless user journeys.',
        gradient: 'teal-yellow',
    },
    {
        icon: 'auto_awesome',
        title: 'Dynamic Content Creation',
        description: 'Producing engaging visuals, animations, and narratives that tell your story.',
        gradient: 'pink-orange',
    },
    {
        icon: 'trending_up',
        title: 'Growth-Driven Marketing',
        description: 'Strategic campaigns to boost your visibility and connect with your audience.',
        gradient: 'teal-yellow',
    },
    {
        icon: '3d_rotation',
        title: '3D Rendering & Animation',
        description: 'Bringing concepts to life with stunning 3D visuals and immersive animations.',
        gradient: 'pink-orange',
    },
    {
        icon: 'photo_camera',
        title: 'Photography & Videography',
        description: 'Capturing moments and crafting visual stories that resonate deeply.',
        gradient: 'teal-yellow',
    },
    {
        icon: 'apps',
        title: 'Innovative App Development',
        description: 'Building functional and engaging mobile applications for diverse platforms.',
        gradient: 'pink-orange',
    },
    {
        icon: 'lightbulb',
        title: 'Strategic Consulting',
        description: 'Guiding your creative strategy with expert insights and future-forward planning.',
        gradient: 'teal-yellow',
    },
];

export const portfolioItems: PortfolioItem[] = [
    {
        title: 'Project Spark: Visualizing Innovation',
        description: 'A custom illustration series for a tech startup, translating complex ideas into engaging visual narratives, embodying true innovation.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXdlh_qutYRKyLikPjoy8ioCvFsc6sF1K6k2ZjlNNKJl7bSV6Ev_fVnntzGReqU41snEFrWx00N6EmLy1XPorFQdlh9TeS5eX8i5ku5CtjzyRDuF1iFezJP0xi6n908zG9zh6MruFXc85NvRBMbh2nJJsUGWKORbE5ksSR0Cw5SksTgMPEWaJbd5hD2zjBDkOTo51yfBRikNLvJYIo1idtESdtiQ5ZkMUMLd1xPeo0upWoe4IddCJdgSDXinvtKMivX8dj0a-INC8',
        tags: ['Illustration', 'Branding', 'Concept Art'],
        gradient: 'teal-yellow',
    },
    {
        title: 'Future Tech: Interactive 3D Experience',
        description: 'A stunning 3D interactive exhibit showcasing a revolutionary AI system, emphasizing transformative ideas and immersive engagement.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeu01oDDKd8JSmyJx-cgYnti8BlxWR1gm7PeYE2EInRTm7QfY1c_rNoQ_qGo3Mg53BmmDRkjbFY1nKwHMR_gh_WfbhE8p2XBegkEvxgQIP_1FdM1kE8WaDGJSIb4yDZw2r-iU5D3CbrXLU6PAaWVifUB89ystgVFk0-Kqiaxm_MpcpvVNlWZ4ixSMg8Z1EnTMJXnfySx0jXczv2sOpAC-VI7WhKdromUreHIcmVYiCKwrTBUa6ZiJTTQqrmnaAWvSDu1bP_cirzc8',
        tags: ['3D Design', 'Animation', 'UI/UX'],
        gradient: 'pink-orange',
    },
    {
        title: 'Synergy Hub: Empowering Collaboration',
        description: 'A collaborative platform designed to foster teamwork and shared innovation for creative professionals worldwide.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKiA0Ft-f_JGAQnQURIBb9eB1aOaY0eEGyZ1q2jizxw0qY1zmF7fj6x1tlu9N8wmXrP61vu0lXKKofaM5vulk7OOSwPvpeciV1BNnfc78XA_mnVeawJD71Rpx9FjEdPXlZcK7dg0g3lKd-rmWk7xt2_ncU1ciroX59SFCECKRkujgGQjeUzD3JAk2cZgoUJvm5n76ruWjxZViGchSxz_69iYpaIcEBlIMUfkocn5vo6Zt2L0JW0mmtzD0A1yVNsiyUKhKOtyNeJOc',
        tags: ['Platform Design', 'Interaction', 'Branding'],
        gradient: 'teal-yellow',
    },
];

export const testimonials: Testimonial[] = [
    {
        name: 'Elara Vance',
        role: 'Founder',
        company: 'Visionary Ventures',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNbDtfzJ3j3oTkJNKuckia5QV2mKW6jmJH3RYxt0_eWqPsQJb8ab1QfoP5jIZjN9Maesws-Zv9mtI6Ayc-33UgQceTyMa5bCcrx1IJmHhRKuvUnSnK9FhNEXSFnpbOpg5qX6GuYDNh-DutxYQBYPwgU2WpRci_kKAtoaztoqIRdo9oJHSvfqrm5ufyODWJVD19WRYjm9uE84NqxTk1pmVQiGFD__ph7zTNVWGsXwPlzwB36RqDZ6T6d1O5p8h7htKj0s13ArzCYEc',
        quote: 'Creativia brought our vision to life with unparalleled innovation and a truly collaborative spirit. Their attention to detail and creative prowess delivered results far beyond our expectations. A truly transformative idea partner!',
        rating: 5,
    },
    {
        name: 'Marcus Thorne',
        role: 'CMO',
        company: 'Digital Frontiers',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXugSflP1gn14A2ghFUcWIn7gruwwWVYcm_1pelVh4aIhSRuSAG7iTIjeArbRXcusGHaA_1G9aMhmhm0yDc_hpGzZfxQBXSQS-Jz7TB-urVe-hJScVY0mUNdE-3KaiZJCPvOZYhVlflInbONrOHSo79g57YYGzHRho5lO4zPI9GkJIIh5InNa6dQJtseI6cHJao5bmMaAX8ViEzBgGoZXqAZpE5tpy-Tv4t1vDdvAOTsTCG9SJk-5tUW9RLLpP1Cw_JnNtgKzdeFw',
        quote: 'Working with Creativia was a masterclass in collaboration. They seamlessly integrated with our team, offering fresh perspectives and delivering highly impactful creative solutions. Their approach is truly inspiring.',
        rating: 5,
    },
];

export const stats: Stat[] = [
    {
        icon: 'calendar_month',
        value: '15+',
        label: 'Years of Creative Excellence',
        gradient: 'pink-orange',
    },
    {
        icon: 'deployed_code',
        value: '200+',
        label: 'Projects Ignited',
        gradient: 'teal-yellow',
    },
    {
        icon: 'diversity_3',
        value: '100+',
        label: 'Happy Collaborators',
        gradient: 'pink-orange',
    },
    {
        icon: 'support_agent',
        value: 'Dedicated',
        label: 'Creative Support',
        gradient: 'teal-yellow',
    },
];

export const resources: Resource[] = [
    {
        title: "The 'Innovate' Business Kit",
        description: 'Perfect for startups and creative ventures aiming for a fresh look.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx-hnnOx6kCS2q0k_8HXWdi30V0ub3C0wXE1jb5kTNjNs-1Jfvi-0SFL_IeLMN_W9Xbz30J7Tp9taPgtoCVqCNfUuEKmfYtCAT5KjqJVEcBZ1d9XPaDIKCOETXlQd2pXovnacNc0r6OGHaRqQ5i5ByHGVHc3GRMZZxMB46ByaeMJZrZSujCVuYCJA_MpseEHkc0A1ffot3zp4l1cAoPhu0waMVHXVfjkEaPiGZ5TN86IW-bn-n_WvJbN16V-BM2Sh-BuQqQPKRfGA',
        tags: ['Creative', 'Startup'],
    },
    {
        title: "The 'Visionary' Portfolio Layout",
        description: 'Showcase your creative work with a stunning and dynamic layout.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE2NPMMsZJnEtdwteKOmaLa-xX1CYXz6kvJFlKl8XR-6J05HAR3eenIrEIZpfqDR7_I5wNFht0ri1olOTpXuNHdSXefrwO0MtMxkflurIP3x0JSnGAbL53FmzS5oZFKtFvOFvdWYN6rtb0fbNMO6RDAO9m3rQlpDQ-_hu5-M-NUQF-syNUtwEKTLk3NpxMCM1QI7viwdYDDjgemo-3yzCjCEpPvkDn-O6sVAulN6KiXq0R947RgYCawDMgws6JEJSbFXcNWgRMj-Y',
        tags: ['Portfolio', 'Artist'],
    },
];
