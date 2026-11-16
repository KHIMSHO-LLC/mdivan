import Link from "next/link";

export const PageHead = ({
  title,
  lead,
  back,
  action,
}: {
  title: string;
  lead?: string;
  back?: { href: string; label: string };
  action?: { href: string; label: string };
}) => (
  <header className="page-head">
    <h1 className="reveal">{title}</h1>
    {lead && (
      <p className="reveal" style={{ ["--d" as any]: 1 }}>
        {lead}
      </p>
    )}
    {(action || back) && (
      <div className="page-head__actions reveal" style={{ ["--d" as any]: 2 }}>
        {action && (
          <Link href={action.href} className="btn">
            {action.label} <span className="arrow" aria-hidden="true">→</span>
          </Link>
        )}
        {back && (
          <Link href={back.href} className="link">
            ← {back.label}
          </Link>
        )}
      </div>
    )}
  </header>
);
