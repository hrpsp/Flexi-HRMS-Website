import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Flexi HRMS — the HRMS that configures to your company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #322E53 0%, #49426E 50%, #322E53 100%)",
          color: "#F7F5F2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(238,194,147,0.35) 0%, rgba(238,194,147,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(243,171,157,0.25) 0%, rgba(243,171,157,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16, zIndex: 1 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "#EEC293",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 10h20M6 16h14M6 22h8" stroke="#322E53" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>Flexi</div>
            <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: "0.04em", color: "#EEC293" }}>HRMS</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, zIndex: 1, maxWidth: 920 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#EEC293",
            }}
          >
            Pakistan&apos;s enterprises run on Flexi HRMS
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            The HRMS that configures to your company. Not the other way around.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            zIndex: 1,
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {[
            { n: "100+", l: "Client organisations" },
            { n: "35,000+", l: "Employees managed" },
            { n: "240+", l: "Pakistani cities" },
            { n: "15 years", l: "In production" },
          ].map((s) => (
            <div key={s.l} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF" }}>{s.n}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 2, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
