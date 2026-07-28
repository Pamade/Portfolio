import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter",
          padding: 60,
        }}
      >
        <h1
          style={{
            fontSize: 64,
            margin: 0,
            fontWeight: 700,
            color: "#fbe094",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Strony internetowe
        </h1>
        <h2
          style={{
            fontSize: 48,
            margin: 0,
            fontWeight: 600,
            color: "#94affb",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          i aplikacje webowe
        </h2>
        <p
          style={{
            fontSize: 28,
            color: "#f5f5f0",
            marginTop: 30,
            fontWeight: 400,
          }}
        >
          Patryk Mikołajczak
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
