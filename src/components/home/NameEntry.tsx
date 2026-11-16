import Image from "next/image";
import manuscript from "../../../public/media/georgian-manuscript.jpg";

export const NameEntry = ({ dict }: { dict: any }) => {
  const n = dict.home.name;
  return (
    <section className="entry" aria-labelledby="name-word">
      <p id="name-word" className="entry__word ka reveal" lang="ka">
        <span>{n.word}</span>
      </p>
      <div className="entry__head">
        <p className="entry__latin reveal" style={{ ["--d" as any]: 1 }}>
          {n.latin}
        </p>
        <p className="entry__grammar reveal" style={{ ["--d" as any]: 2 }}>
          {n.grammar}
        </p>
        <p className="entry__def reveal" style={{ ["--d" as any]: 3 }}>
          {n.definition}
        </p>
      </div>
      <p className="entry__body reveal" style={{ ["--d" as any]: 2 }}>
        {n.body}
      </p>
      <figure className="entry__figure reveal" style={{ ["--d" as any]: 3 }}>
        <Image
          src={manuscript}
          alt="A long handwritten Georgian document on aged parchment, its lines in brown ink"
          sizes="(min-width: 800px) 50vw, 100vw"
          style={{ objectPosition: "50% 40%" }}
        />
        <figcaption className="caption">{n.caption}</figcaption>
      </figure>
    </section>
  );
};
