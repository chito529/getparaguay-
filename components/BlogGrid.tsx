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
    title: "The Quiet Rise of Asunción Real Estate",
    excerpt: "Why savvy international investors are turning their eyes to the growing skyline of Paraguay's capital.",
    category: "Invest",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    title: "A Culinary Journey Through Gran Asunción",
    excerpt: "From traditional parrillas to high-end fusion cuisine, discover the tastes defining modern Paraguayan culture.",
    category: "Explore",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    title: "Residency in Paraguay: The Complete Guide",
    excerpt: "A step-by-step walkthrough of one of the world's most accessible residency programs for global citizens.",
    category: "Settle",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    id: 4,
    title: "Weekend Escapes: San Bernardino",
    excerpt: "The summer capital of Paraguay offers lakeside luxury and colonial charm just an hour from the city.",
    category: "Explore",
    image: "https://picsum.photos/600/400?random=4",
  },
  {
    id: 5,
    title: "Tax Efficiency for Digital Nomads",
    excerpt: "Understanding the territorial tax system and how it benefits remote workers and international entrepreneurs.",
    category: "Invest",
    image: "https://picsum.photos/600/400?random=5",
  },
  {
    id: 6,
    title: "International Schools & Education",
    excerpt: "Top-tier educational institutions providing world-class curriculum for expatriate families.",
    category: "Settle",
    image: "https://picsum.photos/600/400?random=6",
  },
];

interface BlogGridProps {
  category: string;
}

export const BlogGrid: React.FC<BlogGridProps> = ({ category }) => {
  // Filter posts if specific category is requested, otherwise show a mix relevant to the section logic
  // For the 'Explore' section we show primarily Explore + randoms, for 'Settle' we show Settle.
  // To keep it simple for this demo, we'll just show relevant ones or slice.
  
  const displayPosts = category === "Explore" 
    ? posts.filter(p => p.category === "Explore" || p.category === "Invest").slice(0, 3)
    : posts.filter(p => p.category === "Settle" || p.category === "Invest").slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {displayPosts.map((post) => (
        <article key={post.id} className="group cursor-pointer">
          <div className="overflow-hidden mb-4">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xs font-bold text-luxury-gold uppercase tracking-widest">{post.category}</span>
            <span className="text-gray-300 text-xs">•</span>
            <span className="text-xs text-gray-400 uppercase tracking-widest">5 Min Read</span>
          </div>
          <h3 className="text-2xl font-serif text-luxury-black mb-3 group-hover:text-luxury-gold transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            {post.excerpt}
          </p>
          <a href="#" className="inline-flex items-center text-sm font-medium text-luxury-black uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300">
            Read Article <span className="ml-2 text-luxury-gold">&rarr;</span>
          </a>
        </article>
      ))}
    </div>
  );
};