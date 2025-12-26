import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MDIVAN - Elite Business Associate & Assistant Recruitment";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#101626",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          {/* Logo Text */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            MDIVAN
            {/* Green Dot */}
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#22c55e", // green-500
                borderRadius: "50%",
                marginBottom: 12,
                marginLeft: 4,
              }}
            />
          </div>
        </div>

        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            opacity: 0.8,
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Elite Business Associate & Assistant Recruitment
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
