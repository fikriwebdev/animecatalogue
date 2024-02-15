import { ImageResponse } from "next/og";

export default async function generateOgImage(
  title: string,
  size: { width: number; height: number }
) {
  const imageData = (await fetch(
    new URL("../../public/assets/images/base.png", import.meta.url)
  ).then((res) => res.arrayBuffer())) as any;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={imageData}
          alt="base"
          style={{ width: "100%", height: "100%" }}
        />
        <p
          style={{
            fontSize: 88,
            fontWeight: "semibold",
            position: "absolute",
            textAlign: "center",
            inset: 0,
            zIndex: 1,
            color: "white",
          }}
        >
          {title}
        </p>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
