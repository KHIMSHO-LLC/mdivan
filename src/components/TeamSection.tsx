import Image from "next/image";

export const TeamSection = ({ dict }: { dict: any }) => {
  const team = [
    {
      name: dict.team.members.sarah.name,
      role: dict.team.members.sarah.role,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
    },
    {
      name: dict.team.members.michael.name,
      role: dict.team.members.michael.role,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: dict.team.members.emma.name,
      role: dict.team.members.emma.role,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop",
    },
    {
      name: dict.team.members.david.name,
      role: dict.team.members.david.role,
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-sans font-bold text-[var(--primary)]">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
