import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from "./D6asGbjy.js";
import "piccolore";
import { $ as $$Image } from "./gYuI-Z6E.js";
const $$Astro = createAstro("https://oyvind-stromsvik.github.io");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { href, title, description, tags = [], type, status, cover } = Astro2.props;
  const badgeLabel = status ?? type;
  const badgeParam = status ? `status=${status}` : `type=${type}`;
  const badgeUrl = `/posts/?${badgeParam}`;
  return renderTemplate`${maybeRenderHead()}<div class="card card-link post-card"${addAttribute(type, "data-type")}${addAttribute(status, "data-status")}${addAttribute(tags.join(","), "data-tags")}> <a${addAttribute(href, "href")} class="link-reset" style="display:block; margin:-18px -18px 18px -18px; border-radius: var(--radius) var(--radius) 0 0; overflow:hidden;"> <div class="post-cover"${addAttribute(!cover ? "true" : void 0, "aria-hidden")}> ${cover ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": cover, "alt": `${title} cover`, "width": 800, "height": 450, "fit": "cover", "sizes": "(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw", "loading": "lazy", "decoding": "async", "style": "width:100%;height:100%;display:block" })}` : null} </div> </a> <div class="post-meta"> <div style="display:flex;gap:10px;align-items:baseline;justify-content:space-between"> <a${addAttribute(href, "href")} class="link-reset"><h3>${title}</h3></a> <a${addAttribute(badgeUrl, "href")} class="chip link-reset">${badgeLabel}</a> </div> <a${addAttribute(href, "href")} class="link-reset" style="display:block; margin-bottom:12px"> <p style="margin:0;">${description}</p> </a> ${tags.length ? renderTemplate`<div class="chips" aria-label="Tags"> ${tags.slice(0, 6).map((t) => renderTemplate`<a${addAttribute(`/posts/?tag=${t}`, "href")} class="chip link-reset">${t}</a>`)} </div>` : null} </div> </div>`;
}, "/home/runner/work/oyvind-stromsvik.github.io-src/oyvind-stromsvik.github.io-src/src/components/PostCard.astro", void 0);
export {
  $$PostCard as $
};
