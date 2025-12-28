import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export const TeamSection = ({ dict }: { dict: any }) => {
  const team = [
    {
      name: dict.team.members.nia.name,
      role: dict.team.members.nia.role,
      image: "/nia.jpg",
      linkedin: dict.team.members.nia.linkedin,
    },
    {
      name: dict.team.members.lile.name,
      role: dict.team.members.lile.role,
      image: "/lile.jpg",
      linkedin: dict.team.members.lile.linkedin,
    },
    {
      name: dict.team.members.giorgi.name,
      role: dict.team.members.giorgi.role,
      image: "/george.png",
      linkedin: dict.team.members.giorgi.linkedin,
    },
  ];

  return (
    <section className="py-24 bg-white" id="team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[var(--primary)] font-medium mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
            {dict.team.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-sans text-[var(--primary)]">
            {dict.team.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Link
              href={member.linkedin}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Linkedin className="text-white w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-sans font-bold text-[var(--primary)] group-hover:text-blue-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
