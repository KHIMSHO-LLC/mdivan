"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import night from "../../../public/media/gran-via-night.jpg";

const MADRID = "Europe/Madrid";
const DAY_START = 9;
const DAY_END = 18;

const CITIES: { label: { en: string; es: string }; tz: string }[] = [
  { label: { en: "New York", es: "Nueva York" }, tz: "America/New_York" },
  { label: { en: "San Francisco", es: "San Francisco" }, tz: "America/Los_Angeles" },
  { label: { en: "London", es: "Londres" }, tz: "Europe/London" },
  { label: { en: "Dubai", es: "Dubái" }, tz: "Asia/Dubai" },
];

/** Offset of a time zone from UTC, in hours, at a given instant. */
function offsetHours(tz: string, at: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(at);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"));
  return (asUtc - Math.floor(at.getTime() / 60000) * 60000) / 3600000;
}

/** Hours that a 9–18 day in `tz` shares with a 9–18 day in Madrid. */
function overlap(tz: string, at: Date) {
  const m = offsetHours(MADRID, at);
  const v = offsetHours(tz, at);
  const mStart = DAY_START - m;
  const mEnd = DAY_END - m;
  let best = 0;
  for (const shift of [-24, 0, 24]) {
    const vStart = DAY_START - v + shift;
    const vEnd = DAY_END - v + shift;
    best = Math.max(best, Math.min(mEnd, vEnd) - Math.max(mStart, vStart));
  }
  return Math.max(0, Math.round(best * 2) / 2);
}

const fmt = (tz: string, at: Date, lang: string) =>
  new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(at);

const cityName = (tz: string) => tz.split("/").pop()!.replace(/_/g, " ");

export const Clock = ({ dict, lang }: { dict: any; lang: string }) => {
  const c = dict.home.clock;
  const [now, setNow] = useState<Date | null>(null);
  const [localTz, setLocalTz] = useState<string>(MADRID);
  const [tz, setTz] = useState<string | null>(null);

  useEffect(() => {
    const local = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    setLocalTz(local);
    setTz(local === MADRID ? CITIES[0].tz : local);
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);

  const hours = now && tz ? overlap(tz, now) : null;
  const options = [
    ...(localTz !== MADRID ? [{ label: c.yourTime, tz: localTz }] : []),
    ...CITIES.filter((x) => x.tz !== localTz).map((x) => ({
      label: x.label[lang as "en" | "es"] ?? x.label.en,
      tz: x.tz,
    })),
  ];

  return (
    <section className="clock" aria-labelledby="clock-title">
      <div className="clock__text">
        <h2 id="clock-title" className="reveal">
          {c.title}
        </h2>

        {now && tz ? (
          <div>
            <div className="clock__times">
              <div>
                <p className="clock__time num">{fmt(MADRID, now, lang)}</p>
                <p className="clock__zone">Madrid</p>
              </div>
              <div>
                <p className="clock__time num">{fmt(tz, now, lang)}</p>
                <p className="clock__zone">
                  {tz === localTz ? cityName(localTz) : options.find((o) => o.tz === tz)?.label}
                </p>
              </div>
            </div>
            <p className="clock__overlap mt-8" aria-live="polite">
              {hours === 0 ? (
                c.noOverlap
              ) : (
                <>
                  <strong className="num">{hours}</strong> {hours === 1 ? c.overlapOne : c.overlap}
                </>
              )}
            </p>
            <div className="clock__chips" role="group" aria-label={c.compare}>
              {options.map((o) => (
                <button
                  key={o.tz}
                  type="button"
                  aria-pressed={o.tz === tz}
                  onClick={() => setTz(o.tz)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p className="clock__overlap">{c.fallback}</p>
        )}

        <p className="clock__body reveal" style={{ ["--d" as any]: 2 }}>
          {c.body}
        </p>
      </div>
      <figure className="clock__figure">
        <Image
          src={night}
          alt="La Adriática building on Gran Vía lit up at night, with traffic below"
          fill
          sizes="(min-width: 900px) 50vw, 100vw"
          className="drift"
        />
        <figcaption>{c.caption}</figcaption>
      </figure>
    </section>
  );
};
