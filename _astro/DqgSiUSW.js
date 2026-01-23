import { c as createComponent, m as maybeRenderHead, e as renderScript, a as renderTemplate, b as createAstro, v as renderHead, w as renderSlot, r as renderComponent, d as addAttribute } from "./D6asGbjy.js";
import "piccolore";
/* empty css         */
import "clsx";
const site = {
  name: "Øyvind Strømsvik",
  role: "Game developer",
  location: "Trondheim, Norway",
  bio: "Something something important.",
  avatarUrl: "https://avatars.githubusercontent.com/u/2248910?v=4",
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/@TwiiK" },
    { label: "Reddit", href: "https://www.reddit.com/user/-TwiiK-/" },
    { label: "Bluesky", href: "https://bsky.app/profile/oyvindstromsvik.bsky.social" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/oyvindstromsvik/" },
    { label: "GitHub", href: "https://github.com/oyvind-stromsvik" }
  ]
};
const $$CRTMode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="crt-overlay"> <div class="scanlines"></div> <!-- Vignette / Curve effect via CSS --> <button class="crt-badge" id="crt-badge">CRT MODE</button> </div> ${renderScript($$result, "/home/runner/work/oyvind-stromsvik.github.io-src/oyvind-stromsvik.github.io-src/src/components/CRTMode.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/runner/work/oyvind-stromsvik.github.io-src/oyvind-stromsvik.github.io-src/src/components/CRTMode.astro", void 0);
const $$Astro = createAstro("https://oyvind-stromsvik.github.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${description ? renderTemplate`<meta name="description"${addAttribute(description, "content")}>` : null}${renderHead()}</head> <body> <div id="grid-bg"></div> <div id="grid-warp"></div> <div class="topbar"> <div class="container topbar-inner"> <div class="brand"> <a href="/" class="link-reset"><span class="brand-logo"></span>${site.name}</a> </div> <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false"> <span></span> <span></span> <span></span> </button> <nav class="nav" aria-label="Primary"> <a href="/">Home</a> <a href="/about/">About</a> <a href="/posts/">Posts</a> </nav> </div> </div> <main> ${renderSlot($$result, $$slots["default"])} </main> <footer class="footer"> <div class="container">© ${(/* @__PURE__ */ new Date()).getFullYear()} — Built with Astro</div> </footer> ${renderComponent($$result, "CRTMode", $$CRTMode, {})} ${renderScript($$result, "/home/runner/work/oyvind-stromsvik.github.io-src/oyvind-stromsvik.github.io-src/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/runner/work/oyvind-stromsvik.github.io-src/oyvind-stromsvik.github.io-src/src/layouts/BaseLayout.astro", void 0);
export {
  $$BaseLayout as $,
  site as s
};
