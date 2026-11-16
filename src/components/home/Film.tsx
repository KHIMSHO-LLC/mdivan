export const Film = ({ dict }: { dict: any }) => (
  <figure className="film">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/media/gran-via-snow.jpg"
      width={854}
      height={480}
      aria-hidden="true"
    >
      <source src="/media/gran-via-snow.webm" type="video/webm" />
    </video>
    <figcaption>{dict.home.film}</figcaption>
  </figure>
);
