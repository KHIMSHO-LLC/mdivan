export function formatBlogPostForInjection(post: any): string {
  // Format the post object as a clean string representation of the TypeScript object
  const postString = `
  {
    slug: "${post.slug}",
    title: {
      en: "${post.title.en}",
      es: "${post.title.es}",
    },
    excerpt: {
      en: "${post.excerpt.en}",
      es: "${post.excerpt.es}",
    },
    date: "${post.date}",
    readTime: "${post.readTime}",
    author: {
      name: "${post.author.name}",
      role: "${post.author.role}",
      image: "${post.author.image}",
    },
    content: {
      en: \`
${post.content.en}
      \`,
      es: \`
${post.content.es}
      \`,
    },
  },`;

  return postString;
}

export const SEO_TOPICS = [
  "Remote Executive Assistants vs In-House",
  "How to Scale Your Startup with a Business Associate",
  "Top 5 Tools for Remote Team Management 2026",
  "The Future of Work: Why Hybrid Models are Failing",
  "Cost Benefit Analysis of Hiring in Europe vs US",
  "What is a Fractional Chief of Staff?",
  "How to Onboard Remote Employees Successfully",
  "The Rise of the 'Super Assistant'",
  "Time Management Hacks for CEOs",
  "Why Cultural Fit Matters in Remote Hiring",
  "Delegation Mastery: What Founders Should Stop Doing",
  "The Economics of Remote Work: Saving on Overhead",
  "Finding the Perfect Executive Assistant in 2026",
  "How a Business Associate Can Double Your Productivity",
  "Managing Time Zones: The Secret to 24/7 Operations",
  "Why Georgia and Spain are Top Hubs for Remote Talent",
  "Async Work: The Key to Deep Focus for Startups",
  "The Hidden Costs of Hiring Locally in NYC and SF",
  "Executive Support for Venture Capitalists",
  "From Founder to CEO: The Role of an Operations Manager",
  "Cybersecurity Best Practices for Remote Assistants",
  "How to Conduct Effective Remote Interviews",
  "The mental health benefits of having a Personal Assistant",
  "Europe's Education System and Its Impact on Talent Quality",
  "English Proficiency in Eastern Europe: A Hidden Gem",
  "Legal Guide to Hiring Contractors in Europe",
  "Setting KPIs for Your Executive Assistant",
  "The First 90 Days: A Roadmap for New Hires",
  "Slack vs Teams: Optimizing Communication for Remote Staff",
  "How AI is Changing the Role of Executive Assistants",
  "Building a Company Culture with a Distributed Team",
  "Why 'Chief of Staff' is the New 'COO' for Startups",
  "Emotional Intelligence: The Most Underrated Skill in Assistants",
  "How to Trust Your Remote Team without Micromanaging",
  "Travel Logistics: How an EA Saves You 10+ Hours a Week",
];
