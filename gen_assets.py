#!/usr/bin/env python3
"""Generate the vector artwork used by the XinProf GitHub Pages site."""
import math
from pathlib import Path

OUT = Path(__file__).resolve().parent / "assets" / "img"
OUT.mkdir(parents=True, exist_ok=True)
FONT = "system-ui,-apple-system,Segoe UI,sans-serif"

# ----------------------------------------------------------------------------
# 1. Hero artwork: a synthetic powder XRD pattern with two reference phases
# ----------------------------------------------------------------------------
PEAKS = [
    (21.4, .92), (26.6, .36), (30.9, .55), (35.2, .24), (36.1, .18),
    (39.5, .42), (43.3, 1.00), (47.5, .31), (50.1, .20), (54.6, .38),
    (57.8, .27), (60.0, .16), (63.4, .45), (66.3, .22), (68.2, .14),
    (71.1, .29), (75.3, .18), (77.6, .12),
]
WIDTHS = [.55, .7, .6, .8, .7, .65, .62, .75, .7, .68, .72, .7, .65, .7, .7, .68, .7, .7]
X0, X1, Y0, Y1 = 62, 772, 28, 262


def sx(t):
    return X0 + (t - 10) / 70 * (X1 - X0)


def sy(v):
    return Y1 - v * (Y1 - Y0)


def intensity(t):
    v = .035 + .012 * math.sin(t * .35)
    for (centre, amp), w in zip(PEAKS, WIDTHS):
        d = (t - centre) / w
        v += amp * (.72 * math.exp(-2.773 * d * d) + .28 / (1 + 4 * d * d))
    return min(v, 1.06)


pts = []
for i in range(720):
    t = 10 + 70 * i / 719
    pts.append((sx(t), sy(min(intensity(t), 1.02))))

polyline = " ".join("%.1f,%.1f" % p for p in pts)
area = "M %.1f,%d L " % (pts[0][0], Y1) + " L ".join(
    "%.1f,%.1f" % p for p in pts) + " L %.1f,%d Z" % (pts[-1][0], Y1)

grid = []
for v in (.25, .5, .75, 1.0):
    y = sy(v)
    grid.append('<line x1="%d" y1="%.1f" x2="%d" y2="%.1f" stroke="#e6ebf3" stroke-width="1"/>' % (X0, y, X1, y))
for t in range(10, 81, 10):
    x = sx(t)
    grid.append('<line x1="%.1f" y1="%d" x2="%.1f" y2="%d" stroke="#eef2f8" stroke-width="1"/>' % (x, Y0, x, Y1))
ticks = "".join(
    '<text x="%.1f" y="%d" text-anchor="middle" font-size="11" fill="#8492a6">%d</text>' % (sx(t), Y1 + 20, t)
    for t in range(10, 81, 10))

phase_a = [21.4, 30.9, 35.2, 39.5, 43.3, 47.5, 54.6, 57.8, 63.4, 66.3, 71.1, 75.3]
phase_b = [26.6, 36.1, 43.3, 50.1, 60.0, 68.2, 77.6]
sticks = "".join(
    '<line x1="%.1f" y1="276" x2="%.1f" y2="296" stroke="#0f766e" stroke-width="2.4" opacity=".75"/>' % (sx(t), sx(t))
    for t in phase_a)
sticks += "".join(
    '<line x1="%.1f" y1="300" x2="%.1f" y2="320" stroke="#b45309" stroke-width="2.4" opacity=".6"/>' % (sx(t), sx(t))
    for t in phase_b)

diffraction = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 344" width="800" height="344" role="img" aria-label="Powder X-ray diffraction pattern with two sets of reference peak positions">
<defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%%" stop-color="#3b5bdb" stop-opacity=".22"/>
<stop offset="100%%" stop-color="#3b5bdb" stop-opacity=".01"/>
</linearGradient></defs>
<rect width="800" height="344" rx="18" fill="#ffffff"/>
%s
<path d="%s" fill="url(#fill)"/>
<polyline points="%s" fill="none" stroke="#2f4bc4" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
<line x1="%d" y1="%d" x2="%d" y2="%d" stroke="#9aa8bb" stroke-width="1.2"/>
<line x1="%d" y1="%d" x2="%d" y2="%d" stroke="#9aa8bb" stroke-width="1.2"/>
%s
<text x="417" y="338" text-anchor="middle" font-family="%s" font-size="12" fill="#64748b">2&#952; (degrees)</text>
<text transform="translate(18 155) rotate(-90)" text-anchor="middle" font-family="%s" font-size="12" fill="#64748b">Intensity (a.u.)</text>
%s
<text x="%d" y="292" text-anchor="end" font-family="%s" font-size="10.5" fill="#0f766e">Phase A</text>
<text x="%d" y="316" text-anchor="end" font-family="%s" font-size="10.5" fill="#b45309">Phase B</text>
</svg>""" % (
    "".join(grid), area, polyline,
    X0, Y1, X1, Y1, X0, Y0, X0, Y1,
    ticks, FONT, FONT, sticks, X1, FONT, X1, FONT)
(OUT / "diffraction.svg").write_text(diffraction, encoding="utf-8")

# ----------------------------------------------------------------------------
# 2. Data-flow / architecture diagram
# ----------------------------------------------------------------------------
nodes = [
    ("COD / PCOD / TCOD", "Open CIF sources"),
    ("sync-COD", "Shared data root"),
    ("XinMatch-DataBase", ".xinDB v3 libraries"),
    ("XinMatch", "Search-match / phase ID"),
    ("XinRefinement", "Whole-pattern fitting"),
]
NW, NH, GAP, TOP = 168, 78, 40, 34
parts = ['<rect width="1000" height="250" rx="18" fill="#ffffff"/>']
for i, (title, sub) in enumerate(nodes):
    x = 20 + i * (NW + GAP)
    accent = i >= 3
    fill = "#eef2ff" if accent else "#f8fafc"
    stroke = "#a5b4fc" if accent else "#dbe3ee"
    parts.append('<rect x="%d" y="%d" width="%d" height="%d" rx="12" fill="%s" stroke="%s" stroke-width="1.4"/>'
                 % (x, TOP, NW, NH, fill, stroke))
    parts.append('<text x="%.1f" y="%d" text-anchor="middle" font-family="%s" font-size="13.5" font-weight="600" fill="#14213d">%s</text>'
                 % (x + NW / 2, TOP + 33, FONT, title))
    parts.append('<text x="%.1f" y="%d" text-anchor="middle" font-family="%s" font-size="11" fill="#64748b">%s</text>'
                 % (x + NW / 2, TOP + 54, FONT, sub))
    if i < len(nodes) - 1:
        ax, bx = x + NW + 6, x + NW + GAP - 6
        my = TOP + NH / 2
        parts.append('<line x1="%d" y1="%.1f" x2="%d" y2="%.1f" stroke="#94a3b8" stroke-width="1.6"/>' % (ax, my, bx, my))
        parts.append('<path d="M %d %.1f L %d %.1f L %d %.1f" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
                     % (bx - 6, my - 4, bx, my, bx - 6, my + 4))
parts.append('<line x1="20" y1="160" x2="980" y2="160" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="5 5"/>')
parts.append('<text x="20" y="186" font-family="%s" font-size="12" font-weight="600" fill="#475569">MCP INTEGRATION LAYER</text>' % FONT)
for i, engine in enumerate(["GSAS-II", "FullProf", "Profex / BGMN", "MAUD"]):
    x = 20 + i * 245
    parts.append('<rect x="%d" y="198" width="228" height="34" rx="8" fill="#f8fafc" stroke="#dbe3ee" stroke-width="1.2"/>' % x)
    parts.append('<text x="%d" y="220" text-anchor="middle" font-family="%s" font-size="12" fill="#334155">%s</text>'
                 % (x + 114, FONT, engine))
workflow = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 250" width="1000" height="250" '
            'role="img" aria-label="Data flow from open CIF sources through database builds to phase '
            'identification and whole-pattern refinement, with an MCP integration layer">'
            + "".join(parts) + "</svg>")
(OUT / "workflow.svg").write_text(workflow, encoding="utf-8")

# ----------------------------------------------------------------------------
# 3. Favicon
# ----------------------------------------------------------------------------
favicon = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
<rect width="64" height="64" rx="14" fill="#14213d"/>
<path d="M8 47 L18 47 L22 30 L26 47 L31 47 L36 18 L41 47 L47 47 L51 34 L55 47 L58 47" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="36" cy="18" r="3.4" fill="#7c9cff"/>
</svg>"""
(OUT / "favicon.svg").write_text(favicon, encoding="utf-8")

# ----------------------------------------------------------------------------
# 4. Crystal lattice decoration
# ----------------------------------------------------------------------------
lattice_pts = [(70, 40), (150, 40), (230, 40), (70, 120), (150, 120),
               (230, 120), (70, 200), (150, 200), (230, 200)]
edges = [(0, 1), (1, 2), (0, 3), (1, 4), (2, 5), (3, 4), (4, 5),
         (3, 6), (4, 7), (5, 8), (6, 7), (7, 8)]
lattice = []
for a, b in edges:
    x1, y1 = lattice_pts[a]
    x2, y2 = lattice_pts[b]
    lattice.append('<line x1="%d" y1="%d" x2="%d" y2="%d" stroke="#c7d2fe" stroke-width="2"/>' % (x1, y1, x2, y2))
for x, y in lattice_pts:
    lattice.append('<circle cx="%d" cy="%d" r="7" fill="#3b5bdb" opacity=".85"/>' % (x, y))
crystal = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 240" width="300" height="240" '
           'role="img" aria-label="Crystal lattice diagram">' + "".join(lattice) + "</svg>")
(OUT / "lattice.svg").write_text(crystal, encoding="utf-8")

for p in sorted(OUT.glob("*.svg")):
    print("%-20s %6d bytes" % (p.name, p.stat().st_size))
