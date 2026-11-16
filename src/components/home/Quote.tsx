"use client";

import { useState } from "react";

export const Quote = ({ dict }: { dict: any }) => {
  const items = dict.testimonials.items;
  const [i, setI] = useState(0);
  const q = items[i];
  return (
    <section className="quote" aria-label={dict.testimonials.title}>
      <div className="quote__who">
        <div key={`w${i}`} className="quote__swap">
          <p className="quote__name">{q.author}</p>
          <p className="quote__role">{q.role}</p>
        </div>
      </div>
      <div className="quote__say">
        <blockquote key={`q${i}`} className="quote__swap">
          “{q.quote}”
        </blockquote>
        <button
          type="button"
          className="quote__next link"
          onClick={() => setI((i + 1) % items.length)}
        >
          {dict.home.quote.next} <span className="num">({i + 1}/{items.length})</span>
        </button>
      </div>
    </section>
  );
};
