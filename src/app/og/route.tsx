import { ImageResponse } from "next/og";

export const runtime = "edge";

const SIZE = { width: 1200, height: 630 } as const;

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Nick Taylor";
  const date = searchParams.get("date");
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: "72px",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              background: "#fafafa",
              color: "#0a0a0a",
              fontWeight: 700,
              fontSize: "18px",
              borderRadius: "6px",
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            }}
          >
            NT
          </div>
          <div
            style={{
              color: "#a1a1aa",
              fontSize: "24px",
              letterSpacing: "-0.01em",
            }}
          >
            nicholasrtaylor.com
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: "#fafafa",
              display: "flex",
            }}
          >
            {title}
          </div>
          {formattedDate && (
            <div
              style={{
                fontSize: "24px",
                color: "#60a5fa",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              }}
            >
              {formattedDate}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#71717a",
            fontSize: "22px",
            borderTop: "1px solid #27272a",
            paddingTop: "24px",
          }}
        >
          <div>Nick Taylor</div>
          <div>Software Engineer</div>
        </div>
      </div>
    ),
    { ...SIZE },
  );
}
