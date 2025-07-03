export interface MenuItem {
  href: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const menuItems: { [key: string]: MenuItem[] } = {
  aboutUs: [
    { href: "/about", title: "Our Mission", description: "Re-imagining urban mobility for everyone.", imageUrl: "https://placehold.co/600x400/dbeafe/1e40af", imageAlt: "City skyline with modern transport" },
    { href: "/about#team", title: "Our Team", description: "Meet the people behind TIAR.", imageUrl: "https://placehold.co/600x400/bfdbfe/1e40af", imageAlt: "Diverse team working together" },
    { href: "/about#benefits", title: "Key Benefits", description: "See how TIAR can help your organization.", imageUrl: "https://placehold.co/600x400/93c5fd/1e40af", imageAlt: "Key benefits of TIAR" },
    { href: "/about#history", title: "Our Story", description: "Learn about our journey and vision for the future.", imageUrl: "https://placehold.co/600x400/60a5fa/1e40af", imageAlt: "Timeline graphic showing company growth" }
  ],
  useCase: [
    { href: "/use-case/property-owners", title: "Property Owners", description: "A smart charging solution for your property.", imageUrl: "https://images.unsplash.com/photo-1617886322207-6f504e7472c5?q=400w=600&auto=format&fit=crop", imageAlt: "Parking spots with charging stations" },
    { href: "/use-case/cpo", title: "Charging Operators", description: "Optimize your fleet and operations with our tools.", imageUrl: "https://images.unsplash.com/photo-1738101001619-f0fd42ceafb0?q=400w=600&auto=format&fit=crop", imageAlt: "Bus operator monitoring a dashboard" },
    { href: "/use-case/escooters", title: "E-Scooters", description: "Upcoming support for e-scooters.", imageUrl: "https://images.unsplash.com/photo-1623079399942-368de709ea32?q=400w=600&auto=format&fit=crop", imageAlt: "E-scooter charging station" },
    { href: "/use-case/fleet", title: "Fleet", description: "Manage your EV fleet with our tools.", imageUrl: "https://images.unsplash.com/photo-1572675339312-3e8b094a544d?q=400w=600&auto=format&fit=crop", imageAlt: "EV charging stations for fleets" },
    { href: "/use-case/showroom", title: "Showroom", description: "Chargestations for your showroom.", imageUrl: "https://placehold.co/600x400/12b76a/054f31", imageAlt: "Showroom with charging stations" },
  ],
  offerings: [
    { href: "/solutions/white-label", title: "White Label", description: "Customize your solution to fit your brand.", imageUrl: "https://placehold.co/600x400/f04438/7a271a", imageAlt: "Diagram showing white label app" },
    { href: "/solutions/web-based-charging", title: "Web-Based Charging", description: "A web-based charging solution.", imageUrl: "https://placehold.co/600x400/fee4e2/7a271a", imageAlt: "Web-based charging solution" },
    { href: "/solutions/cms", title: "CMS", description: "A charging management system for your charging stations.", imageUrl: "https://placehold.co/600x400/fee4e2/7a271a", imageAlt: "CMS dashboard" },
    { href: "/solutions/subaccount", title: "Subaccount", description: "A subaccount management system for property owners.", imageUrl: "https://placehold.co/600x400/fee4e2/7a271a", imageAlt: "Subaccount dashboard" },
  ],
  resources: [
    { href: "/blog", title: "Blog", description: "Read our latest insights and news.", imageUrl: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.co/600x400/fffaeb/7a2e0e", imageAlt: "Collage of blog post preview images" },
    { href: "/coming-soon", title: "Case Studies", description: "Real-world success stories from our clients.", imageUrl: "https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", imageAlt: "Customer logo and a quote" },
    { href: "/documentation", title: "Documentation", description: "Technical guides and API references.", imageUrl: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", imageAlt: "Code snippet on a screen" }
  ]
};