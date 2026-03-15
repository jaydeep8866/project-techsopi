export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  externalUrl: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "digital-transformation-guide-2024",
    title: "The Complete Guide to Digital Transformation in 2024",
    excerpt:
      "Discover the latest trends, strategies, and technologies driving digital transformation across industries. Learn how to modernize your business processes and stay competitive.",
    category: "Digital Transformation",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/digital-transformation-guide-2024",
    featured: true,
  },
  {
    slug: "ai-powered-staff-augmentation",
    title: "How AI is Revolutionizing Staff Augmentation Services",
    excerpt:
      "Explore how artificial intelligence is transforming the way companies hire and manage remote talent, making staff augmentation more efficient and effective.",
    category: "Staff Augmentation",
    date: "Jan 12, 2024",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/ai-powered-staff-augmentation",
  },
  {
    slug: "vansales-ai-chatbot-success",
    title: "VanSales AI: How Intelligent Bots Are Transforming Field Sales",
    excerpt:
      "Discover how VanSales uses AI bots to revolutionize field sales operations, providing instant inventory queries and automated sales support.",
    category: "AI Products",
    date: "Jan 10, 2024",
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/vansales-ai-chatbot-success",
  },
  {
    slug: "custom-software-development-trends",
    title: "Custom Software Development Trends for Modern Businesses",
    excerpt:
      "Learn the latest custom software development trends, from microservices architecture to AI integration, and how they benefit modern businesses.",
    category: "Software Development",
    date: "Jan 8, 2024",
    readTime: "9 min read",
    image:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/custom-software-development-trends",
  },
  {
    slug: "smart-admission-management-ai",
    title: "Smart Admission Management: AI Bots for Educational Institutions",
    excerpt:
      "See how smart admission and fees management systems use AI bots to streamline student inquiries, fee collection, and administrative processes.",
    category: "Education Technology",
    date: "Jan 5, 2024",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/smart-admission-management-ai",
  },
  {
    slug: "it-consulting-digital-strategy",
    title: "IT Consulting: Building Effective Digital Strategies",
    excerpt:
      "Strategic IT consulting approaches to help businesses navigate digital transformation, optimize technology infrastructure, and achieve growth.",
    category: "IT Consulting",
    date: "Jan 3, 2024",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/it-consulting-digital-strategy",
  },
  {
    slug: "remote-team-management-best-practices",
    title: "Remote Team Management: Best Practices for Distributed Teams",
    excerpt:
      "Essential strategies for managing remote development teams effectively, including communication tools, project management, and team collaboration.",
    category: "Team Management",
    date: "Jan 1, 2024",
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/remote-team-management-best-practices",
  },
  {
    slug: "digital-marketing-it-companies",
    title: "Digital Marketing Strategies for IT Companies",
    excerpt:
      "Comprehensive digital marketing approaches specifically designed for IT service companies to attract clients and build brand authority.",
    category: "Digital Marketing",
    date: "Dec 28, 2023",
    readTime: "10 min read",
    image:
      "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/digital-marketing-it-companies",
  },
  {
    slug: "responsive-web-design-best-practices",
    title: "Responsive Web Design: Best Practices for 2024",
    excerpt:
      "Master the essentials of responsive web design and learn how to create websites that provide optimal viewing experiences across all devices.",
    category: "Web Design",
    date: "Feb 20, 2024",
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/responsive-web-design-best-practices",
  },
  {
    slug: "web-performance-optimization-guide",
    title: "Web Performance Optimization: Speed Up Your Website",
    excerpt:
      "Discover proven techniques to optimize website performance, reduce page load times, and improve user experience and SEO rankings.",
    category: "Web Development",
    date: "Feb 18, 2024",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/web-performance-optimization-guide",
  },
  {
    slug: "web-accessibility-inclusive-design",
    title: "Web Accessibility: Creating Inclusive Digital Experiences",
    excerpt:
      "Learn how to build accessible websites that work for everyone, including users with disabilities, and why accessibility matters for your business.",
    category: "Web Design",
    date: "Feb 15, 2024",
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/web-accessibility-inclusive-design",
  },
  {
    slug: "modern-web-technologies-frameworks",
    title: "Modern Web Technologies and Frameworks: React, Vue, Angular",
    excerpt:
      "Explore the latest web development frameworks and technologies that are shaping the future of web development.",
    category: "Web Development",
    date: "Feb 12, 2024",
    readTime: "9 min read",
    image:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/modern-web-technologies-frameworks",
  },
  {
    slug: "website-seo-optimization-strategy",
    title: "Website SEO Optimization: Strategies for Better Rankings",
    excerpt:
      "A practical guide to implementing SEO best practices to improve search rankings and drive sustainable organic traffic.",
    category: "Web Development",
    date: "Feb 10, 2024",
    readTime: "10 min read",
    image:
      "https://images.pexels.com/photos/3848632/pexels-photo-3848632.jpeg?auto=compress&cs=tinysrgb&w=800",
    externalUrl: "https://prifabit.com/blog/website-seo-optimization-strategy",
  },
];

export const categories = [
  "All Posts",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];
