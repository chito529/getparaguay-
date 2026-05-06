import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "The Most Exclusive Gated Communities",
    excerpt: "Inside the walls of Surubi-i and Paraná Country Club: Privacy, security, and world-class architecture.",
    category: "Invest",
    image: "https://images.unsplash.com/photo-1600596542815-6ad4c728fdbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Asunción's Hidden Culinary Gems",
    excerpt: "A guide to the speakeasies and private dining rooms transforming the capital's night scene.",
    category: "Explore",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Residency by Investment: The Gold Standard",
    excerpt: "How obtaining Paraguayan residency can be your key to global mobility and fiscal freedom.",
    category: "Settle",
    image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Weekend Retreats: Yachting on the River",
    excerpt: "Escape the city aboard luxury vessels exploring the serene waters of the Paraguay River.",
    category: "Explore",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "The New Financial District",
    excerpt: "Why the skyline of Villa Morra is attracting high-net-worth individuals from Europe and North America.",
    category: "Invest",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "International Education Standards",
    excerpt: "Profiling the ASA and Goethe schools: Preparing the next generation of global leaders.",
    category: "Settle",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

interface BlogGridProps {
  category: string;
}

export const BlogGrid: React.FC<BlogGridProps> = ({ category }) => {
  const displayPosts = category === "Explore" 
    ? posts.filter(p => p.category === "Explore" || p.category === "Invest").slice(0, 3)
    : posts.filter(p => p.category === "Settle" || p.category === "Invest").slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {displayPosts.map((post) => (
        <article key={post.id} className="group cursor-pointer">
          <div className="overflow-hidden mb-6 relative">
            <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-colors duration-500 z-10"></div>
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-[10px] font-bold text-luxury-gold uppercase tracking-[0.2em]">{post.category}</span>
            <div className="h-[1px] w-8 bg-gray-200"></div>
          </div>
          <h3 className="text-2xl font-serif text-luxury-black mb-4 group-hover:text-luxury-gold transition-colors duration-300 leading-tight">
            {post.title}
          </h3>
          <p className="text-gray-500 font-light leading-relaxed mb-6 text-sm">
            {post.excerpt}
          </p>
          <a href="#" className="inline-flex items-center text-xs font-bold text-luxury-black uppercase tracking-widest group-hover:text-luxury-gold transition-colors duration-300">
            Read Journal
          </a>
        </article>
      ))}
    </div>
  );
};