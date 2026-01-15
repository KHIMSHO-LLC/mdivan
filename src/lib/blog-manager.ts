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
];
