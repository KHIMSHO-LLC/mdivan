import Link from "next/link";

/** Navy page header used on every sub-page (the site header sits on top of it). */
export const PageHead = ({
  eyebrow,
  title,
  lead,
  back,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  back?: { href: string; label: string };
  children?: React.ReactNode;
}) => (
  <header className="page-head navy glow">
    <div className="wrap">
      {back && (
        <Link href={back.href} className="back">
          ← {back.label}
        </Link>
      )}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="h-hero">{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {children && <div className="actions">{children}</div>}
    </div>
  </header>
);
