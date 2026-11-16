import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";

export const TeamSection = ({ dict }: { dict: any }) => {
  const team = [
    {
      name: dict.team.members.nia.name,
      role: dict.team.members.nia.role,
      image: "/nia.jpg",
      linkedin: dict.team.members.nia.linkedin,
    },
    {
      name: dict.team.members.giorgi.name,
      role: dict.team.members.giorgi.role,
      image: "/george.png",
      linkedin: dict.team.members.giorgi.linkedin,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--secondary)]" id="team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-end">
          {/* Intro */}
          <div className="lg:col-span-5 lg:pb-8">
            <span className="text-[var(--primary)] font-medium mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
              {dict.team.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-sans text-[var(--primary)] leading-[1.1] tracking-tight">
              {dict.team.title}
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-md">
              {dict.team.description}
            </p>
          </div>

          {/* Members */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Link
                href={member.linkedin}
                key={member.name}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block bg-white rounded-3xl p-3 shadow-[0_1px_2px_rgba(16,22,38,0.04)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(16,22,38,0.25)] ${
                  index === 1 ? "sm:translate-y-12 sm:hover:translate-y-11" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-3 pt-5 pb-3">
                  <div>
                    <h3 className="text-lg font-sans font-semibold text-[var(--primary)]">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">{member.role}</p>
                  </div>
                  <span
                    aria-label="LinkedIn"
                    className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--secondary)] text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white"
                  >
                    <Linkedin className="w-4 h-4 group-hover:hidden" />
                    <ArrowUpRight className="w-4 h-4 hidden group-hover:block" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
