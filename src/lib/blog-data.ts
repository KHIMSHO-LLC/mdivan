export interface BlogPost {
  slug: string;
  title: { en: string; es: string };
  excerpt: { en: string; es: string };
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  content: { en: string; es: string }; // HTML or Markdown content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-you-need-business-associate",
    title: {
      en: "Why Startups Need a Business Associate, Not Just an EA",
      es: "Por qué las startups necesitan un Business Associate, no solo un Asistente Ejecutivo",
    },
    excerpt: {
      en: "Discover how a Business Associate acts as a strategic partner to help you scale operations, manage projects, and free up your time for high-impact decisions.",
      es: "Descubra cómo un Business Associate actúa como un socio estratégico para ayudarlo a escalar operaciones, gestionar proyectos y liberar su tiempo para decisiones de alto impacto.",
    },
    date: "January 14, 2026",
    readTime: "5 min read",
    author: {
      name: "Nia Tcholadze",
      role: "CEO & Founder",
      image: "/nia.jpg",
    },
    content: {
      en: `
      <h2>The Evolution of Support Roles</h2>
      <p>In the early stages of a startup, founders often find themselves drowning in administrative tasks. The natural reaction is to hire an Executive Assistant (EA). While an EA is invaluable for scheduling and travel, modern founders need more.</p>
      
      <h2>Enter the Business Associate</h2>
      <p>A Business Associate (BA) is a hybrid role—part EA, part Operations Manager, part Chief of Staff. They don't just ask "when are you free?"; they ask "does this meeting align with our Q1 goals?".</p>
      
      <h3>Key Responsibilities of a BA:</h3>
      <ul>
        <li><strong>Project Management:</strong> Overseeing cross-functional initiatives.</li>
        <li><strong>Client Onboarding:</strong> Managing the first touchpoint with new clients.</li>
        <li><strong>Operational Strategy:</strong> Building and refining internal processes (SOPs).</li>
        <li><strong>Shadowing:</strong> Sitting in on meetings to capture action items and follow up.</li>
      </ul>

      <h2>Why MDIVAN Focuses on BAs</h2>
      <p>At MDIVAN, we believe the Business Associate is the secret weapon for fast-growing companies. We vet the top 1% of talent who possess both the soft skills of an EA and the strategic mindset of an operator.</p>

      <p>Ready to find your partner in growth? <a href="/hire-talent">Hire a Business Associate today.</a></p>
    `,
      es: `
      <h2>La Evolución de los Roles de Apoyo</h2>
      <p>En las primeras etapas de una startup, los fundadores a menudo se encuentran ahogados en tareas administrativas. La reacción natural es contratar a un Asistente Ejecutivo (EA). Si bien un EA es invaluable para la programación y los viajes, los fundadores modernos necesitan más.</p>
      
      <h2>Entra el Business Associate</h2>
      <p>Un Business Associate (BA) es un rol híbrido: parte EA, parte Gerente de Operaciones, parte Jefe de Gabinete. No solo preguntan "¿cuándo estás libre?"; preguntan "¿se alinea esta reunión con nuestros objetivos del Q1?".</p>
      
      <h3>Responsabilidades Clave de un BA:</h3>
      <ul>
        <li><strong>Gestión de Proyectos:</strong> Supervisión de iniciativas interfuncionales.</li>
        <li><strong>Incorporación de Clientes:</strong> Gestión del primer punto de contacto con nuevos clientes.</li>
        <li><strong>Estrategia Operativa:</strong> Creación y perfeccionamiento de procesos internos (SOPs).</li>
        <li><strong>Shadowing:</strong> Asistir a reuniones para capturar elementos de acción y hacer seguimiento.</li>
      </ul>

      <h2>Por qué MDIVAN se centra en los BAs</h2>
      <p>En MDIVAN, creemos que el Business Associate es el arma secreta para las empresas de rápido crecimiento. Evaluamos al 1% superior de talento que posee tanto las habilidades blandas de un EA como la mentalidad estratégica de un operador.</p>

      <p>¿Listo para encontrar a su socio en el crecimiento? <a href="/es/hire-talent">Contrate un Business Associate hoy.</a></p>
    `,
    },
  },
  {
    slug: "hiring-remote-talent-europe",
    title: {
      en: "The Advantage of Hiring Remote Talent in Europe",
      es: "La Ventaja de Contratar Talento Remoto en Europa",
    },
    excerpt: {
      en: "Time zone alignment, cultural affinity, and highly educated professionals make Europe the premier destination for US and Global companies hiring remote support.",
      es: "La alineación de la zona horaria, la afinidad cultural y los profesionales altamente educados hacen de Europa el destino principal para las empresas de EE. UU. y globales que contratan soporte remoto.",
    },
    date: "January 10, 2026",
    readTime: "4 min read",
    author: {
      name: "Lile Gvenetadze",
      role: "Operations Manager",
      image: "/lile.jpg",
    },
    content: {
      en: `
      <h2>Why Europe?</h2>
      <p>As remote work becomes the norm, companies are looking beyond their borders. Europe offers a unique sweet spot for North American companies.</p>

      <h3>1. Time Zone Overlap</h3>
      <p>Unlike Asia or Australia, European working hours overlap significantly with the US East Coast (morning coverage) and allow for asynchronous work that is ready by the time you wake up.</p>

      <h3>2. Cultural & Educational Alignment</h3>
      <p>European professionals often speak C2-level English and have degrees from top universities. They understand Western business etiquette and require minimal training on soft skills.</p>

      <h3>3. Cost Efficiency</h3>
      <p>You can hire elite, senior-level talent in Europe for the cost of a junior employee in New York or San Francisco.</p>

      <p>MDIVAN specializes in connecting you with this exact talent pool. <a href="/contact">Get in touch to learn more.</a></p>
    `,
      es: `
      <h2>¿Por qué Europa?</h2>
      <p>A medida que el trabajo remoto se convierte en la norma, las empresas miran más allá de sus fronteras. Europa ofrece un punto óptimo único para las empresas norteamericanas.</p>

      <h3>1. Superposición de Zona Horaria</h3>
      <p>A diferencia de Asia o Australia, las horas de trabajo europeas se superponen significativamente con la costa este de EE. UU. (cobertura matutina) y permiten un trabajo asíncrono que está listo para cuando te despiertas.</p>

      <h3>2. Alineación Cultural y Educativa</h3>
      <p>Los profesionales europeos a menudo hablan inglés de nivel C2 y tienen títulos de las mejores universidades. Entienden la etiqueta empresarial occidental y requieren una formación mínima en habilidades blandas.</p>

      <h3>3. Eficiencia de Costos</h3>
      <p>Puede contratar talento de nivel senior y élite en Europa por el costo de un empleado junior en Nueva York o San Francisco.</p>

      <p>MDIVAN se especializa en conectarlo con este grupo exacto de talentos. <a href="/es/contact">Póngase en contacto para obtener más información.</a></p>
    `,
    },
  },
];
