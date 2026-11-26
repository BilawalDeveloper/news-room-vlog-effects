export const REGULATION = {
  kicker: "AI REGULATION ALERT",
  headline: "EU AI ACT",
  subline: "COMPLIANCE ALERT: HIGH-RISK AI SYSTEMS",
  gauge: 62,
  status: "PARTIALLY COMPLIANT",
  gaugeCaption: "COMPLIANCE LEVEL",
  rows: ["RISK ASSESSMENT", "DATA GOVERNANCE", "TRANSPARENCY", "HUMAN OVERSIGHT"],
  footerLabel: "Deadline for Compliance:",
  footerValue: "August 2, 2026",
  accent: "#ff2a2a",
};

export const PRESETS = {
  regulation: REGULATION,
  benchmarks: {
    kicker: "MODEL SCORECARD",
    headline: "MMLU 92.7",
    subline: "FRONTIER BENCHMARK SWEEP",
    gauge: 93,
    status: "LEADING",
    gaugeCaption: "COMPOSITE",
    rows: ["HUMANEVAL 88.3", "GPQA 71.6", "MATH 64.2", "LIVECODE 81.0"],
    footerLabel: "Updated:",
    footerValue: "this hour",
    accent: "#e4c36a",
  },
  valuation: {
    kicker: "MARKET FLASH",
    headline: "$157B",
    subline: "LATEST PRIVATE VALUATION",
    gauge: 78,
    status: "UP ROUND",
    gaugeCaption: "VS LAST MARK",
    rows: ["SERIES D", "LEAD INVESTOR", "2026 CLOSE", "RUNWAY 30 MO"],
    footerLabel: "Source desk:",
    footerValue: "markets",
    accent: "#ff2a2a",
  },
  breaking: {
    kicker: "BREAKING NEWS",
    headline: "70B LIVE",
    subline: "NEW MODEL RELEASED",
    gauge: 100,
    status: "ON AIR",
    gaugeCaption: "ROLLOUT",
    rows: ["PARAMETERS 70B", "CONTEXT 1M", "API OPEN", "SAFETY REVIEW"],
    footerLabel: "First report:",
    footerValue: "just now",
    accent: "#ff2a2a",
  },
};

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function icon(ctx, kind, x, y, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.translate(x, y);
  if (kind === 0) {
    roundRect(ctx, -16, -12, 32, 28, 4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-16, -2);
    ctx.lineTo(16, -2);
    ctx.moveTo(-8, -18);
    ctx.lineTo(-8, -8);
    ctx.moveTo(8, -18);
    ctx.lineTo(8, -8);
    ctx.stroke();
  } else if (kind === 1) {
    ctx.beginPath();
    ctx.arc(0, 2, 16, 0, Math.PI * 2);
    ctx.moveTo(0, 2);
    ctx.lineTo(0, -6);
    ctx.moveTo(0, 2);
    ctx.lineTo(9, 6);
    ctx.stroke();
  } else if (kind === 2) {
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.stroke();
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * 12, Math.sin(a) * 12);
      ctx.lineTo(Math.cos(a) * 18, Math.sin(a) * 18);
      ctx.stroke();
    }
  } else {
    ctx.beginPath();
    ctx.arc(0, 0, 16, 0.2, Math.PI * 1.8);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(8, -2, 4, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

export function drawBoard(canvas, spec) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;
  const accent = spec.accent || "#ff2a2a";
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#050608";
  ctx.fillRect(0, 0, w, h);
  const pad = 36;
  ctx.save();
  ctx.shadowColor = accent;
  ctx.shadowBlur = 28;
  roundRect(ctx, pad, pad, w - pad * 2, h - pad * 2, 28);
  ctx.fillStyle = "#101318";
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#2a2e36";
  ctx.stroke();
  ctx.lineWidth = 3;
  ctx.strokeStyle = accent;
  ctx.stroke();
  ctx.restore();
  const innerX = 78;
  const innerW = w - 156;
  ctx.fillStyle = "#3a1214";
  roundRect(ctx, innerX, 78, innerW, 118, 10);
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 3;
  ctx.stroke();
  icon(ctx, 3, innerX + 70, 138, accent);
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 64px 'Barlow Condensed', Arial Narrow, sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(spec.kicker.toUpperCase(), innerX + 120, 140);
  ctx.fillStyle = accent;
  ctx.font = "700 168px 'Barlow Condensed', Arial Narrow, sans-serif";
  ctx.fillText(spec.headline.toUpperCase(), innerX, 360);
  ctx.fillStyle = "#f2f2f2";
  ctx.font = "500 42px 'Barlow Condensed', Arial Narrow, sans-serif";
  ctx.fillText(spec.subline.toUpperCase(), innerX, 440);
  const cx = innerX + 230;
  const cy = 760;
  const radius = 168;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.lineWidth = 28;
  ctx.strokeStyle = "#2a1214";
  ctx.stroke();
  const pct = Math.max(0, Math.min(100, spec.gauge));
  ctx.beginPath();
  ctx.arc(cx, cy, radius, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * pct) / 100);
  ctx.strokeStyle = accent;
  ctx.shadowColor = accent;
  ctx.shadowBlur = 18;
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#d0d0d0";
  ctx.font = "500 28px 'Barlow Condensed', Arial Narrow, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(spec.gaugeCaption.toUpperCase(), cx, cy - 70);
  ctx.fillStyle = accent;
  ctx.font = "700 108px 'Barlow Condensed', Arial Narrow, sans-serif";
  ctx.fillText(`${Math.round(pct)}%`, cx, cy + 24);
  ctx.font = "600 26px 'Barlow Condensed', Arial Narrow, sans-serif";
  ctx.fillText(spec.status.toUpperCase(), cx, cy + 86);
  const rowX = 620;
  spec.rows.slice(0, 4).forEach((row, i) => {
    const y = 620 + i * 92;
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(rowX, y + 36);
    ctx.lineTo(w - 120, y + 36);
    ctx.stroke();
    icon(ctx, i, rowX + 24, y, accent);
    ctx.fillStyle = "#f7f7f7";
    ctx.textAlign = "left";
    ctx.font = "600 40px 'Barlow Condensed', Arial Narrow, sans-serif";
    ctx.fillText(row.toUpperCase(), rowX + 70, y + 8);
  });
  ctx.fillStyle = "#14080a";
  roundRect(ctx, innerX, h - 168, innerW, 78, 8);
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineWidth = 2;
  ctx.stroke();
  icon(ctx, 0, innerX + 54, h - 128, accent);
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#ffffff";
  ctx.font = "500 36px 'Barlow Condensed', Arial Narrow, sans-serif";
  const label = spec.footerLabel;
  ctx.fillText(label, innerX + 100, h - 128);
  const labelW = ctx.measureText(label + " ").width;
  ctx.fillStyle = accent;
  ctx.font = "700 36px 'Barlow Condensed', Arial Narrow, sans-serif";
  ctx.fillText(spec.footerValue, innerX + 100 + labelW, h - 128);
}
