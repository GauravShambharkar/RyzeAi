(self.webpackChunk*N_E = self.webpackChunk_N_E || []).push([[80013], {
20431: (e, s, t) => {
"use strict";
t.r(s),
t.d(s, {
default: () => M
});
var a = t(95155)
, l = t(12115)
, i = t(78139)
, n = t(15239)
, r = t(35299)
, c = t(27937)
, o = t(71649)
, d = t(26701);
function x(e) {
let s = ["(min-width: 1536px)", "(min-width: 1280px)", "(min-width: 1024px)"].map(e => window.matchMedia(e));
return s.forEach(s => s.addEventListener("change", e)),
() => s.forEach(s => s.removeEventListener("change", e))
}
function m() {
return window.matchMedia("(min-width: 1536px)").matches ? 1.023 : window.matchMedia("(min-width: 1280px)").matches ? .957 : window.matchMedia("(min-width: 1024px)").matches ? .891 : 1
}
function p() {
return window.matchMedia("(min-width: 1024px)").matches
}
t(78847);
let h = e => {
let {setAccLoading: s, heroBg: t, heroTitle: h, heroSubtitle: g, heroOverlay: b, hideBackCards: u, heroLeftContent: f} = e
, [j,v] = (0,
l.useState)("")
, [w,y] = (0,
l.useState)(!1);
(0,
l.useEffect)( () => {
(0,
o.Df)()
}
, []);
let N = (0,
l.useSyncExternalStore)(x, m, () => 1)
, k = (0,
l.useSyncExternalStore)(x, p, () => !1)
, A = (0,
l.useRef)(null)
, S = (0,
l.useRef)(null)
, [z,P] = (0,
l.useState)({
colW: 0,
mockH: 600
});
(0,
l.useLayoutEffect)( () => {
let e = A.current;
if (!e)
return;
let s = () => {
var s;
let t = S.current;
P({
colW: e.clientWidth,
mockH: null != (s = null == t ? void 0 : t.offsetHeight) ? s : 600
})
}
;
s();
let t = new ResizeObserver(s);
return t.observe(e),
S.current && t.observe(S.current),
() => t.disconnect()
}
, []);
let * = z.colW
, I = _ > 0 ? _ / 953 : 1
, C = k ? N : Math.min(N, I)
, R = _ > 0 ? k ? 0 : Math.max(0, (_ - 953 _ C) / 2) : 0
, E = async e => {
e.preventDefault(),
y(!0);
try {
let e = (j || "").toLowerCase().trim();
(0,
d.E)(e).catch( () => {}
),
await (0,
o.Cj)("/home", s)
} catch (e) {
console.error("Error:", e)
} finally {
y(!1)
}
}
;
return (0,
a.jsxs)("div", {
className: "relative min-h-screen flex flex-col bg-white w-full min-w-0",
children: [(0,
a.jsx)("div", {
className: "absolute inset-0 pointer-events-none",
children: t ? (0,
a.jsxs)(a.Fragment, {
children: [(0,
a.jsx)(n.default, {
src: t,
alt: "",
fill: !0,
className: "object-cover",
priority: !0,
sizes: "100vw",
placeholder: "blur",
blurDataURL: "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwT/xAAeEAACAQMFAAAAAAAAAAAAAAAAARECAxIhMlFhof/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAZEQADAAMAAAAAAAAAAAAAAAAAAQIhMVH/2gAMAwEAAhEDEQA/AK7ONa2wumI7SnR+kNDgWXywypcFOc7P/9k="
}), (0,
a.jsx)("div", {
className: "absolute inset-0",
style: {
background: b || "linear-gradient(120deg, rgba(255, 120, 30, 0.55) 0%, rgba(255, 140, 50, 0.35) 30%, rgba(255, 160, 80, 0.15) 55%, transparent 70%)"
}
})]
}) : (0,
a.jsxs)(a.Fragment, {
children: [(0,
a.jsxs)("div", {
className: "absolute inset-0",
style: {
WebkitMaskImage: "radial-gradient(ellipse 150% 120% at 15% 35%, white 20%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.4) 75%, transparent 100%)",
maskImage: "radial-gradient(ellipse 150% 120% at 15% 35%, white 20%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.4) 75%, transparent 100%)"
},
children: [(0,
a.jsx)(n.default, {
src: "/images/hero-blob-ryze.jpg",
alt: "",
fill: !0,
className: "object-cover scale-y-[-1.2] scale-x-[1.5] translate-x-10 brightness-[0.85] contrast-[1.2] saturate-[1.8] hidden md:block",
priority: !0,
sizes: "100vw",
placeholder: "blur",
blurDataURL: "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwT/xAAeEAACAQMFAAAAAAAAAAAAAAAAARECAxIhMlFhof/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAZEQADAAMAAAAAAAAAAAAAAAAAAQIhMVH/2gAMAwEAAhEDEQA/AK7ONa2wumI7SnR+kNDgWXywypcFOc7P/9k="
}), (0,
a.jsx)(n.default, {
src: "/images/hero-blob-ryze.jpg",
alt: "",
fill: !0,
className: "object-cover scale-y-[1.1] scale-x-[1.1] brightness-[1.05] saturate-[1.1] block md:hidden",
priority: !0,
sizes: "100vw",
placeholder: "blur",
blurDataURL: "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwT/xAAeEAACAQMFAAAAAAAAAAAAAAAAARECAxIhMlFhof/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAZEQADAAMAAAAAAAAAAAAAAAAAAQIhMVH/2gAMAwEAAhEDEQA/AK7ONa2wumI7SnR+kNDgWXywypcFOc7P/9k="
})]
}), (0,
a.jsx)("div", {
className: "absolute inset-0 pointer-events-none",
style: {
background: "linear-gradient(120deg, rgba(255, 72, 1, 0.75) 0%, rgba(255, 72, 1, 0.50) 30%, rgba(255, 72, 1, 0.20) 55%, transparent 70%)"
}
}), (0,
a.jsx)("div", {
className: "absolute top-0 pointer-events-none",
style: {
left: "40%",
right: "15%",
height: "80px",
background: "linear-gradient(to bottom, rgba(255, 72, 1, 0.35) 0%, transparent 100%)",
filter: "blur(8px)"
}
}), (0,
a.jsx)("div", {
className: "absolute inset-0 pointer-events-none",
style: {
background: "linear-gradient(to left, rgba(255, 100, 30, 0.18) 0%, transparent 50%)"
}
})]
})
}), (0,
a.jsx)("div", {
className: "relative flex-1 flex items-start lg:items-center pt-[116px] pb-16 max-lg:pt-[8.25rem] max-[399px]:pt-[7.75rem] max-[399px]:pb-12 lg:pt-20 lg:pb-0 min-w-0 min-h-min max-lg:overflow-visible",
children: (0,
a.jsxs)("div", {
className: "max-w-[1800px] mx-auto w-full min-w-0 box-border px-5 min-[400px]:px-6 sm:px-6 md:px-12 flex flex-col max-[399px]:gap-10 lg:flex-row items-stretch max-[399px]:items-stretch lg:items-start gap-12 lg:gap-8 xl:gap-10 max-lg:overflow-visible",
children: [f ? (0,
a.jsx)("div", {
className: "flex-1 min-w-0 w-full max-w-[1260px] lg:max-w-[45%] xl:max-w-[1260px] mt-0 lg:-mt-[30px] ml-0 lg:ml-[7px]",
children: f
}) : (0,
a.jsxs)("div", {
className: "flex-1 min-w-0 w-full max-w-[1260px] lg:max-w-[45%] xl:max-w-[1260px] mt-0 lg:-mt-[30px] ml-0 lg:ml-[7px]",
children: [(0,
a.jsx)(i.P.h1, {
initial: {
opacity: 0,
y: 30
},
animate: {
opacity: 1,
y: 0
},
transition: {
duration: .9,
delay: .15,
ease: [.16, 1, .3, 1]
},
className: "font-bold tracking-[-0.03em] text-white leading-[1.1] md:leading-[1.08] mb-8 md:mb-10 text-[42px] max-[399px]:text-[2.1rem] max-[399px]:leading-[1.12] max-[399px]:break-words md:text-[55px] lg:text-[72px]",
style: {
fontFamily: "'Satoshi', sans-serif"
},
children: h || (0,
a.jsxs)(a.Fragment, {
children: [(0,
a.jsx)("span", {
className: "text-white",
children: "AI"
}), " Agents That Grow Your Business"]
})
}), (0,
a.jsx)(i.P.p, {
initial: {
opacity: 0,
y: 25
},
animate: {
opacity: 1,
y: 0
},
transition: {
duration: .9,
delay: .3,
ease: [.16, 1, .3, 1]
},
className: "text-[18px] max-[399px]:text-[16px] md:text-[20px] lg:text-[22px] text-white/85 leading-[1.6] md:leading-relaxed mb-12 max-[399px]:mb-8 lg:mb-10 max-w-[440px] max-[399px]:max-w-full font-medium max-[399px]:break-words",
children: g || "Autonomous AI agents that manage your ads, SEO, and website — so you can focus on what matters."
}), (0,
a.jsx)(i.P.div, {
initial: {
opacity: 0,
y: 20
},
animate: {
opacity: 1,
y: 0
},
transition: {
duration: .9,
delay: .45,
ease: [.16, 1, .3, 1]
},
className: "w-full max-w-[373px] max-[399px]:max-w-full mt-4 md:mt-6",
children: (0,
a.jsxs)("form", {
onSubmit: E,
className: "flex items-center rounded-[3px] bg-white shadow-sm border border-zinc-200 h-[46px] md:h-[49px] overflow-hidden transition-all focus-within:ring-2 focus-within:ring-[#FF4801]/20 focus-within:border-[#FF4801]/40",
children: [(0,
a.jsx)("input", {
type: "email",
required: !0,
placeholder: "Enter your email",
value: j,
onChange: e => v(e.target.value),
className: "flex-1 bg-transparent border-none outline-none px-4 md:px-5 text-[17px] md:text-[19px] text-black placeholder:text-black/40 min-w-0 h-full"
}), (0,
a.jsx)("button", {
type: "submit",
disabled: w,
className: "bg-zinc-900 text-white px-[20px] md:px-[24px] h-full font-medium whitespace-nowrap hover:bg-zinc-700 transition-all flex items-center gap-2 disabled:opacity-70 rounded-[3px] translate-x-[1.5px]",
children: w ? (0,
a.jsxs)(a.Fragment, {
children: [(0,
a.jsx)("span", {
className: "text-[16px] md:text-[18px]",
children: "Get started"
}), " ", (0,
a.jsx)(r.A, {
className: "w-5 h-5 animate-spin"
})]
}) : (0,
a.jsxs)(a.Fragment, {
children: [(0,
a.jsx)("span", {
className: "text-[16px] md:text-[18px]",
children: "Get started"
}), " ", (0,
a.jsx)(c.A, {
className: "w-5 h-5"
})]
})
})]
})
}), (0,
a.jsx)(i.P.div, {
initial: {
opacity: 0
},
animate: {
opacity: 1
},
transition: {
duration: 1,
delay: .6,
ease: [.16, 1, .3, 1]
},
className: "flex flex-wrap items-center gap-5 max-[399px]:gap-3 mt-10 max-[399px]:mt-8 md:mt-12",
children: [{
src: "/images/platforms/google-ads-black.png",
alt: "Google Ads"
}, {
src: "/images/platforms/meta.png",
alt: "Meta Ads"
}, {
src: "/images/platforms/tiktok.png",
alt: "TikTok"
}, {
src: "/linkedin-logo.png",
alt: "LinkedIn"
}, {
src: "/images/platforms/microsoft.png",
alt: "Microsoft Ads"
}, {
src: "/images/shopify-new.png",
alt: "Shopify"
}].map(e => {
let {src: s, alt: t} = e;
return (0,
a.jsx)("div", {
className: "h-7 w-11 relative",
children: (0,
a.jsx)(n.default, {
src: s,
alt: t,
fill: !0,
className: "object-contain brightness-0 invert"
})
}, t)
}
)
})]
}), (0,
a.jsx)(i.P.div, {
initial: {
opacity: 0,
x: 50
},
animate: {
opacity: 1,
x: 0
},
transition: {
duration: 1.1,
delay: .4,
ease: [.16, 1, .3, 1]
},
className: "w-full min-w-0 max-w-full lg:flex-1 lg:min-w-0 lg:self-start lg:-mt-[30px] xl:-mt-[30px] flex justify-center lg:justify-start xl:justify-start xl:relative ".concat(!u ? "mt-2 max-lg:mt-5 max-[399px]:mt-3 xl:mt-0" : "mt-6 max-lg:mt-6 max-[399px]:mt-4 xl:mt-0", " ").concat(u ? "max-xl:h-[300px] max-xl:max-[399px]:h-[290px] sm:max-xl:h-[330px] md:max-xl:h-[410px] xl:h-auto xl:min-h-0" : "max-xl:h-[300px] max-xl:max-[399px]:h-[380px] min-[400px]:max-xl:h-[420px] md:max-xl:h-[500px] xl:h-auto xl:min-h-0", " max-lg:!h-auto max-lg:!min-h-0 max-lg:!max-h-none overflow-visible xl:w-[min(900px,calc(46vw+1.5rem))] xl:max-w-[900px] 2xl:w-[900px] 2xl:max-w-none"),
children: (0,
a.jsx)("div", {
ref: A,
className: "shrink-0 w-full min-w-0 flex justify-center lg:justify-start xl:justify-start xl:w-full max-lg:overflow-visible ".concat(u ? "" : "max-xl:pt-[88px] "),
children: (0,
a.jsx)("div", {
className: "relative max-lg:mx-auto xl:-translate-y-[4px] w-full max-w-full overflow-visible lg:-ml-[176px] lg:-translate-x-5 xl:-ml-[208px] xl:-translate-x-8 2xl:-ml-[256px] 2xl:-translate-x-10",
style: {
width: * > 0 ? * : "100%",
minHeight: Math.max(1, z.mockH _ C)
},
children: (0,
a.jsxs)("div", {
ref: S,
className: "pointer-events-none absolute top-0 w-[953px] max-w-[953px] min-w-0 lg:min-w-[922px]",
style: {
left: R,
transform: "scale(".concat(C, ")"),
transformOrigin: "top left"
},
children: [!u && (0,
a.jsxs)(a.Fragment, {
children: [(0,
a.jsx)("div", {
className: "absolute pointer-events-none",
style: {
top: -88,
left: -4,
right: -24,
bottom: -16,
transform: "rotate(1.8deg)",
transformOrigin: "bottom left",
backdropFilter: "blur(12px)",
WebkitBackdropFilter: "blur(12px)",
background: "rgba(255,255,255,0.06)",
border: "1px solid rgba(255,255,255,0.18)",
borderRadius: "6px",
boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
zIndex: 0,
overflow: "hidden"
},
children: (0,
a.jsxs)("div", {
style: {
padding: "5px 12px 0",
fontSize: "10.5px",
fontWeight: 800,
wordSpacing: "1px",
color: "rgba(255,255,255,0.90)",
letterSpacing: "0.08em",
textTransform: "uppercase",
display: "flex",
alignItems: "center",
gap: "6px"
},
children: [(0,
a.jsx)("div", {
style: {
width: "6px",
height: "6px",
borderRadius: "50%",
backgroundColor: "#4ade80",
flexShrink: 0
}
}), "Website builder"]
})
}), (0,
a.jsx)("div", {
className: "absolute pointer-events-none",
style: {
top: -58,
left: -8,
right: -18,
bottom: -12,
transform: "rotate(1deg)",
transformOrigin: "bottom left",
backdropFilter: "blur(16px)",
WebkitBackdropFilter: "blur(16px)",
background: "rgba(255,255,255,0.08)",
border: "1px solid rgba(255,255,255,0.25)",
borderRadius: "6px",
boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
zIndex: 1,
overflow: "hidden"
},
children: (0,
a.jsxs)("div", {
style: {
padding: "5px 12px 0",
fontSize: "10.5px",
fontWeight: 800,
wordSpacing: "1px",
color: "rgba(255,255,255,0.92)",
letterSpacing: "0.08em",
textTransform: "uppercase",
display: "flex",
alignItems: "center",
gap: "6px"
},
children: [(0,
a.jsx)("div", {
style: {
width: "6px",
height: "6px",
borderRadius: "50%",
backgroundColor: "#4ade80",
flexShrink: 0
}
}), "AI for SEO"]
})
})]
}), (0,
a.jsx)("div", {
className: "absolute pointer-events-none",
style: {
top: -26,
left: -10,
right: -10,
bottom: -10,
transform: "rotate(0deg)",
transformOrigin: "bottom left",
backdropFilter: "blur(20px)",
WebkitBackdropFilter: "blur(20px)",
background: "rgba(255,255,255,0.10)",
border: "1px solid rgba(255,255,255,0.35)",
borderRadius: "6px",
boxShadow: "0 12px 48px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.40)",
zIndex: 2,
overflow: "hidden"
},
children: (0,
a.jsxs)("div", {
style: {
padding: "5px 12px 0",
fontSize: "10.5px",
fontWeight: 800,
wordSpacing: "1px",
color: "rgba(255,255,255,0.95)",
letterSpacing: "0.08em",
textTransform: "uppercase",
display: "flex",
alignItems: "center",
gap: "6px"
},
children: [(0,
a.jsx)("div", {
style: {
width: "6px",
height: "6px",
borderRadius: "50%",
backgroundColor: "#4ade80",
flexShrink: 0
}
}), "AI for paid ads"]
})
}), (0,
a.jsx)("div", {
className: "pointer-events-auto rounded-[6px] overflow-hidden bg-[#f8f9fb]",
style: {
boxShadow: "0 25px 60px -10px rgba(0,0,0,0.20), 0 0 0 1px rgba(0,0,0,0.06)",
height: "550px",
position: "relative",
zIndex: 3
},
children: (0,
a.jsxs)(a.Fragment, {
children: [(0,
a.jsx)("style", {
children: "\n @keyframes dashPhase {\n 0% { opacity: 0; }\n 1% { opacity: 0; }\n 2% { opacity: 1; }\n 38% { opacity: 1; }\n 40% { opacity: 0; }\n 100% { opacity: 0; }\n }\n @keyframes dashScroll {\n 0%,1% { transform: translateY(0); }\n 36% { transform: translateY(calc(-100% + 490px)); }\n 100% { transform: translateY(calc(-100% + 490px)); }\n }\n @keyframes chatPhase {\n 0% { opacity: 0; }\n 40% { opacity: 0; }\n 43% { opacity: 1; }\n 99% { opacity: 1; }\n 99.7% { opacity: 0; }\n 100% { opacity: 0; }\n }\n @keyframes chatScroll {\n 0%,45% { transform: translateY(0); }\n 48% { transform: translateY(0); }\n 95% { transform: translateY(calc(-100% + 430px)); }\n 100% { transform: translateY(calc(-100% + 430px)); }\n }\n @keyframes cursorAnim {\n 0% { opacity: 0; top: 50%; left: 50%; }\n 30% { opacity: 0; top: 50%; left: 50%; }\n 33% { opacity: 1; top: 50%; left: 50%; }\n 38% { opacity: 1; top: 30%; left: 3.5%; }\n 39% { opacity: 1; top: 30%; left: 3.5%; transform: scale(0.75); }\n 40% { opacity: 1; top: 30%; left: 3.5%; transform: scale(1); }\n 43% { opacity: 0; top: 30%; left: 3.5%; }\n 100% { opacity: 0; }\n }\n @keyframes dashHighlight {\n 0% { background: rgba(0,0,0,0.06); }\n 38% { background: rgba(0,0,0,0.06); }\n 40% { background: transparent; }\n 99.7% { background: transparent; }\n 100% { background: rgba(0,0,0,0.06); }\n }\n @keyframes markHighlight {\n 0% { background: transparent; }\n 38% { background: transparent; }\n 40% { background: rgba(0,0,0,0.06); }\n 99% { background: rgba(0,0,0,0.06); }\n 99.7% { background: transparent; }\n 100% { background: transparent; }\n }\n @keyframes tabActive1 {\n 0% { background: white; color: rgba(0,0,0,0.9); }\n 38% { background: white; color: rgba(0,0,0,0.9); }\n 40% { background: transparent; color: rgba(0,0,0,0.4); }\n 99.7% { background: transparent; color: rgba(0,0,0,0.4); }\n 100% { background: white; color: rgba(0,0,0,0.9); }\n }\n @keyframes tabActive2 {\n 0% { background: transparent; color: rgba(0,0,0,0.4); }\n 38% { background: transparent; color: rgba(0,0,0,0.4); }\n 40% { background: white; color: rgba(0,0,0,0.9); }\n 99% { background: white; color: rgba(0,0,0,0.9); }\n 99.7% { background: transparent; color: rgba(0,0,0,0.4); }\n 100% { background: transparent; color: rgba(0,0,0,0.4); }\n }\n "
}), (0,
a.jsxs)("div", {
className: "flex",
style: {
height: "100%"
},
children: [(0,
a.jsxs)("div", {
className: "w-[55px] bg-white border-r border-neutral-100 flex flex-col items-center pt-3 pb-2 shrink-0 gap-0.5",
children: [(0,
a.jsx)("div", {
className: "w-7 h-7 mb-3",
children: (0,
a.jsx)("img", {
src: "/main-logo-sun-2.png",
alt: "",
className: "w-full h-full object-contain"
})
}), (0,
a.jsx)("div", {
className: "w-9 h-9 rounded-[3px] flex items-center justify-center",
style: {
animation: "dashHighlight 30s ease-in-out infinite"
},
children: (0,
a.jsxs)("svg", {
className: "w-4 h-4 text-neutral-500",
viewBox: "0 0 24 24",
fill: "none",
stroke: "currentColor",
strokeWidth: "2",
children: [(0,
a.jsx)("rect", {
x: "3",
y: "3",
width: "7",
height: "7"
}), (0,
a.jsx)("rect", {
x: "14",
y: "3",
width: "7",
height: "7"
}), (0,
a.jsx)("rect", {
x: "14",
y: "14",
width: "7",
height: "7"
}), (0,
a.jsx)("rect", {
x: "3",
y: "14",
width: "7",
height: "7"
})]
})
}), (0,
a.jsx)("div", {
className: "w-9 h-9 rounded-[3px] flex items-center justify-center",
children: (0,
a.jsx)("svg", {
className: "w-4 h-4 text-neutral-500",
viewBox: "0 0 24 24",
fill: "none",
stroke: "currentColor",
strokeWidth: "2",
children: (0,
a.jsx)("path", {
d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
})
})
}), (0,
a.jsx)("div", {
className: "w-9 h-9 rounded-[3px] flex items-center justify-center",
children: (0,
a.jsxs)("svg", {
className: "w-4 h-4 text-neutral-400",
viewBox: "0 0 24 24",
fill: "none",
stroke: "currentColor",
strokeWidth: "2",
children: [(0,
a.jsx)("circle", {
cx: "12",
cy: "12",
r: "10"
}), (0,
a.jsx)("line", {
x1: "12",
y1: "8",
x2: "12",
y2: "12"
}), (0,
a.jsx)("line", {
x1: "12",
y1: "16",
x2: "12.01",
y2: "16"
})]
})
}), (0,
a.jsx)("div", {
className: "w-9 h-9 rounded-[3px] flex items-center justify-center",
style: {
animation: "markHighlight 30s ease-in-out infinite"
},
children: (0,
a.jsx)("svg", {
className: "w-4 h-4 text-neutral-400",
viewBox: "0 0 24 24",
fill: "none",
stroke: "currentColor",
strokeWidth: "2",
children: (0,
a.jsx)("path", {
d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
})
})
}), (0,
a.jsx)("div", {
className: "w-9 h-9 rounded-[3px] flex items-center justify-center",
children: (0,
a.jsxs)("svg", {
className: "w-4 h-4 text-neutral-400",
viewBox: "0 0 24 24",
fill: "none",
stroke: "currentColor",
strokeWidth: "2",
children: [(0,
a.jsx)("path", {
d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
}), (0,
a.jsx)("polyline", {
points: "14 2 14 8 20 8"
})]
})
}), (0,
a.jsx)("div", {
className: "w-9 h-9 rounded-[3px] flex items-center justify-center",
children: (0,
a.jsxs)("svg", {
className: "w-4 h-4 text-neutral-400",
viewBox: "0 0 24 24",
fill: "none",
stroke: "currentColor",
strokeWidth: "2",
children: [(0,
a.jsx)("rect", {
x: "3",
y: "3",
width: "18",
height: "18",
rx: "2",
ry: "2"
}), (0,
a.jsx)("circle", {
cx: "8.5",
cy: "8.5",
r: "1.5"
}), (0,
a.jsx)("polyline", {
points: "21 15 16 10 5 21"
})]
})
}), (0,
a.jsx)("div", {
className: "w-9 h-9 rounded-[3px] flex items-center justify-center mt-auto",
children: (0,
a.jsxs)("svg", {
className: "w-4 h-4 text-neutral-400",
viewBox: "0 0 24 24",
fill: "none",
stroke: "currentColor",
strokeWidth: "2",
children: [(0,
a.jsx)("circle", {
cx: "12",
cy: "12",
r: "3"
}), (0,
a.jsx)("path", {
d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
})]
})
})]
}), (0,
a.jsxs)("div", {
className: "flex-1 relative overflow-hidden",
children: [(0,
a.jsx)("div", {
style: {
animation: "dashPhase 30s ease-in-out infinite"
},
children: (0,
a.jsx)("div", {
style: {
animation: "dashScroll 30s ease-in-out infinite"
},
children: (0,
a.jsxs)("div", {
className: "space-y-3 px-4 py-4 bg-[#f8f9fb]",
children: [(0,
a.jsx)("div", {
className: "grid grid-cols-3 gap-[1px] bg-black/[0.04]",
children: [{
labelL: "Cost",
labelR: "ROAS",
valL: "$12,450",
changeL: "+12%",
up: !0,
valR: "4.2x",
changeR: "+8%",
upR: !0
}, {
labelL: "Conversions",
labelR: "Conv. Rate",
valL: "508",
changeL: "+15%",
up: !0,
valR: "3.6%",
changeR: "+5%",
upR: !0
}, {
labelL: "Clicks",
labelR: "CTR",
valL: "14,200",
changeL: "+10%",
up: !0,
valR: "3.8%",
changeR: "-2%",
upR: !1
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "bg-white p-3",
children: [(0,
a.jsxs)("div", {
className: "flex items-center justify-between mb-1",
children: [(0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-400 uppercase tracking-widest",
children: e.labelL
}), (0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-400 uppercase tracking-widest",
children: e.labelR
})]
}), (0,
a.jsxs)("div", {
className: "flex items-baseline justify-between",
children: [(0,
a.jsxs)("div", {
className: "flex items-baseline gap-1.5",
children: [(0,
a.jsx)("span", {
className: "text-[20px] font-semibold text-slate-900 tracking-tight",
children: e.valL
}), (0,
a.jsx)("span", {
className: "text-[11px] font-medium ".concat(e.up ? "text-emerald-400" : "text-slate-400"),
children: e.changeL
})]
}), (0,
a.jsxs)("div", {
className: "flex items-baseline gap-1.5",
children: [(0,
a.jsx)("span", {
className: "text-[20px] font-semibold text-slate-900 tracking-tight",
children: e.valR
}), (0,
a.jsx)("span", {
className: "text-[11px] font-medium ".concat(e.upR ? "text-emerald-400" : "text-slate-400"),
children: e.changeR
})]
})]
})]
}, s))
}), (0,
a.jsxs)("div", {
className: "bg-white border border-black/[0.06] px-3 py-2",
children: [(0,
a.jsxs)("div", {
className: "flex items-center justify-between mb-1.5",
children: [(0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-400 uppercase tracking-widest",
children: "Performance by Day & Hour"
}), (0,
a.jsx)("span", {
className: "text-[11px] text-slate-400",
children: "Conversions \xb7 Last 30d"
})]
}), (0,
a.jsxs)("div", {
className: "grid grid-cols-[24px_repeat(24,1fr)] gap-[2px]",
children: [(0,
a.jsx)("span", {}), ["12a", "", "2a", "", "4a", "", "6a", "", "8a", "", "10a", "", "12p", "", "2p", "", "4p", "", "6p", "", "8p", "", "10p", ""].map( (e, s) => (0,
a.jsx)("span", {
className: "text-[7px] text-slate-400 text-center leading-none",
children: e
}, s)), [{
day: "M",
vals: [1, 1, 0, 0, 0, 1, 2, 5, 8, 12, 14, 16, 13, 11, 9, 14, 16, 18, 15, 12, 8, 6, 4, 2]
}, {
day: "T",
vals: [1, 0, 0, 0, 1, 1, 3, 6, 9, 13, 15, 17, 14, 12, 10, 15, 17, 19, 16, 13, 9, 7, 5, 2]
}, {
day: "W",
vals: [0, 1, 0, 0, 0, 1, 2, 5, 10, 14, 16, 18, 15, 13, 11, 16, 18, 20, 17, 14, 10, 7, 4, 1]
}, {
day: "T",
vals: [1, 0, 0, 0, 1, 1, 3, 7, 11, 15, 17, 19, 16, 14, 12, 17, 19, 21, 18, 15, 11, 8, 5, 2]
}, {
day: "F",
vals: [0, 1, 0, 0, 0, 1, 2, 6, 9, 13, 15, 16, 14, 12, 10, 14, 16, 17, 14, 11, 8, 6, 3, 1]
}, {
day: "S",
vals: [2, 1, 1, 0, 0, 1, 1, 3, 5, 7, 9, 10, 9, 8, 7, 9, 10, 11, 9, 8, 6, 5, 3, 2]
}, {
day: "S",
vals: [2, 1, 1, 0, 0, 1, 1, 2, 4, 6, 8, 9, 8, 7, 6, 8, 9, 10, 8, 7, 5, 4, 3, 1]
}].flatMap( (e, s) => [(0,
a.jsx)("span", {
className: "text-[9px] text-slate-400 text-right pr-1 leading-none flex items-center justify-end",
children: e.day
}, "".concat(s, "-label")), ...e.vals.map( (e, t) => {
let l = 0 === e ? 0 : Math.min(e / 21, 1);
return (0,
a.jsx)("div", {
className: "aspect-[2/1]",
style: {
backgroundColor: 0 === l ? "rgba(0,0,0,0.03)" : "rgba(52, 211, 153, ".concat(.7 _ l + .08, ")")
}
}, "".concat(s, "-").concat(t))
}
)])]
})]
}), (0,
a.jsxs)("div", {
className: "bg-white border border-black/[0.06] p-3",
children: [(0,
a.jsxs)("div", {
className: "flex items-center justify-between mb-3",
children: [(0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-400 uppercase tracking-widest",
children: "Top Performing Ads"
}), (0,
a.jsx)("span", {
className: "text-[11px] text-slate-400",
children: "By ROAS \xb7 Last 14d"
})]
}), (0,
a.jsx)("div", {
className: "grid grid-cols-4 gap-[1px] bg-black/[0.04]",
children: [{
platform: "Google",
roas: "6.8x",
spend: "$1.2K",
conv: 42,
cpa: "$28",
img: "/260330_new_landing_creatives/hero-1.png"
}, {
platform: "Meta",
roas: "5.4x",
spend: "$890",
conv: 31,
cpa: "$29",
img: "/260330_new_landing_creatives/hero-5.png"
}, {
platform: "TikTok",
roas: "4.9x",
spend: "$640",
conv: 28,
cpa: "$23",
img: "/260330_new_landing_creatives/hero-3.png"
}, {
platform: "Meta",
roas: "4.2x",
spend: "$1.5K",
conv: 38,
cpa: "$39",
img: "/260330_new_landing_creatives/hero-4.png"
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "bg-[#f8f9fb] overflow-hidden",
children: [(0,
a.jsxs)("div", {
className: "aspect-square relative overflow-hidden",
children: [(0,
a.jsx)(n.default, {
src: e.img,
alt: "Ad ".concat(s + 1),
fill: !0,
className: "object-cover"
}), (0,
a.jsx)("div", {
className: "absolute top-1.5 right-1.5 bg-white/90 backdrop-blur-sm px-1.5 py-0.5",
children: (0,
a.jsx)("span", {
className: "text-[11px] font-bold text-emerald-400",
children: e.roas
})
})]
}), (0,
a.jsxs)("div", {
className: "p-2 space-y-0.5",
children: [(0,
a.jsxs)("div", {
className: "flex justify-between",
children: [(0,
a.jsx)("span", {
className: "text-[11px] text-slate-400",
children: e.platform
}), (0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-700",
children: e.spend
})]
}), (0,
a.jsxs)("div", {
className: "flex justify-between",
children: [(0,
a.jsxs)("span", {
className: "text-[11px] text-slate-400",
children: [e.conv, " conv."]
}), (0,
a.jsxs)("span", {
className: "text-[11px] text-slate-400",
children: ["CPA ", e.cpa]
})]
})]
})]
}, s))
})]
}), (0,
a.jsx)("div", {
className: "grid grid-cols-2 gap-[1px] bg-black/[0.04]",
children: [{
labelA: "COST",
labelB: "ROAS",
bars: [55, 40, 65, 50, 70, 80, 90, 60, 45, 85, 95, 70, 50, 80, 60, 75, 90, 65]
}, {
labelA: "CONVERSIONS",
labelB: "CONV. RATE",
bars: [30, 25, 40, 35, 50, 80, 30, 25, 35, 45, 90, 40, 30, 35, 50, 85, 25, 40]
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "bg-white p-3",
children: [(0,
a.jsxs)("div", {
className: "flex items-center gap-2 text-[11px] text-slate-400 mb-2",
children: [(0,
a.jsx)("div", {
className: "w-2 h-2 bg-slate-500"
}), (0,
a.jsx)("span", {
children: e.labelA
}), (0,
a.jsx)("div", {
className: "w-2.5 h-[2px] bg-emerald-400"
}), (0,
a.jsx)("span", {
children: e.labelB
})]
}), (0,
a.jsx)("div", {
className: "relative h-[80px]",
children: (0,
a.jsxs)("div", {
className: "absolute left-0 right-0 top-0 bottom-0",
children: [(0,
a.jsx)("div", {
className: "flex items-end gap-[1px] h-full",
children: e.bars.map( (e, s) => (0,
a.jsx)("div", {
className: "flex-1 bg-slate-300",
style: {
height: "".concat(e, "%")
}
}, s))
}), (0,
a.jsx)("svg", {
className: "absolute inset-0 w-full h-full",
preserveAspectRatio: "none",
viewBox: "0 0 180 100",
children: (0,
a.jsx)("polyline", {
fill: "none",
stroke: "rgb(52, 211, 153)",
strokeWidth: "1.5",
opacity: "0.7",
points: "5,85 15,82 25,88 35,84 45,80 55,86 65,82 75,88 85,84 95,80 105,86 115,82 125,88 135,84 145,80 155,86 165,82 175,85"
})
})]
})
})]
}, s))
}), (0,
a.jsxs)("div", {
className: "bg-white border border-black/[0.06] overflow-hidden",
children: [(0,
a.jsxs)("div", {
className: "grid grid-cols-[1.4fr_1fr_0.6fr_0.7fr_0.9fr] text-[10px] font-medium text-slate-400 uppercase tracking-widest px-4 py-2 border-b border-black/[0.06]",
children: [(0,
a.jsx)("span", {
children: "Channel"
}), (0,
a.jsx)("span", {
children: "Ad Spend"
}), (0,
a.jsx)("span", {
children: "ROAS"
}), (0,
a.jsx)("span", {
children: "Conv."
}), (0,
a.jsx)("span", {
children: "Score"
})]
}), [{
name: "Google Ads",
logo: "/images/platforms/google-ads.png",
spend: "$12.5K",
spendPct: 80,
roas: "4.2x",
conv: "3.6%",
score: 82
}, {
name: "Meta Ads",
logo: "/images/platforms/meta.png",
spend: "$8.3K",
spendPct: 55,
roas: "3.1x",
conv: "2.6%",
score: 45
}, {
name: "Pinterest Ads",
logo: "/pintrest-logo-2.png",
spend: "$6.8K",
spendPct: 45,
roas: "2.8x",
conv: "2.1%",
score: 28
}, {
name: "TikTok Ads",
logo: "/images/platforms/tiktok.png",
spend: "$4.2K",
spendPct: 30,
roas: "3.5x",
conv: "4.8%",
score: 91
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "grid grid-cols-[1.4fr_1fr_0.6fr_0.7fr_0.9fr] items-center px-4 py-2.5 border-b border-black/[0.04] last:border-b-0 hover:bg-black/[0.02] transition-colors",
children: [(0,
a.jsxs)("span", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)(n.default, {
src: e.logo,
alt: e.name,
width: 14,
height: 14,
className: "object-contain"
}), (0,
a.jsx)("span", {
className: "text-[12px] font-medium text-slate-800",
children: e.name
})]
}), (0,
a.jsxs)("span", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)("div", {
className: "w-14 h-[4px] bg-black/[0.04] overflow-hidden",
children: (0,
a.jsx)("div", {
className: "h-full bg-slate-400",
style: {
width: "".concat(e.spendPct, "%")
}
})
}), (0,
a.jsx)("span", {
className: "text-[12px] text-slate-500",
children: e.spend
})]
}), (0,
a.jsx)("span", {
className: "text-[12px] text-slate-600",
children: e.roas
}), (0,
a.jsx)("span", {
className: "text-[12px] text-slate-600",
children: e.conv
}), (0,
a.jsxs)("span", {
className: "flex items-center gap-1.5",
children: [(0,
a.jsx)("div", {
className: "w-12 h-[4px] bg-black/[0.04] overflow-hidden",
children: (0,
a.jsx)("div", {
className: "h-full ".concat(e.score >= 80 ? "bg-emerald-400/60" : e.score >= 40 ? "bg-slate-300" : "bg-slate-200"),
style: {
width: "".concat(e.score, "%")
}
})
}), (0,
a.jsxs)("span", {
className: "text-[12px] text-slate-500",
children: [e.score, "%"]
})]
})]
}, s))]
}), (0,
a.jsxs)("div", {
className: "grid grid-cols-2 gap-[1px] bg-black/[0.04]",
children: [(0,
a.jsxs)("div", {
className: "bg-white p-3",
children: [(0,
a.jsxs)("div", {
className: "flex items-center justify-between mb-3",
children: [(0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-400 uppercase tracking-widest",
children: "Conversion Funnel"
}), (0,
a.jsxs)("span", {
className: "text-[11px] text-slate-400",
children: [(0,
a.jsx)("span", {
className: "text-slate-600",
children: "0.06%"
}), " conv."]
})]
}), (0,
a.jsx)("div", {
className: "space-y-2",
children: [{
label: "Impressions",
value: "842K",
pct: 100
}, {
label: "Clicks",
value: "14K",
pct: 65
}, {
label: "Leads",
value: "1.8K",
pct: 40
}, {
label: "Conversions",
value: "508",
pct: 20
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)("span", {
className: "text-[11px] text-slate-400 w-[76px] shrink-0",
children: e.label
}), (0,
a.jsx)("div", {
className: "flex-1 h-[4px] bg-black/[0.04] overflow-hidden",
children: (0,
a.jsx)("div", {
className: "h-full bg-slate-400",
style: {
width: "".concat(e.pct, "%")
}
})
}), (0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-600 w-10 text-right shrink-0",
children: e.value
})]
}, s))
})]
}), (0,
a.jsxs)("div", {
className: "bg-white p-3",
children: [(0,
a.jsxs)("div", {
className: "flex items-center justify-between mb-3",
children: [(0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-400 uppercase tracking-widest",
children: "Wasted Spend"
}), (0,
a.jsxs)("span", {
className: "text-[11px] text-slate-400",
children: [(0,
a.jsx)("span", {
className: "text-slate-600",
children: "$8.3K"
}), " \xb7 67%"]
})]
}), (0,
a.jsx)("div", {
className: "space-y-2",
children: [{
label: "Irrelevant Search Terms",
amount: "$2.8K",
barPct: 90
}, {
label: "Low QS Keywords",
amount: "$1.9K",
barPct: 70
}, {
label: "Audience Overlap",
amount: "$1.6K",
barPct: 55
}, {
label: "Budget-Capped",
amount: "$1.2K",
barPct: 40
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)("span", {
className: "text-[11px] text-slate-400 w-[120px] shrink-0 truncate",
children: e.label
}), (0,
a.jsx)("div", {
className: "flex-1 h-[4px] bg-black/[0.04] overflow-hidden",
children: (0,
a.jsx)("div", {
className: "h-full bg-slate-400",
style: {
width: "".concat(e.barPct, "%")
}
})
}), (0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-600 w-10 text-right shrink-0",
children: e.amount
})]
}, s))
})]
})]
}), (0,
a.jsxs)("div", {
className: "bg-white border border-black/[0.06] p-3",
children: [(0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3",
children: "Suggested Creatives"
}), (0,
a.jsx)("div", {
className: "grid grid-cols-4 gap-[1px] bg-black/[0.04]",
children: [{
type: "UGC",
title: "Before & After",
img: "/260330_new_landing_creatives/hero-6.png"
}, {
type: "Video",
title: "New Treatments",
img: "/260330_new_landing_creatives/hero-2-2.png"
}, {
type: "Carousel",
title: "Client Results",
img: "/260330_new_landing_creatives/hero-7-2.png"
}, {
type: "Static",
title: "Glow Package",
img: "/260330_new_landing_creatives/hero-8.png"
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "bg-[#f8f9fb] overflow-hidden",
children: [(0,
a.jsxs)("div", {
className: "aspect-[3/4] relative overflow-hidden",
children: [(0,
a.jsx)(n.default, {
src: e.img,
alt: e.title,
fill: !0,
className: "object-cover object-[center_15%]"
}), (0,
a.jsx)("span", {
className: "absolute top-1.5 left-1.5 text-[9px] font-semibold text-slate-700 bg-white/80 backdrop-blur-sm px-1.5 py-0.5",
children: e.type
})]
}), (0,
a.jsxs)("div", {
className: "p-2",
children: [(0,
a.jsx)("h4", {
className: "text-[11px] font-medium text-slate-700 mb-1.5 truncate",
children: e.title
}), (0,
a.jsxs)("div", {
className: "flex gap-[1px]",
children: [(0,
a.jsx)("button", {
className: "flex-1 text-[10px] text-slate-400 bg-black/[0.03] py-1 hover:bg-black/[0.04] transition-colors",
children: "Deny"
}), (0,
a.jsx)("button", {
className: "flex-1 text-[10px] text-emerald-400 bg-emerald-400/10 py-1 hover:bg-emerald-400/20 transition-colors",
children: "Approve"
})]
})]
})]
}, s))
})]
}), (0,
a.jsxs)("div", {
className: "bg-white border border-black/[0.06] overflow-hidden",
children: [(0,
a.jsxs)("div", {
className: "grid grid-cols-[0.4fr_1.6fr_1.2fr_0.5fr] text-[10px] font-medium text-slate-400 uppercase tracking-widest px-4 py-2 border-b border-black/[0.06]",
children: [(0,
a.jsx)("span", {
children: "Type"
}), (0,
a.jsx)("span", {
children: "Issue"
}), (0,
a.jsx)("span", {
children: "Action"
}), (0,
a.jsx)("span", {})]
}), [{
type: "Budget",
issue: "Daily budget pacing 34% behind",
action: "Increase bids by 15%"
}, {
type: "Creative",
issue: "Ad fatigue on top ad set",
action: "Rotate in 3 new variations"
}, {
type: "Keywords",
issue: "QS dropped below 5 on 12 KWs",
action: "Rewrite headlines"
}, {
type: "Targeting",
issue: "38% audience overlap",
action: "Merge overlapping audiences"
}, {
type: "Bidding",
issue: "tROAS underperforming",
action: "Lower to 2.5x for 7d"
}, {
type: "Keywords",
issue: "Neg KW gaps — $180/day",
action: "Add 23 exact negatives"
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "grid grid-cols-[0.4fr_1.6fr_1.2fr_0.5fr] items-center px-4 py-2 border-b border-black/[0.04] last:border-b-0 hover:bg-black/[0.02] transition-colors",
children: [(0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-400",
children: e.type
}), (0,
a.jsx)("span", {
className: "text-[11px] text-slate-600 pr-2",
children: e.issue
}), (0,
a.jsx)("span", {
className: "text-[11px] text-slate-400 pr-2",
children: e.action
}), (0,
a.jsxs)("div", {
className: "flex gap-[1px]",
children: [(0,
a.jsx)("button", {
className: "text-[10px] text-slate-400 bg-black/[0.03] px-2 py-0.5 hover:bg-black/[0.04] transition-colors",
children: "Deny"
}), (0,
a.jsx)("button", {
className: "text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 hover:bg-emerald-400/20 transition-colors",
children: "OK"
})]
})]
}, s))]
}), (0,
a.jsxs)("div", {
className: "grid grid-cols-2 gap-[1px] bg-black/[0.04]",
children: [(0,
a.jsxs)("div", {
className: "bg-white p-3",
children: [(0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3",
children: "Monthly Pacing"
}), (0,
a.jsxs)("div", {
className: "space-y-2.5",
children: [[{
label: "Google Search",
spent: 8420,
budget: 12e3
}, {
label: "Meta Prospecting",
spent: 5100,
budget: 6e3
}, {
label: "Pinterest Ads",
spent: 3800,
budget: 5e3
}, {
label: "TikTok Test",
spent: 2900,
budget: 3e3
}].map( (e, s) => (0,
a.jsxs)("div", {
children: [(0,
a.jsxs)("div", {
className: "flex items-center justify-between mb-1",
children: [(0,
a.jsx)("span", {
className: "text-[11px] text-slate-500",
children: e.label
}), (0,
a.jsxs)("span", {
className: "text-[10px] text-slate-400",
children: ["$", (e.spent / 1e3).toFixed(1), "K / $", (e.budget / 1e3).toFixed(0), "K"]
})]
}), (0,
a.jsx)("div", {
className: "w-full h-[4px] bg-black/[0.04] overflow-hidden",
children: (0,
a.jsx)("div", {
className: "h-full ".concat(e.spent / e.budget > .9 ? "bg-emerald-400/50" : "bg-slate-300"),
style: {
width: "".concat(e.spent / e.budget _ 100, "%")
}
})
})]
}, s)), (0,
a.jsx)("div", {
className: "border-t border-black/[0.06] pt-2",
children: (0,
a.jsxs)("div", {
className: "flex justify-between text-[11px]",
children: [(0,
a.jsx)("span", {
className: "text-slate-400",
children: "Total"
}), (0,
a.jsx)("span", {
className: "font-medium text-slate-700",
children: "$20.2K / $26K"
})]
})
})]
})]
}), (0,
a.jsxs)("div", {
className: "bg-white p-3",
children: [(0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3",
children: "Top Regions by ROAS"
}), (0,
a.jsxs)("div", {
className: "space-y-2.5",
children: [[{
region: "California",
roas: "5.2x",
spend: "$3.8K"
}, {
region: "Texas",
roas: "4.8x",
spend: "$2.1K"
}, {
region: "New York",
roas: "4.5x",
spend: "$2.9K"
}, {
region: "Florida",
roas: "4.1x",
spend: "$1.6K"
}].map( (e, s) => (0,
a.jsxs)("div", {
children: [(0,
a.jsxs)("div", {
className: "flex items-center justify-between mb-1",
children: [(0,
a.jsx)("span", {
className: "text-[11px] text-slate-500",
children: e.region
}), (0,
a.jsxs)("span", {
className: "text-[10px] text-slate-400",
children: [e.roas, " \xb7 ", e.spend]
})]
}), (0,
a.jsx)("div", {
className: "w-full h-[4px] bg-black/[0.04] overflow-hidden",
children: (0,
a.jsx)("div", {
className: "h-full bg-emerald-400/50",
style: {
width: "".concat(100 - 12 _ s, "%")
}
})
})]
}, s)), (0,
a.jsx)("div", {
className: "border-t border-black/[0.06] pt-2",
children: (0,
a.jsxs)("div", {
className: "flex justify-between text-[11px]",
children: [(0,
a.jsx)("span", {
className: "text-slate-400",
children: "Avg. ROAS"
}), (0,
a.jsx)("span", {
className: "font-medium text-slate-700",
children: "4.6x across 23 states"
})]
})
})]
})]
})]
}), (0,
a.jsxs)("div", {
className: "bg-white border border-black/[0.06] p-3",
children: [(0,
a.jsx)("span", {
className: "text-[11px] font-medium text-slate-400 uppercase tracking-widest block mb-3",
children: "Auction Insights"
}), (0,
a.jsxs)("div", {
className: "grid grid-cols-[1.4fr_1fr_0.6fr_0.6fr] text-[10px] font-medium text-slate-400 uppercase tracking-widest pb-1.5 border-b border-black/[0.06]",
children: [(0,
a.jsx)("span", {
children: "Competitor"
}), (0,
a.jsx)("span", {
children: "Impr. Share"
}), (0,
a.jsx)("span", {
children: "Overlap"
}), (0,
a.jsx)("span", {
children: "Pos."
})]
}), [{
name: "You (Ryze)",
share: 68,
overlap: "—",
pos: "1.2",
highlight: !0
}, {
name: "Glow Skin Co",
share: 54,
overlap: "42%",
pos: "1.5"
}, {
name: "LuxeDerm Studio",
share: 41,
overlap: "38%",
pos: "2.1"
}, {
name: "PureSkin Spa",
share: 33,
overlap: "29%",
pos: "2.8"
}, {
name: "Radiance Clinic",
share: 22,
overlap: "18%",
pos: "3.4"
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "grid grid-cols-[1.4fr_1fr_0.6fr_0.6fr] py-1.5 ".concat(e.highlight ? "bg-emerald-400/[0.06] -mx-3 px-3" : ""),
children: [(0,
a.jsx)("span", {
className: "text-[11px] ".concat(e.highlight ? "font-semibold text-emerald-400" : "text-slate-600"),
children: e.name
}), (0,
a.jsxs)("span", {
className: "flex items-center gap-1.5",
children: [(0,
a.jsx)("div", {
className: "w-14 h-[4px] bg-black/[0.04] overflow-hidden",
children: (0,
a.jsx)("div", {
className: "h-full ".concat(e.highlight ? "bg-emerald-400/50" : "bg-slate-300"),
style: {
width: "".concat(e.share, "%")
}
})
}), (0,
a.jsxs)("span", {
className: "text-[11px] text-slate-400",
children: [e.share, "%"]
})]
}), (0,
a.jsx)("span", {
className: "text-[11px] text-slate-400",
children: e.overlap
}), (0,
a.jsx)("span", {
className: "text-[11px] text-slate-400",
children: e.pos
})]
}, s))]
})]
})
})
}), (0,
a.jsx)("div", {
className: "absolute pointer-events-none z-10",
style: {
animation: "cursorAnim 30s ease-in-out infinite"
},
children: (0,
a.jsx)("svg", {
width: "20",
height: "20",
viewBox: "0 0 24 24",
fill: "white",
stroke: "black",
strokeWidth: "1",
children: (0,
a.jsx)("path", {
d: "M5 3l14 8-6 2-4 6z"
})
})
})]
})]
}), (0,
a.jsxs)("div", {
className: "pointer-events-none absolute inset-0 flex",
style: {
animation: "chatPhase 30s ease-in-out infinite"
},
children: [(0,
a.jsx)("div", {
className: "w-[55px] shrink-0"
}), (0,
a.jsxs)("div", {
className: "pointer-events-auto flex-1 flex flex-col bg-[#f4f5f7] overflow-hidden",
children: [(0,
a.jsx)("div", {
className: "flex-1 overflow-hidden relative",
children: (0,
a.jsx)("div", {
style: {
animation: "chatScroll 30s ease-in-out infinite"
},
children: (0,
a.jsxs)("div", {
className: "px-5 py-5 space-y-5",
children: [(0,
a.jsxs)("div", {
className: "flex items-start gap-3",
children: [(0,
a.jsx)("div", {
className: "w-6 h-6 flex-shrink-0"
}), (0,
a.jsxs)("div", {
className: "flex-1 flex justify-end items-start gap-2.5",
children: [(0,
a.jsx)("div", {
className: "bg-black/[0.06] rounded-[3px] px-4 py-2.5 max-w-[440px]",
children: (0,
a.jsx)("p", {
className: "text-[13px] text-black leading-relaxed",
children: "Launch a campaign to get more bookings this month"
})
}), (0,
a.jsx)("div", {
className: "w-6 h-6 rounded-full bg-black/20 flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold",
children: "IB"
})]
})]
}), (0,
a.jsxs)("div", {
className: "flex items-start gap-3",
children: [(0,
a.jsx)("div", {
className: "w-6 h-6 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold mt-0.5",
children: "R"
}), (0,
a.jsxs)("div", {
className: "flex-1 min-w-0 mr-[34px]",
children: [(0,
a.jsx)("span", {
className: "text-[12px] font-semibold text-black mb-1.5 block",
children: "Ryze agent"
}), (0,
a.jsxs)("div", {
className: "rounded-[3px] bg-white p-4 border border-black/[0.06]",
children: [(0,
a.jsxs)("p", {
className: "text-[12px] text-black/65 leading-[1.7] mb-4",
children: ["Got it. I've built a campaign for ", (0,
a.jsx)("strong", {
className: "text-black font-semibold",
children: "Velvet Studio"
}), " to maximize bookings in Scottsdale this month."]
}), (0,
a.jsx)("div", {
className: "text-[9px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-1",
children: "Campaign Setup"
}), (0,
a.jsx)("h3", {
className: "text-[14px] font-semibold text-black mb-3",
children: "Velvet Studio — March bookings"
}), (0,
a.jsx)("div", {
className: "grid grid-cols-3 gap-[1px] bg-black/[0.06] mb-4",
children: [{
label: "Daily budget",
value: "$85",
sub: "$2,550/mo"
}, {
label: "Est. clicks/mo",
value: "840",
sub: "Based on local CPCs"
}, {
label: "Est. bookings",
value: "42–58",
sub: "5–7% conv. rate"
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "bg-white p-3",
children: [(0,
a.jsx)("div", {
className: "text-[10px] text-black/40 mb-1",
children: e.label
}), (0,
a.jsx)("div", {
className: "text-[18px] font-bold text-black leading-none",
children: e.value
}), (0,
a.jsx)("div", {
className: "text-[10px] text-black/30 mt-1",
children: e.sub
})]
}, s))
}), [{
l: "Platforms",
v: "Google Search + Meta"
}, {
l: "Radius",
v: "15 miles from Scottsdale, AZ"
}, {
l: "Schedule",
v: "Mon–Sat, 7am–9pm"
}, {
l: "Bidding",
v: "Maximize conversions"
}, {
l: "Landing page",
v: "velvetstudio.com/book"
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "flex justify-between py-2 text-[11px] ".concat(s < 4 ? "border-b border-black/[0.04]" : ""),
children: [(0,
a.jsx)("span", {
className: "text-black/40",
children: e.l
}), (0,
a.jsx)("span", {
className: "font-semibold text-black",
children: e.v
})]
}, s)), (0,
a.jsxs)("div", {
className: "flex justify-end gap-[1px] mt-4",
children: [(0,
a.jsx)("button", {
className: "text-[10px] font-semibold text-black/50 bg-black/[0.04] px-3 py-1.5 rounded-[3px]",
children: "Edit first"
}), (0,
a.jsx)("button", {
className: "text-[10px] font-semibold text-white bg-black px-3 py-1.5 rounded-[3px]",
children: "Launch campaign"
})]
})]
})]
})]
}), (0,
a.jsxs)("div", {
className: "flex items-start gap-3",
children: [(0,
a.jsx)("div", {
className: "w-6 h-6 flex-shrink-0"
}), (0,
a.jsxs)("div", {
className: "flex-1 flex justify-end items-start gap-2.5",
children: [(0,
a.jsx)("div", {
className: "bg-black/[0.06] rounded-[3px] px-4 py-2.5 max-w-[440px]",
children: (0,
a.jsx)("p", {
className: "text-[13px] text-black leading-relaxed",
children: "Give me a full audit of my Google Ads account"
})
}), (0,
a.jsx)("div", {
className: "w-6 h-6 rounded-full bg-black/20 flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold",
children: "IB"
})]
})]
}), (0,
a.jsxs)("div", {
className: "flex items-start gap-3",
children: [(0,
a.jsx)("div", {
className: "w-6 h-6 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold mt-0.5",
children: "R"
}), (0,
a.jsxs)("div", {
className: "flex-1 min-w-0 mr-[34px]",
children: [(0,
a.jsx)("span", {
className: "text-[12px] font-semibold text-black mb-1.5 block",
children: "Ryze agent"
}), (0,
a.jsxs)("div", {
className: "rounded-[3px] bg-white p-4 border border-black/[0.06]",
children: [(0,
a.jsxs)("p", {
className: "text-[12px] text-black/65 leading-[1.7] mb-4",
children: ["I've audited ", (0,
a.jsx)("strong", {
className: "text-black font-semibold",
children: "Velvet Studio"
}), " — Google Ads. Here's what I found:"]
}), (0,
a.jsxs)("div", {
className: "flex gap-4 mb-0",
children: [(0,
a.jsxs)("div", {
className: "relative w-[60px] h-[60px] shrink-0",
children: [(0,
a.jsxs)("svg", {
viewBox: "0 0 120 120",
className: "w-full h-full",
children: [(0,
a.jsx)("circle", {
cx: "60",
cy: "60",
r: "50",
fill: "none",
stroke: "rgba(0,0,0,0.04)",
strokeWidth: "10"
}), (0,
a.jsx)("circle", {
cx: "60",
cy: "60",
r: "50",
fill: "none",
stroke: "rgb(52,211,153)",
strokeWidth: "10",
strokeDasharray: "314",
strokeDashoffset: "88",
strokeLinecap: "round",
transform: "rotate(-90 60 60)"
})]
}), (0,
a.jsx)("div", {
className: "absolute inset-0 flex items-center justify-center",
children: (0,
a.jsx)("span", {
className: "text-[20px] font-bold text-black",
children: "72"
})
})]
}), (0,
a.jsxs)("div", {
className: "flex-1 min-w-0 flex gap-3",
children: [(0,
a.jsxs)("div", {
className: "flex-1",
children: [(0,
a.jsx)("div", {
className: "text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-1.5",
children: "Fix"
}), ["Junk placements ($412/mo)", "Overnight ads, zero leads", "Double-counting conversions"].map( (e, s) => (0,
a.jsxs)("div", {
className: "flex items-start gap-1 mb-1 last:mb-0",
children: [(0,
a.jsx)("span", {
className: "w-1 h-1 bg-black rounded-full shrink-0 mt-[4px]"
}), (0,
a.jsx)("span", {
className: "text-[10px] text-black/70 leading-snug",
children: e
})]
}, s))]
}), (0,
a.jsx)("div", {
className: "w-px bg-black/[0.06]"
}), (0,
a.jsxs)("div", {
className: "flex-1",
children: [(0,
a.jsx)("div", {
className: "text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-1.5",
children: "Strong"
}), ["Keywords scoring 92", "Tracking setup at 91", "Page loads in 1.2s"].map( (e, s) => (0,
a.jsxs)("div", {
className: "flex items-start gap-1 mb-1 last:mb-0",
children: [(0,
a.jsx)("span", {
className: "w-1 h-1 bg-[rgb(52,211,153)] rounded-full shrink-0 mt-[4px]"
}), (0,
a.jsx)("span", {
className: "text-[10px] text-black/50 leading-snug",
children: e
})]
}, s))]
})]
})]
}), (0,
a.jsx)("div", {
className: "h-px bg-black/[0.06] my-4"
}), (0,
a.jsxs)("p", {
className: "text-[12px] text-black/60 leading-[1.7]",
children: ["You spent ", (0,
a.jsx)("strong", {
className: "text-black",
children: "$3,420"
}), " last month and got ", (0,
a.jsx)("strong", {
className: "text-black",
children: "87 bookings"
}), " at ", (0,
a.jsx)("strong", {
className: "text-black",
children: "$39 each"
}), ". That's a ", (0,
a.jsx)("strong", {
className: "text-black",
children: "3.8x ROAS"
}), ". But ", (0,
a.jsx)("strong", {
className: "text-black",
children: "$640/mo is going to waste"
}), "."]
}), (0,
a.jsx)("div", {
className: "h-px bg-black/[0.06] my-4"
}), (0,
a.jsx)("div", {
className: "text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-2",
children: "The biggest problem"
}), (0,
a.jsxs)("p", {
className: "text-[12px] text-black/60 leading-[1.7] mb-2",
children: [(0,
a.jsx)("strong", {
className: "text-black",
children: "$412/mo is going to junk placements"
}), " — 34 low-quality sites generated ", (0,
a.jsx)("strong", {
className: "text-black",
children: "2,100 impressions with zero conversions"
}), "."]
}), (0,
a.jsxs)("p", {
className: "text-[12px] text-black/60 leading-[1.7]",
children: ["Your ads run 24/7 but ", (0,
a.jsx)("strong", {
className: "text-black",
children: "not a single booking after 9pm"
}), " in 60 days. That's $148/mo wasted."]
}), (0,
a.jsx)("div", {
className: "h-px bg-black/[0.06] my-4"
}), (0,
a.jsx)("div", {
className: "text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-2",
children: "What I'd do"
}), (0,
a.jsx)("div", {
className: "space-y-3",
children: [{
n: "1",
title: "Exclude 34 junk placements",
desc: "Saves $412/mo. Sites like weatherwidget.io and 32 others."
}, {
n: "2",
title: "Pause ads 9pm–7am",
desc: "Saves $148/mo. 94% of conversions happen 8am–8pm."
}, {
n: "3",
title: "Add 38 negative keywords",
desc: 'Saves $80/mo. Searches like "med spa jobs" and "diy facial".'
}, {
n: "4",
title: "Fix conversion tracking",
desc: "Book Now button fires twice — inflating bookings by ~15%."
}].map( (e, s) => (0,
a.jsxs)("div", {
className: "flex gap-2",
children: [(0,
a.jsx)("span", {
className: "text-[11px] font-bold text-black/20 shrink-0 mt-[1px] w-3 tabular-nums",
children: e.n
}), (0,
a.jsxs)("div", {
children: [(0,
a.jsx)("p", {
className: "text-[12px] text-black leading-snug font-semibold",
children: e.title
}), (0,
a.jsx)("p", {
className: "text-[11px] text-black/50 mt-0.5 leading-[1.6]",
children: e.desc
})]
})]
}, s))
}), (0,
a.jsx)("div", {
className: "h-px bg-black/[0.06] my-4"
}), (0,
a.jsx)("div", {
className: "text-[8px] font-semibold text-black/40 uppercase tracking-[0.12em] mb-2",
children: "Bottom line"
}), (0,
a.jsxs)("p", {
className: "text-[12px] text-black/60 leading-[1.7]",
children: ["4 fixes save ", (0,
a.jsx)("strong", {
className: "text-black",
children: "$640/mo"
}), " — est. ", (0,
a.jsx)("strong", {
className: "text-black",
children: "15\\u201320 more bookings"
}), ". ROAS from 3.8x to ", (0,
a.jsx)("strong", {
className: "text-black",
children: "4.4x"
}), "."]
}), (0,
a.jsxs)("div", {
className: "flex justify-end gap-[1px] mt-4",
children: [(0,
a.jsx)("button", {
className: "text-[10px] font-semibold text-black/50 bg-black/[0.04] px-3 py-1.5 rounded-[3px]",
children: "See full report"
}), (0,
a.jsx)("button", {
className: "text-[10px] font-semibold text-white bg-black px-3 py-1.5 rounded-[3px]",
children: "Fix all 4 issues"
})]
})]
})]
})]
})]
})
})
}), (0,
a.jsx)("div", {
className: "border-t border-black/[0.06] px-4 py-2.5 bg-white shrink-0",
children: (0,
a.jsxs)("div", {
className: "flex items-center bg-black/[0.03] border border-black/[0.06] rounded-[3px] px-3 py-2 gap-2",
children: [(0,
a.jsx)("span", {
className: "flex-1 text-[12px] text-black/30",
children: "Ask Ryze anything about your ads..."
}), (0,
a.jsx)("div", {
className: "w-6 h-6 bg-black rounded-[3px] flex items-center justify-center shrink-0",
children: (0,
a.jsx)("svg", {
className: "w-3 h-3 text-white",
viewBox: "0 0 24 24",
fill: "none",
stroke: "currentColor",
strokeWidth: "2.5",
children: (0,
a.jsx)("path", {
d: "M5 12h14M12 5l7 7-7 7"
})
})
})]
})
})]
})]
})]
})
})]
})
})
})
})]
})
})]
})
}
;
var g = t(67127)
, b = t(67909)
, u = t(14679)
, f = t(52987)
, j = t(91907)
, v = t(81328)
, w = t(42319)
, y = t(23155)
, N = t(24033);
let k = (0,
b.default)( () => Promise.all([t.e(55332), t.e(89827)]).then(t.bind(t, 89827)), {
loadableGenerated: {
webpack: () => [require.resolveWeak("@/components/home-components/AgencyDashboard")]
},
ssr: !1
})
, A = (0,
b.default)( () => t.e(74865).then(t.bind(t, 74865)), {
loadableGenerated: {
webpack: () => [require.resolveWeak("@/components/home-components/WallOfLove")]
},
ssr: !1
})
, S = (0,
b.default)( () => t.e(4614).then(t.bind(t, 4614)), {
loadableGenerated: {
webpack: () => [require.resolveWeak("@/components/home-components/seo-agent-animator/SeoAgentCard")]
},
ssr: !1
})
, z = (0,
b.default)( () => t.e(98008).then(t.bind(t, 98008)), {
loadableGenerated: {
webpack: () => [require.resolveWeak("@/components/home-components/AdSwipeWidgetV3")]
},
ssr: !1
})
, P = (0,
b.default)( () => t.e(46759).then(t.bind(t, 46759)), {
loadableGenerated: {
webpack: () => [require.resolveWeak("@/components/home-components/audit-summary-animator/AuditSummaryCard")]
},
ssr: !1
})
, \_ = (0,
b.default)( () => t.e(89979).then(t.bind(t, 89979)), {
loadableGenerated: {
webpack: () => [require.resolveWeak("@/components/home-components/keywords/KeywordsCard")]
},
ssr: !1
})
, I = (0,
b.default)( () => t.e(93144).then(t.bind(t, 93144)), {
loadableGenerated: {
webpack: () => [require.resolveWeak("@/components/home-components/creative-analysis/CreativeAnalysisCard")]
},
ssr: !1
})
, C = (0,
b.default)( () => t.e(86708).then(t.bind(t, 86708)), {
loadableGenerated: {
webpack: () => [require.resolveWeak("@/components/home-components/FeaturesGrid")]
},
ssr: !1
})
, R = (0,
b.default)( () => t.e(73396).then(t.bind(t, 73396)), {
loadableGenerated: {
webpack: () => [require.resolveWeak("@/components/home-components/website-builder-animator/WebsiteBuilderCard")]
},
ssr: !1
})
, E = e => {
let {question: s, answer: t} = e
, [i,n] = (0,
l.useState)(!1);
return (0,
a.jsxs)("div", {
className: "py-5",
children: [(0,
a.jsxs)("button", {
type: "button",
onClick: () => n(!i),
className: "w-full flex items-center justify-between text-left cursor-pointer gap-3",
"aria-expanded": i,
children: [(0,
a.jsx)("span", {
className: "text-[17px] font-semibold text-black pr-2",
children: s
}), (0,
a.jsx)(N.A, {
className: "w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ease-out ".concat(i ? "rotate-180" : "")
})]
}), (0,
a.jsx)("div", {
className: "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ".concat(i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
children: (0,
a.jsx)("div", {
className: "min-h-0 overflow-hidden",
children: (0,
a.jsx)("p", {
className: "pt-3 pb-0.5 text-[15px] text-zinc-500 leading-relaxed pr-12",
children: t
})
})
})]
})
}
, M = () => {
let[e,s] = (0,
l.useState)("")
, [t,c] = (0,
l.useState)(!1)
, [x,m] = (0,
l.useState)(!1)
, [p,b] = (0,
l.useState)(!1)
, [N,M] = (0,
l.useState)(!1);
(0,
l.useEffect)( () => {
if (!x)
return void b(!1);
let e = setTimeout( () => {
b(!0)
}
, 45e3);
return () => clearTimeout(e)
}
, [x]),
(0,
l.useEffect)( () => {
if (!( () => {
let e = navigator.userAgent || navigator.vendor || window.opera;
return e.indexOf("FBAN") > -1 || e.indexOf("FBAV") > -1 || e.indexOf("Instagram") > -1 || e.indexOf("LinkedIn") > -1
}
)())
return;
M(!0);
let e = window.location.href
, s = /Android/i.test(navigator.userAgent)
, t = /iPhone|iPad|iPod/i.test(navigator.userAgent)
, a = e;
if (s) {
let s = e.replace(/^https?:\/\//, "");
a = "intent://".concat(s, "#Intent;scheme=https;package=com.android.chrome;end")
} else
t && (a = "x-safari-https://".concat(e.replace(/^https?:\/\//, "")));
window.location.href = a;
let l = setTimeout( () => {}
, 500);
return () => clearTimeout(l)
}
, []),
(0,
w.N)(),
(0,
l.useEffect)( () => {
(async () => {
try {
let e = await (0,
v.Q4)(d.j);
if (e && e.user) {
console.log("\uD83D\uDD04 Handling mobile redirect auth result..."),
m(!0);
let e = sessionStorage.getItem("ryze_auth_redirect")
, s = "/home";
if (e) {
let {redirectPath: t, timestamp: a} = JSON.parse(e);
Date.now() - a > 6e5 || (s = t),
sessionStorage.removeItem("ryze_auth_redirect")
}
let t = await (0,
o.vD)();
if (!t)
throw Error("Firebase auth state not ready after redirect");
let a = await t.getIdToken();
await (0,
y.j)(a, s)
}
} catch (e) {
console.error("Redirect auth error:", e),
m(!1)
}
}
)()
}
, []);
let T = async s => {
s.preventDefault(),
c(!0);
try {
(0,
d.E)(e).catch( () => {}
),
await (0,
o.Cj)("/home", m)
} catch (e) {
console.error("Error:", e)
} finally {
c(!1)
}
}
;
if ((0,
l.useEffect)( () => {
u.A.track("Landing Page Viewed");
let e = window.location.href
, s = navigator.userAgent || navigator.vendor || window.opera;
if (/LinkedInApp/i.test(s))
if (/android/i.test(s)) {
let s = e.replace(/^https?:\/\//, "");
window.location.href = "intent://" + s + "#Intent;scheme=https;package=com.android.chrome;end"
} else
/iPad|iPhone|iPod/.test(s) && !window.MSStream && (window.location.href = "x-safari-" + e)
}
, []),
N) {
let e = /iPhone|iPad|iPod/i.test(navigator.userAgent)
, s = window.location.href.replace(/^https?:\/\//, "");
return (0,
a.jsx)("div", {
className: "h-screen w-full bg-white flex flex-col items-center justify-center p-6 z-50 fixed inset-0",
children: (0,
a.jsxs)("div", {
className: "max-w-md text-center space-y-6",
children: [(0,
a.jsx)("div", {
className: "animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"
}), (0,
a.jsx)("h2", {
className: "text-2xl font-bold text-black",
children: "Opening in browser..."
}), (0,
a.jsx)("p", {
className: "text-zinc-600",
children: "Attempting to open your default browser."
}), (0,
a.jsx)("a", {
href: e ? "x-safari-https://".concat(s) : "intent://".concat(s, "#Intent;scheme=https;package=com.android.chrome;end"),
target: "\_blank",
rel: "noreferrer",
className: "inline-block bg-black text-white px-6 py-3 rounded-[3px] font-medium hover:bg-zinc-800 transition-colors mt-4",
children: e ? "Open in Safari" : "Open in Chrome"
})]
})
})
}
return x ? (0,
a.jsx)("div", {
className: "h-screen w-full bg-gradient-to-br from-green-50/30 via-white to-orange-100/30 absolute z-[999] top-0 left-0 flex flex-row justify-center items-center",
children: (0,
a.jsx)("div", {
className: "flex-1 items-center justify-center",
children: (0,
a.jsxs)("div", {
className: "flex flex-col items-center gap-6",
children: [(0,
a.jsxs)("div", {
className: "relative",
children: [(0,
a.jsx)("div", {
className: "absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"
}), (0,
a.jsx)(r.A, {
className: "h-[3.375rem] w-[3.375rem] text-black relative ".concat(p ? "" : "animate-spin")
})]
}), (0,
a.jsx)("div", {
className: "text-center space-y-2",
children: p ? (0,
a.jsxs)(a.Fragment, {
children: [(0,
a.jsx)("p", {
className: "text-[20.25px] font-medium",
children: "Something went wrong"
}), (0,
a.jsx)("p", {
className: "text-[15.75px] text-[#737373]",
children: "Please try again"
}), (0,
a.jsx)("button", {
onClick: () => {
m(!1),
b(!1)
}
,
className: "mt-4 px-6 py-3 bg-black text-white rounded-[3px] font-medium hover:bg-zinc-800 transition-colors",
children: "Try Again"
})]
}) : (0,
a.jsxs)(a.Fragment, {
children: [(0,
a.jsx)("p", {
className: "text-[20.25px] font-medium",
children: "Setting up your account..."
}), (0,
a.jsx)("p", {
className: "text-[15.75px] text-[#737373]",
children: "This will only take a moment"
})]
})
})]
})
})
}) : (0,
a.jsxs)(a.Fragment, {
children: [(0,
a.jsxs)(g, {
children: [(0,
a.jsx)("title", {
children: "Ryze AI – AI agents for ads, SEO, and website building"
}), (0,
a.jsx)("meta", {
name: "description",
content: "Autonomous AI agents that manage your paid ads, SEO, and website — so you can focus on what matters. Ryze AI optimizes campaigns, fixes technical SEO, and builds high-converting pages."
}), (0,
a.jsx)("meta", {
name: "keywords",
content: "AI ad management, AI SEO, AI website builder, autonomous marketing, Google Ads AI, Meta ads automation, SEO automation, landing page builder, campaign optimization AI, marketing automation"
}), (0,
a.jsx)("meta", {
name: "robots",
content: "index, follow"
}), (0,
a.jsx)("meta", {
name: "language",
content: "English"
}), (0,
a.jsx)("meta", {
property: "og:type",
content: "website"
}), (0,
a.jsx)("meta", {
property: "og:title",
content: "Ryze AI – AI agents for ads, SEO, and website building"
}), (0,
a.jsx)("meta", {
property: "og:description",
content: "Autonomous AI agents that manage your paid ads, SEO, and website — so you can focus on what matters."
}), (0,
a.jsx)("meta", {
property: "og:url",
content: "https://get-ryze.ai"
}), (0,
a.jsx)("meta", {
property: "og:site_name",
content: "Ryze AI"
}), (0,
a.jsx)("meta", {
name: "twitter:card",
content: "summary_large_image"
}), (0,
a.jsx)("meta", {
name: "twitter:title",
content: "Ryze AI – AI agents for ads, SEO, and website building"
}), (0,
a.jsx)("meta", {
name: "twitter:description",
content: "Autonomous AI agents that manage your paid ads, SEO, and website — so you can focus on what matters."
}), (0,
a.jsx)("meta", {
name: "viewport",
content: "width=device-width, initial-scale=1"
}), (0,
a.jsx)("link", {
rel: "canonical",
href: "https://get-ryze.ai"
})]
}), (0,
a.jsx)("style", {
children: "\n .landing-5-satoshi, .landing-5-satoshi _ {\n font-family: 'Satoshi', sans-serif !important;\n }\n "
}), (0,
a.jsxs)("div", {
className: "landing-page landing-5-satoshi",
children: [(0,
a.jsx)(h, {
setAccLoading: m,
heroBg: "/images/landscape-for-landing-3.png",
heroTitle: (0,
a.jsxs)(a.Fragment, {
children: ["AI runs your", (0,
a.jsx)("br", {}), "ads, SEO,", (0,
a.jsx)("br", {}), "and website"]
}),
heroSubtitle: (0,
a.jsxs)(a.Fragment, {
children: ["More customers on autopilot", (0,
a.jsx)("br", {}), "— or let our experts run it for you"]
}),
heroOverlay: "linear-gradient(120deg, rgba(15, 60, 25, 0.65) 0%, rgba(20, 80, 35, 0.45) 30%, rgba(30, 100, 50, 0.20) 55%, transparent 70%)"
}), (0,
a.jsx)("section", {
className: "bg-white border-y border-zinc-200 overflow-hidden",
children: (0,
a.jsx)("div", {
className: "max-w-[1400px] mx-auto",
children: (0,
a.jsxs)("div", {
className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200",
children: [(0,
a.jsx)("div", {
className: "col-span-2 md:col-span-3 lg:col-span-1 px-4 md:px-6 py-4 md:py-7 flex items-center",
children: (0,
a.jsxs)("p", {
className: "text-[13px] leading-snug text-zinc-500 font-normal",
children: ["Featured by the world's", (0,
a.jsx)("br", {}), "most influential media"]
})
}), [{
src: "/images/press/wsj.svg",
alt: "WSJ",
h: "h-[14px]"
}, {
src: "/images/press/forbes.svg",
alt: "Forbes",
h: "h-[18px]"
}, {
src: "/images/press/axios.svg",
alt: "Axios",
h: "h-[19px]"
}, {
src: "/images/press/business-insider.svg",
alt: "Business Insider",
h: "h-[24px]"
}, {
src: "/images/press/fortune.svg",
alt: "Fortune",
h: "h-[16px]"
}].map(e => {
let {src: s, alt: t, h: l} = e;
return (0,
a.jsx)("div", {
className: "px-3 md:px-6 py-4 md:py-7 flex items-center justify-center",
children: (0,
a.jsx)("img", {
src: s,
alt: t,
className: "".concat(l, " w-auto")
})
}, t)
}
)]
})
})
}), (0,
a.jsx)(A, {}), (0,
a.jsx)("section", {
className: "py-16 bg-white border-t border-zinc-100",
children: (0,
a.jsx)("div", {
className: "max-w-[1400px] mx-auto px-6 md:px-12",
children: (0,
a.jsxs)("div", {
className: "grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200",
children: [(0,
a.jsxs)("div", {
className: "px-6 md:px-10 py-8 md:py-0",
children: [(0,
a.jsx)("p", {
className: "text-[13px] text-zinc-400 font-medium uppercase tracking-[0.15em] mb-8",
children: "Trusted by huge companies"
}), (0,
a.jsx)("div", {
className: "grid grid-cols-2 sm:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-8 place-items-center",
children: [{
src: "/images/platforms/client_logos/State_Farm_logo.png",
alt: "State Farm"
}, {
src: "/images/platforms/client_logos/Luca-Faloni.png",
alt: "Luca Faloni"
}, {
src: "/images/platforms/client_logos/Pepperfry_logo.png",
alt: "Pepperfry"
}, {
src: "/images/platforms/client_logos/jenni-ai-logo.svg",
alt: "Jenni AI"
}, {
src: "/images/platforms/client_logos/slim-chickens.webp",
alt: "Slim Chickens"
}, {
src: "/images/platforms/client_logos/superpower-2.png",
alt: "Superpower"
}].map(e => {
let {src: s, alt: t, placeholder: l} = e;
return (0,
a.jsx)("div", {
className: "relative h-10 w-full",
children: l ? (0,
a.jsx)("div", {
className: "w-full h-full rounded-[2px] bg-zinc-200/50"
}) : (0,
a.jsx)(n.default, {
src: s,
alt: t,
fill: !0,
sizes: "80px",
className: "object-contain"
})
}, t)
}
)
})]
}), (0,
a.jsxs)("div", {
className: "px-6 md:px-10 py-8 md:py-0",
children: [(0,
a.jsx)("p", {
className: "text-[13px] text-zinc-400 font-medium uppercase tracking-[0.15em] mb-8",
children: "Trusted by small businesses"
}), (0,
a.jsx)("div", {
className: "grid grid-cols-2 sm:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-8 place-items-center",
children: [{
src: "/images/platforms/client_logos/hg_logo.png",
alt: "HG"
}, {
src: "/images/platforms/client_logos/mos_logo1.png",
alt: "MOS"
}, {
src: "/images/platforms/client_logos/pupil_logo1.png",
alt: "Pupil"
}, {
src: "/images/platforms/client_logos/tetra-logo.png",
alt: "Tetra"
}, {
src: "/images/platforms/client_logos/villlyx_logo.png",
alt: "Villyx"
}, {
src: "/images/platforms/client_logos/ritma_logo1.png",
alt: "Ritma"
}].map(e => {
let {src: s, alt: t, placeholder: l} = e;
return (0,
a.jsx)("div", {
className: "relative h-10 w-full",
children: l ? (0,
a.jsx)("div", {
className: "w-full h-full rounded-[2px] bg-zinc-200/50"
}) : (0,
a.jsx)(n.default, {
src: s,
alt: t,
fill: !0,
sizes: "80px",
className: "object-contain"
})
}, t)
}
)
})]
}), (0,
a.jsxs)("div", {
className: "px-6 md:px-10 py-8 md:py-0",
children: [(0,
a.jsx)("p", {
className: "text-[13px] text-zinc-400 font-medium uppercase tracking-[0.15em] mb-8",
children: "Trusted by agencies"
}), (0,
a.jsx)("div", {
className: "grid grid-cols-2 sm:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-8 place-items-center",
children: [{
src: "/images/platforms/client_logos/speedy-logo.svg",
alt: "Speedy"
}, {
src: "/images/platforms/client_logos/human-logo-2.png",
alt: "Human"
}, {
src: "/images/platforms/client_logos/motif_digital.png",
alt: "Motif Digital"
}, {
src: "/images/platforms/client_logos/s360 logo.svg",
alt: "S360"
}, {
src: "/images/platforms/client_logos/directly_logo.png",
alt: "Directly"
}, {
src: "/images/platforms/client_logos/caleyx-logo.png",
alt: "Caleyx"
}].map(e => {
let {src: s, alt: t, placeholder: l} = e;
return (0,
a.jsx)("div", {
className: "relative h-10 w-full",
children: l ? (0,
a.jsx)("div", {
className: "w-full h-full rounded-[2px] bg-zinc-200/50"
}) : (0,
a.jsx)(n.default, {
src: s,
alt: t,
fill: !0,
sizes: "80px",
className: "object-contain"
})
}, t)
}
)
})]
})]
})
})
}), (0,
a.jsx)("section", {
id: "ai-marketer",
className: "py-20 bg-white",
children: (0,
a.jsxs)("div", {
className: "max-w-[1400px] mx-auto px-3 md:px-5 lg:px-6",
children: [(0,
a.jsx)("h2", {
className: "text-[28px] md:text-[36px] lg:text-[44px] font-bold tracking-[-0.03em] text-black text-center mb-8 md:mb-14 px-2",
children: "See what Ryze does inside your account"
}), (0,
a.jsxs)("div", {
className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6",
children: [(0,
a.jsxs)(i.P.div, {
initial: {
opacity: 0,
y: 30
},
whileInView: {
opacity: 1,
y: 0
},
viewport: {
once: !0
},
transition: {
delay: .1,
duration: .6
},
className: "relative aspect-[9/16.8] bg-white rounded-[3px] overflow-hidden border border-zinc-200/60 shadow-lg",
children: [(0,
a.jsx)(j.A, {
targetWidth: 550,
aspectRatio: 9 / 17,
children: (0,
a.jsx)(I, {})
}), (0,
a.jsx)("div", {
className: "absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent z-10"
}), (0,
a.jsx)("div", {
className: "absolute bottom-3 left-0 right-0 text-center z-20",
children: (0,
a.jsx)("span", {
className: "text-white text-[11px] font-semibold uppercase tracking-[0.12em]",
style: {
textShadow: "0 1px 8px rgba(0,0,0,0.5)"
},
children: "Creative analysis"
})
})]
}), (0,
a.jsxs)(i.P.div, {
initial: {
opacity: 0,
y: 30
},
whileInView: {
opacity: 1,
y: 0
},
viewport: {
once: !0
},
transition: {
delay: .2,
duration: .6
},
className: "relative aspect-[9/16.8] bg-white rounded-[3px] overflow-hidden border border-zinc-200/60 shadow-lg",
children: [(0,
a.jsx)(n.default, {
src: "/agency-pictures/hf*20260224_122136_16c374a9-58bd-440b-8e35-b85e55c7966d.jpeg",
alt: "Creative generation example",
fill: !0,
sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw",
className: "object-cover"
}), (0,
a.jsx)("div", {
className: "absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent z-10"
}), (0,
a.jsx)("div", {
className: "absolute bottom-3 left-0 right-0 text-center z-20",
children: (0,
a.jsx)("span", {
className: "text-white text-[11px] font-semibold uppercase tracking-[0.12em]",
style: {
textShadow: "0 1px 8px rgba(0,0,0,0.5)"
},
children: "Creative generation"
})
})]
}), (0,
a.jsxs)(i.P.div, {
initial: {
opacity: 0,
y: 30
},
whileInView: {
opacity: 1,
y: 0
},
viewport: {
once: !0
},
transition: {
delay: .3,
duration: .6
},
className: "relative aspect-[9/16.8] bg-white rounded-[3px] overflow-hidden border border-zinc-200/60 shadow-lg",
children: [(0,
a.jsx)(j.A, {
targetWidth: 550,
aspectRatio: 9 / 16,
children: (0,
a.jsx)(P, {})
}), (0,
a.jsx)("div", {
className: "absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent z-10"
}), (0,
a.jsx)("div", {
className: "absolute bottom-3 left-0 right-0 text-center z-20",
children: (0,
a.jsx)("span", {
className: "text-white text-[11px] font-semibold uppercase tracking-[0.12em]",
style: {
textShadow: "0 1px 8px rgba(0,0,0,0.5)"
},
children: "Account audit"
})
})]
}), (0,
a.jsx)("span", {
id: "slack-integration",
className: "absolute -top-24"
}), (0,
a.jsxs)(i.P.div, {
initial: {
opacity: 0,
y: 30
},
whileInView: {
opacity: 1,
y: 0
},
viewport: {
once: !0
},
transition: {
delay: .4,
duration: .6
},
className: "relative aspect-[9/16.8] bg-white rounded-[3px] overflow-hidden border border-zinc-200/60 shadow-lg hidden md:block",
children: [(0,
a.jsx)("video", {
autoPlay: !0,
loop: !0,
muted: !0,
playsInline: !0,
className: "absolute inset-0 w-full h-full object-cover",
src: "/videos/slack-demo.mp4"
}), (0,
a.jsx)("div", {
className: "absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent z-10"
}), (0,
a.jsx)("div", {
className: "absolute bottom-3 left-0 right-0 text-center z-20",
children: (0,
a.jsx)("span", {
className: "text-white text-[11px] font-semibold uppercase tracking-[0.12em]",
style: {
textShadow: "0 1px 8px rgba(0,0,0,0.5)"
},
children: "Slack/Teams integration"
})
})]
}), (0,
a.jsxs)(i.P.div, {
initial: {
opacity: 0,
y: 30
},
whileInView: {
opacity: 1,
y: 0
},
viewport: {
once: !0
},
transition: {
delay: .5,
duration: .6
},
className: "relative aspect-[9/16.8] bg-white rounded-[3px] overflow-hidden border border-zinc-200/60 shadow-lg hidden lg:block",
children: [(0,
a.jsx)(j.A, {
targetWidth: 550,
aspectRatio: 9 / 16,
children: (0,
a.jsx)(*, {})
}), (0,
a.jsx)("div", {
className: "absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent z-10"
}), (0,
a.jsx)("div", {
className: "absolute bottom-3 left-0 right-0 text-center z-20",
children: (0,
a.jsx)("span", {
className: "text-white text-[11px] font-semibold uppercase tracking-[0.12em]",
style: {
textShadow: "0 1px 8px rgba(0,0,0,0.5)"
},
children: "Keyword optimization"
})
})]
})]
})]
})
}), (0,
a.jsxs)("section", {
className: "py-20 md:py-28 relative overflow-hidden bg-[#FEFEF5]",
children: [(0,
a.jsx)("div", {
className: "absolute left-0 top-0 bottom-0 w-[45%] hidden lg:block",
children: (0,
a.jsx)(n.default, {
src: "/audit-screen-2-bigger-pixels.png",
alt: "",
fill: !0,
sizes: "(max-width: 768px) 100vw, 45vw",
className: "object-contain object-left scale-[1.3] origin-bottom-left"
})
}), (0,
a.jsx)("div", {
className: "pointer-events-none absolute inset-0 z-[1]",
style: {
background: "linear-gradient(to right, rgba(254,254,245,0) 0%, rgba(254,254,245,0.3) 25%, rgba(254,254,245,0.85) 42%, rgba(254,254,245,1) 55%)"
}
}), (0,
a.jsx)("div", {
className: "max-w-[1400px] mx-auto px-6 md:px-12 relative z-[2]",
children: (0,
a.jsxs)("div", {
className: "lg:ml-[45%] max-w-xl space-y-8 lg:-mt-[20px]",
children: [(0,
a.jsxs)("h2", {
className: "text-[28px] md:text-[36px] lg:text-[42px] font-bold tracking-[-0.03em] leading-tight text-black",
children: ["Get a free audit of your ads,", (0,
a.jsx)("br", {}), "SEO, website"]
}), (0,
a.jsx)("ul", {
className: "space-y-4",
children: ["Leave us your email", "We’ll send you a free audit in one hour"].map( (e, s) => (0,
a.jsxs)("li", {
className: "flex items-center gap-4 text-[16px] text-zinc-500",
children: [(0,
a.jsx)("span", {
className: "w-7 h-7 rounded-full border border-zinc-300 flex items-center justify-center text-[13px] font-semibold text-zinc-500 flex-shrink-0",
children: s + 1
}), e]
}, s))
}), (0,
a.jsxs)("form", {
onSubmit: T,
className: "flex items-center rounded-[3px] bg-white shadow-sm border border-zinc-200 h-[48px] sm:h-[52px] overflow-hidden transition-all focus-within:ring-2 focus-within:ring-[#FF4801]/20 focus-within:border-[#FF4801]/40",
children: [(0,
a.jsx)("input", {
type: "email",
required: !0,
placeholder: "name@company.com",
value: e,
onChange: e => s(e.target.value),
className: "flex-1 bg-transparent border-none outline-none px-4 sm:px-5 text-[15px] sm:text-[16px] text-zinc-900 placeholder:text-zinc-400 min-w-0 h-full"
}), (0,
a.jsx)("button", {
type: "submit",
disabled: t,
className: "bg-zinc-900 text-white h-full px-4 sm:px-7 shrink-0 font-medium whitespace-nowrap hover:bg-zinc-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 rounded-[3px] translate-x-[1.5px]",
children: t ? (0,
a.jsx)(r.A, {
className: "w-4 h-4 animate-spin"
}) : (0,
a.jsxs)(a.Fragment, {
children: [(0,
a.jsx)("span", {
className: "text-[14px] sm:text-[15px]",
children: "Get free audit"
}), " ", (0,
a.jsx)(f.A, {
className: "w-4 h-4 shrink-0"
})]
})
})]
})]
})
})]
}), (0,
a.jsx)("section", {
id: "mcp",
className: "relative w-full z-10 bg-gradient-to-b from-white to-zinc-50",
children: (0,
a.jsx)("div", {
className: "max-w-[1600px] mx-auto px-3 md:px-8 lg:px-12",
children: (0,
a.jsxs)("div", {
className: "grid grid-cols-1 lg:grid-cols-3",
children: [(0,
a.jsxs)("div", {
className: "relative lg:border-r border-zinc-200/60 px-4 md:px-8 py-6 md:py-10 flex flex-col gap-8 group hover:bg-white/50 transition-colors duration-500 items-center lg:items-start text-center lg:text-left",
children: [(0,
a.jsxs)("div", {
className: "space-y-8",
children: [(0,
a.jsxs)("h3", {
className: "text-[28px] md:text-[32px] lg:text-[36px] font-bold tracking-[-0.02em] text-black leading-tight",
children: ["Autonomous", (0,
a.jsx)("br", {}), "PPC optimization"]
}), (0,
a.jsxs)("ul", {
className: "space-y-4 mt-4 text-left",
children: [(0,
a.jsxs)("li", {
className: "flex items-start gap-3 text-[15px] text-zinc-700",
children: [(0,
a.jsx)("div", {
className: "mt-2 w-1.5 h-1.5 bg-black flex-shrink-0 rounded-full"
}), (0,
a.jsx)("span", {
children: "24/7 performance audits"
})]
}), (0,
a.jsxs)("li", {
className: "flex items-start gap-3 text-[15px] text-zinc-700",
children: [(0,
a.jsx)("div", {
className: "mt-2 w-1.5 h-1.5 bg-black flex-shrink-0 rounded-full"
}), (0,
a.jsx)("span", {
children: "AI creative generation"
})]
})]
})]
}), (0,
a.jsx)("div", {
className: "relative w-full overflow-hidden rounded-[3px] bg-blue-50/50 border border-zinc-200/40 shadow-[0_1px_2px_0_rgba(0,0,0,0.025)]",
children: (0,
a.jsx)(z, {})
}), (0,
a.jsx)("div", {
className: "flex items-center gap-4 -mt-4 flex-wrap",
children: [{
src: "/images/platforms/google-ads.png",
alt: "Google Ads"
}, {
src: "/images/platforms/meta.png",
alt: "Meta Ads"
}, {
src: "/images/platforms/microsoft.png",
alt: "Microsoft Ads"
}, {
src: "/images/platforms/tiktok.png",
alt: "TikTok"
}, {
src: "/images/platforms/linkedin.png",
alt: "LinkedIn"
}].map(e => {
let {src: s, alt: t} = e;
return (0,
a.jsx)("div", {
className: "h-6 w-10 relative",
children: (0,
a.jsx)(n.default, {
src: s,
alt: t,
fill: !0,
sizes: "40px",
className: "object-contain"
})
}, t)
}
)
})]
}), (0,
a.jsxs)("div", {
className: "relative lg:border-r border-zinc-200/60 px-4 md:px-8 py-6 md:py-10 flex flex-col gap-8 group hover:bg-white/50 transition-colors duration-500 items-center lg:items-start text-center lg:text-left",
children: [(0,
a.jsxs)("div", {
className: "space-y-8",
children: [(0,
a.jsxs)("h3", {
className: "text-[28px] md:text-[32px] lg:text-[36px] font-bold tracking-[-0.02em] text-black leading-tight",
children: ["Autonomous", (0,
a.jsx)("br", {}), "SEO agent"]
}), (0,
a.jsxs)("ul", {
className: "space-y-4 mt-4 text-left",
children: [(0,
a.jsxs)("li", {
className: "flex items-start gap-3 text-[15px] text-zinc-700",
children: [(0,
a.jsx)("div", {
className: "mt-2 w-1.5 h-1.5 bg-black flex-shrink-0 rounded-full"
}), (0,
a.jsx)("span", {
children: "Technical SEO audits on autopilot"
})]
}), (0,
a.jsxs)("li", {
className: "flex items-start gap-3 text-[15px] text-zinc-700",
children: [(0,
a.jsx)("div", {
className: "mt-2 w-1.5 h-1.5 bg-black flex-shrink-0 rounded-full"
}), (0,
a.jsx)("span", {
children: "AI-powered content optimization"
})]
})]
})]
}), (0,
a.jsx)("div", {
className: "relative h-fit w-full max-w-fit overflow-hidden rounded-[3px] bg-blue-50/50 border border-zinc-200/40 shadow-[0_1px_2px_0_rgba(0,0,0,0.025)] flex items-center justify-center",
children: (0,
a.jsx)(S, {})
}), (0,
a.jsx)("div", {
className: "flex items-center gap-4 -mt-4 flex-wrap",
children: [{
src: "/icons/google-analytics.png",
alt: "Google Search Console"
}, {
src: "/images/platforms/perplexity.png",
alt: "Perplexity"
}, {
src: "/images/platforms/chatgpt.png",
alt: "ChatGPT"
}, {
src: "/images/platforms/shopify.png",
alt: "Shopify"
}].map(e => {
let {src: s, alt: t} = e;
return (0,
a.jsx)("div", {
className: "h-6 w-10 relative",
children: (0,
a.jsx)(n.default, {
src: s,
alt: t,
fill: !0,
sizes: "40px",
className: "object-contain"
})
}, t)
}
)
})]
}), (0,
a.jsxs)("div", {
className: "relative px-4 md:px-8 py-6 md:py-10 flex flex-col gap-8 group hover:bg-white/50 transition-colors duration-500 items-center lg:items-start text-center lg:text-left",
children: [(0,
a.jsxs)("div", {
className: "space-y-8",
children: [(0,
a.jsxs)("h3", {
className: "text-[28px] md:text-[32px] lg:text-[36px] font-bold tracking-[-0.02em] text-black leading-tight",
children: ["Autonomous", (0,
a.jsx)("br", {}), "website builder"]
}), (0,
a.jsxs)("ul", {
className: "space-y-4 mt-4 text-left",
children: [(0,
a.jsxs)("li", {
className: "flex items-start gap-3 text-[15px] text-zinc-700",
children: [(0,
a.jsx)("div", {
className: "mt-2 w-1.5 h-1.5 bg-black flex-shrink-0 rounded-full"
}), (0,
a.jsx)("span", {
children: "AI generates pages from your brand"
})]
}), (0,
a.jsxs)("li", {
className: "flex items-start gap-3 text-[15px] text-zinc-700",
children: [(0,
a.jsx)("div", {
className: "mt-2 w-1.5 h-1.5 bg-black flex-shrink-0 rounded-full"
}), (0,
a.jsx)("span", {
children: "A/B tests layouts automatically"
})]
})]
})]
}), (0,
a.jsx)("div", {
className: "relative h-fit w-full overflow-hidden rounded-[3px] bg-blue-50/50 border border-zinc-200/40 shadow-[0_1px_2px_0_rgba(0,0,0,0.025)]",
children: (0,
a.jsx)(R, {})
}), (0,
a.jsx)("div", {
className: "flex items-center gap-4 -mt-4 flex-wrap",
children: [{
src: "/images/platforms/shopify.png",
alt: "Shopify"
}, {
src: "/icons/google-analytics.png",
alt: "Analytics"
}, {
src: "/images/platforms/meta.png",
alt: "Meta Pixel"
}].map(e => {
let {src: s, alt: t} = e;
return (0,
a.jsx)("div", {
className: "h-6 w-10 relative",
children: (0,
a.jsx)(n.default, {
src: s,
alt: t,
fill: !0,
sizes: "40px",
className: "object-contain"
})
}, t)
}
)
})]
})]
})
})
}), (0,
a.jsx)("section", {
className: "py-20 md:py-28 bg-white",
children: (0,
a.jsxs)("div", {
className: "max-w-[1470px] mx-auto px-6 md:px-12",
children: [(0,
a.jsx)(i.P.div, {
initial: {
opacity: 0,
y: 20
},
whileInView: {
opacity: 1,
y: 0
},
viewport: {
once: !0
},
className: "text-center mb-[41px]",
children: (0,
a.jsx)("h2", {
className: "text-[28px] md:text-[36px] lg:text-[48px] font-bold tracking-[-0.03em] text-black",
children: "Why Ryze outperforms"
})
}), (0,
a.jsxs)("div", {
className: "grid grid-cols-1 md:grid-cols-12 gap-2 mb-2",
children: [(0,
a.jsx)(i.P.div, {
initial: {
opacity: 0,
y: 20
},
whileInView: {
opacity: 1,
y: 0
},
viewport: {
once: !0
},
className: "md:col-span-6 rounded-[3px] py-[26px] px-6 border border-zinc-200/60 bg-white hover:border-zinc-300 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500",
children: (0,
a.jsxs)("div", {
className: "flex items-center gap-5",
children: [(0,
a.jsx)("span", {
className: "text-[36px] md:text-[49px] font-bold bg-gradient-to-b from-zinc-200 to-zinc-300/50 bg-clip-text text-transparent leading-none shrink-0",
children: "01"
}), (0,
a.jsx)("div", {
className: "w-px self-stretch bg-zinc-200/80"
}), (0,
a.jsxs)("div", {
className: "flex-1",
children: [(0,
a.jsx)("h3", {
className: "text-[18px] md:text-[21px] font-semibold text-black mb-0",
children: "Built on insider platform knowledge"
}), (0,
a.jsxs)("div", {
className: "flex flex-col gap-1.5",
children: [(0,
a.jsxs)("div", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)("span", {
className: "w-1.5 h-1.5 rounded-[1px] bg-emerald-400 shrink-0"
}), (0,
a.jsx)("span", {
className: "text-[15px] text-zinc-500",
children: "We work with ex-Google and Meta Ads engineers"
})]
}), (0,
a.jsxs)("div", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)("span", {
className: "w-1.5 h-1.5 rounded-[1px] bg-violet-400 shrink-0"
}), (0,
a.jsx)("span", {
className: "text-[15px] text-zinc-500",
children: "Our AI knows exactly how the algorithms work"
})]
})]
})]
}), (0,
a.jsxs)("div", {
className: "shrink-0 flex flex-col gap-3 -ml-[15px]",
children: [(0,
a.jsx)("div", {
className: "h-7 w-7 relative",
children: (0,
a.jsx)(n.default, {
src: "/images/platforms/google-ads.png",
alt: "Google Ads",
fill: !0,
sizes: "28px",
className: "object-contain"
})
}), (0,
a.jsx)("div", {
className: "h-[29px] w-[29px] relative",
children: (0,
a.jsx)(n.default, {
src: "/images/platforms/meta.png",
alt: "Meta",
fill: !0,
sizes: "29px",
className: "object-contain"
})
})]
})]
})
}), (0,
a.jsx)(i.P.div, {
initial: {
opacity: 0,
y: 20
},
whileInView: {
opacity: 1,
y: 0
},
viewport: {
once: !0
},
transition: {
delay: .1
},
className: "md:col-span-6 rounded-[3px] py-[26px] px-6 border border-zinc-200/60 bg-white hover:border-zinc-300 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500",
children: (0,
a.jsxs)("div", {
className: "flex items-center gap-4",
children: [(0,
a.jsx)("span", {
className: "text-[36px] md:text-[49px] font-bold bg-gradient-to-b from-zinc-200 to-zinc-300/50 bg-clip-text text-transparent leading-none shrink-0",
children: "02"
}), (0,
a.jsx)("div", {
className: "w-px self-stretch bg-zinc-200/80"
}), (0,
a.jsxs)("div", {
children: [(0,
a.jsx)("h3", {
className: "text-[18px] md:text-[21px] font-semibold text-black mb-0",
children: "Fine-tuned our own model"
}), (0,
a.jsxs)("div", {
className: "flex flex-col gap-1.5",
children: [(0,
a.jsxs)("div", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)("span", {
className: "w-1.5 h-1.5 rounded-[1px] bg-amber-400 shrink-0"
}), (0,
a.jsx)("span", {
className: "text-[15px] text-zinc-500",
children: "6+ months training to outperform ChatGPT & Claude"
})]
}), (0,
a.jsxs)("div", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)("span", {
className: "w-1.5 h-1.5 rounded-[1px] bg-rose-400 shrink-0"
}), (0,
a.jsx)("span", {
className: "text-[15px] text-zinc-500",
children: "Purpose-built for marketing tasks"
})]
})]
})]
})]
})
})]
}), (0,
a.jsxs)("div", {
className: "grid grid-cols-1 md:grid-cols-12 gap-2",
children: [(0,
a.jsx)(i.P.div, {
initial: {
opacity: 0,
y: 20
},
whileInView: {
opacity: 1,
y: 0
},
viewport: {
once: !0
},
transition: {
delay: .15
},
className: "md:col-span-5 rounded-[3px] py-[26px] px-6 border border-zinc-200/60 bg-white hover:border-zinc-300 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500",
children: (0,
a.jsxs)("div", {
className: "flex items-center gap-4",
children: [(0,
a.jsx)("span", {
className: "text-[36px] md:text-[49px] font-bold bg-gradient-to-b from-zinc-200 to-zinc-300/50 bg-clip-text text-transparent leading-none shrink-0",
children: "03"
}), (0,
a.jsx)("div", {
className: "w-px self-stretch bg-zinc-200/80"
}), (0,
a.jsxs)("div", {
children: [(0,
a.jsx)("h3", {
className: "text-[18px] md:text-[21px] font-semibold text-black mb-0",
children: "Real-time optimization"
}), (0,
a.jsxs)("div", {
className: "flex flex-col gap-1.5",
children: [(0,
a.jsxs)("div", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)("span", {
className: "w-1.5 h-1.5 rounded-[1px] bg-sky-400 shrink-0"
}), (0,
a.jsx)("span", {
className: "text-[15px] text-zinc-500",
children: "Monitors campaigns 24/7, adjusts automatically"
})]
}), (0,
a.jsxs)("div", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)("span", {
className: "w-1.5 h-1.5 rounded-[1px] bg-fuchsia-400 shrink-0"
}), (0,
a.jsx)("span", {
className: "text-[15px] text-zinc-500",
children: "No waiting for weekly reviews"
})]
})]
})]
})]
})
}), (0,
a.jsx)(i.P.div, {
initial: {
opacity: 0,
y: 20
},
whileInView: {
opacity: 1,
y: 0
},
viewport: {
once: !0
},
transition: {
delay: .2
},
className: "md:col-span-7 rounded-[3px] py-[26px] px-6 border border-zinc-200/60 bg-white hover:border-zinc-300 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-500",
children: (0,
a.jsxs)("div", {
className: "flex items-center gap-5",
children: [(0,
a.jsx)("span", {
className: "text-[36px] md:text-[49px] font-bold bg-gradient-to-b from-zinc-200 to-zinc-300/50 bg-clip-text text-transparent leading-none shrink-0",
children: "04"
}), (0,
a.jsx)("div", {
className: "w-px self-stretch bg-zinc-200/80"
}), (0,
a.jsxs)("div", {
className: "flex-1",
children: [(0,
a.jsx)("h3", {
className: "text-[18px] md:text-[21px] font-semibold text-black mb-0",
children: "Works across every platform"
}), (0,
a.jsxs)("div", {
className: "flex flex-col gap-1.5",
children: [(0,
a.jsxs)("div", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)("span", {
className: "w-1.5 h-1.5 rounded-[1px] bg-orange-400 shrink-0"
}), (0,
a.jsx)("span", {
className: "text-[15px] text-zinc-500",
children: "Google, Meta, TikTok, LinkedIn, Microsoft Ads — one place"
})]
}), (0,
a.jsxs)("div", {
className: "flex items-center gap-2",
children: [(0,
a.jsx)("span", {
className: "w-1.5 h-1.5 rounded-[1px] bg-cyan-400 shrink-0"
}), (0,
a.jsx)("span", {
className: "text-[15px] text-zinc-500",
children: "One AI that speaks every ad platform's language"
})]
})]
})]
}), (0,
a.jsx)("div", {
className: "shrink-0 hidden md:grid grid-cols-3 gap-x-6 gap-y-3.5",
children: [{
src: "/images/platforms/google-ads.png",
alt: "Google Ads"
}, {
src: "/images/platforms/meta.png",
alt: "Meta"
}, {
src: "/images/platforms/tiktok.png",
alt: "TikTok"
}, {
src: "/images/platforms/linkedin.png",
alt: "LinkedIn"
}, {
src: "/images/platforms/microsoft.png",
alt: "Microsoft"
}, {
src: "/images/platforms/shopify.png",
alt: "Shopify"
}].map(e => {
let {src: s, alt: t} = e;
return (0,
a.jsx)("div", {
className: "h-7 w-7 relative",
children: (0,
a.jsx)(n.default, {
src: s,
alt: t,
fill: !0,
sizes: "28px",
className: "object-contain"
})
}, t)
}
)
})]
})
})]
})]
})
}), (0,
a.jsx)(C, {}), (0,
a.jsxs)("section", {
id: "agency",
className: "py-10 md:py-12 lg:py-14 text-black relative overflow-hidden",
children: [(0,
a.jsxs)("div", {
className: "absolute inset-0 overflow-hidden",
children: [(0,
a.jsx)(n.default, {
src: "/agency-screen-6.png",
alt: "",
fill: !0,
sizes: "100vw",
className: "object-cover object-top"
}), (0,
a.jsx)("div", {
className: "absolute inset-0",
style: {
background: "linear-gradient(135deg, rgba(20,60,140,0.45) 0%, rgba(30,90,180,0.25) 40%, transparent 70%)"
}
})]
}), (0,
a.jsx)("div", {
className: "max-w-[1400px] mx-auto w-full pl-6 md:pl-12 lg:pl-12 pr-0 relative z-10",
children: (0,
a.jsxs)("div", {
className: "flex flex-col lg:flex-row items-start gap-8 lg:gap-10",
children: [(0,
a.jsxs)("div", {
className: "flex-shrink-0 max-w-md lg:max-w-[420px] pt-0 lg:pt-1 max-lg:pr-6",
children: [(0,
a.jsx)(i.P.span, {
className: "text-[16px] font-bold uppercase tracking-[0.15em] text-white bg-white/15 px-4 py-1.5 rounded-[3px] inline-block border border-white/25 mb-5",
initial: {
opacity: 0,
x: -60
},
whileInView: {
opacity: 1,
x: 0
},
viewport: {
once: !0,
margin: "-100px"
},
transition: {
duration: .8,
delay: .3,
ease: [.16, 1, .3, 1]
},
children: "For Agencies"
}), (0,
a.jsxs)(i.P.h2, {
className: "text-[28px] md:text-[36px] lg:text-[42px] font-extrabold tracking-[-0.03em] leading-tight mb-4 text-white",
initial: {
opacity: 0,
y: 40
},
whileInView: {
opacity: 1,
y: 0
},
viewport: {
once: !0,
amount: .5
},
transition: {
duration: .8,
delay: .2,
ease: [.16, 1, .3, 1]
},
children: ["Manage ", (0,
a.jsx)("span", {
className: "text-white/80",
children: "100s"
}), " of accounts with AI agents"]
}), (0,
a.jsx)("ul", {
className: "space-y-3 mb-6",
children: ["Bulk audits across all client accounts in minutes", "AI-generated reports sent to clients on autopilot", "White-label ready — your brand, our AI"].map( (e, s) => (0,
a.jsxs)("li", {
className: "flex items-start gap-3 text-[15px] md:text-[18px] text-white/90",
children: [(0,
a.jsx)("span", {
className: "w-1.5 h-1.5 bg-white flex-shrink-0 mt-1.5"
}), e]
}, s))
}), (0,
a.jsx)("div", {
className: "flex items-center gap-3 mt-4",
children: [{
src: "/images/platforms/google-ads-black.png",
alt: "Google Ads"
}, {
src: "/images/platforms/meta.png",
alt: "Meta Ads"
}, {
src: "/images/platforms/tiktok.png",
alt: "TikTok"
}, {
src: "/linkedin-logo.png",
alt: "LinkedIn"
}, {
src: "/images/platforms/microsoft.png",
alt: "Microsoft Ads"
}, {
src: "/images/shopify-new.png",
alt: "Shopify"
}].map(e => {
let {src: s, alt: t} = e;
return (0,
a.jsx)("div", {
className: "h-7 w-11 relative",
children: (0,
a.jsx)(n.default, {
src: s,
alt: t,
fill: !0,
sizes: "44px",
className: "object-contain brightness-0 invert"
})
}, t)
}
)
})]
}), (0,
a.jsx)("div", {
className: "w-full min-w-0 max-w-full max-lg:max-w-[100vw] lg:flex-1 relative -mb-24 lg:-mb-32 lg:w-[calc(100%+(100vw-100%)/2)] lg:max-w-[100vw] lg:-mr-[calc((100vw-100%)/2)]",
children: (0,
a.jsx)("div", {
className: "backdrop-blur-md w-full max-w-full min-w-0 rounded-l-[3px] rounded-r-none border border-white/40 border-r-0 pt-3 pl-3 pr-0 pb-3 shadow-lg",
style: {
background: "rgba(255,255,255,0.25)"
},
children: (0,
a.jsx)(k, {})
})
})]
})
})]
}), (0,
a.jsx)("section", {
id: "faq",
className: "scroll-mt-24 md:scroll-mt-28 py-24 bg-white",
children: (0,
a.jsxs)("div", {
className: "max-w-[800px] mx-auto px-6 md:px-12",
children: [(0,
a.jsx)("h2", {
className: "text-[28px] md:text-[34px] lg:text-[40px] font-bold tracking-[-0.03em] text-black text-center mb-8 md:mb-14",
children: "Frequently asked questions"
}), (0,
a.jsx)("div", {
className: "divide-y divide-zinc-200",
children: [{
q: "What does Ryze AI do?",
a: "Ryze provides autonomous AI agents for three core areas: paid ads optimization (Google, Meta, TikTok, LinkedIn), SEO automation (technical audits, content optimization, rank tracking), and an AI website builder that generates high-converting landing pages."
}, {
q: "How does the AI manage my ad accounts?",
a: "Ryze connects to your ad platforms via API. AI agents continuously audit performance, identify wasted spend, optimize bids and budgets, generate creatives, and can apply changes with one click — all 24/7."
}, {
q: "What does the SEO agent do?",
a: "The SEO agent runs continuous technical audits, fixes broken links, optimizes title tags and meta descriptions, adds schema markup, monitors Core Web Vitals, and tracks your rankings — all automatically."
}, {
q: "Can AI really build landing pages?",
a: "Yes. The website builder generates pages from your brand guidelines, A/B tests layouts automatically, and optimizes for conversions. Pages are built to work seamlessly with your ad campaigns and SEO strategy."
}, {
q: "Can I use Ryze for my agency clients?",
a: "Absolutely. Ryze is built for agencies. Manage hundreds of client accounts from one dashboard, with AI agents running ads, SEO, and website optimizations across all of them simultaneously."
}, {
q: "What platforms do you support?",
a: "For ads: Google Ads, Meta Ads, Microsoft Ads, TikTok, LinkedIn. For SEO: Google Search Console, Analytics, Perplexity, ChatGPT search. For websites: Shopify, custom domains, and more. Plus Slack/Teams for reporting."
}, {
q: "How quickly will I see results?",
a: "Most users see actionable insights within minutes of connecting their accounts. AI agents identify optimization opportunities across ads, SEO, and your website immediately."
}].map( (e, s) => (0,
a.jsx)(E, {
question: e.q,
answer: e.a
}, s))
})]
})
})]
})]
})
}
}
,
42319: (e, s, t) => {
"use strict";
t.d(s, {
N: () => o
});
var a = t(12115)
, l = t(26701)
, i = t(81328)
, n = t(23155)
, r = t(71649);
let c = new i.HF;
function o() {
let[e,s] = (0,
a.useState)(null)
, [t,o] = (0,
a.useState)(!0)
, [d,x] = (0,
a.useState)(null)
, [m,p] = (0,
a.useState)(!1)
, [h,g] = (0,
a.useState)(!1);
(0,
a.useEffect)( () => {
let e = !0;
return (async () => {
if (document.cookie.split(";").find(e => e.trim().startsWith("ryze_logout="))) {
console.log("\uD83D\uDD10 Cross-app logout detected"),
e && g(!0),
await (0,
i.CI)(l.j);
let t = "localhost" !== window.location.hostname;
return document.cookie = "ryze_logout=; path=/; max-age=0".concat(t ? "; domain=.get-ryze.ai" : ""),
e && (s(null),
g(!1),
p(!0),
o(!1)),
console.log("✅ Signed out from landing page")
}
return e && (p(!0),
o(!1))
}
)(),
() => {
e = !1
}
}
, []);
let b = async () => {
if (!e || !l.j.currentUser)
return null;
try {
return await l.j.currentUser.getIdToken()
} catch (e) {
return console.error("❌ Error getting ID token:", e),
null
}
}
;
return {
user: e,
loading: t,
error: d,
isInitialized: m,
isAuthenticated: !!e,
isLoggingOut: h,
loginWithGoogle: async function() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/home";
o(!0),
x(null);
try {
console.log("\uD83D\uDD10 Initiating Google Sign-In...");
let s = await (0,
i.df)(l.j, c);
if (!s.user)
throw Error("No user returned from Google Sign-In");
console.log("✅ Sign-in successful:", s.user.email);
let t = await (0,
r.vD)();
if (!t)
throw Error("Firebase auth state not ready after sign-in");
let a = await t.getIdToken();
console.log("\uD83D\uDD04 Generating cross-app token..."),
await (0,
n.j)(a, e)
} catch (e) {
throw console.error("❌ Login failed:", e),
x(e.message || "Failed to login. Please try again."),
o(!1),
e
}
},
logout: async () => {
o(!0),
x(null);
try {
console.log("\uD83D\uDC4B Signing out..."),
await (0,
i.CI)(l.j),
s(null),
console.log("✅ Signed out successfully")
} catch (e) {
console.error("❌ Logout failed:", e),
x(e.message)
} finally {
o(!1)
}
}
,
getIdToken: b
}
}
c.setCustomParameters({
prompt: "consent"
})
}
,
91907: (e, s, t) => {
"use strict";
t.d(s, {
A: () => i
});
var a = t(95155)
, l = t(12115);
let i = e => {
let {children: s, targetWidth: t=576, aspectRatio: i=9 / 16} = e
, n = (0,
l.useRef)(null)
, [r,c] = (0,
l.useState)(1);
return (0,
l.useEffect)( () => {
let e = () => {
if (n.current) {
let {width: e} = n.current.getBoundingClientRect();
c(e / t)
}
}
;
e();
let s = new ResizeObserver(e);
return n.current && s.observe(n.current),
window.addEventListener("resize", e),
() => {
s.disconnect(),
window.removeEventListener("resize", e)
}
}
, [t]),
(0,
a.jsx)("div", {
ref: n,
className: "w-full h-full overflow-hidden",
children: (0,
a.jsx)("div", {
style: {
transform: "scale(".concat(r, ")"),
transformOrigin: "top left",
width: "".concat(t, "px"),
height: "".concat(t / i, "px")
},
children: s
})
})
}
}
,
92481: (e, s, t) => {
Promise.resolve().then(t.bind(t, 20431))
}
}, e => {
e.O(0, [19135, 159, 89933, 15376, 39776, 95125, 15239, 89545, 77730, 57171, 67683, 71649, 78847, 28441, 31255, 77358], () => e(e.s = 92481)),
\_N_E = e.O()
}
]);
