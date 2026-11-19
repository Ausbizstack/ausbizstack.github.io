// Shared renderer: used at build time (pre-render, SEO, no-JS) and in the browser (filter/sort).
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmtDate = (iso) => { const [y, m, d] = iso.split("-").map(Number); return `${d} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][m - 1]} ${y}`; };
const daysBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 864e5);
const isNew = (p, updated) => !p.launchCohort && daysBetween(p.added, updated) <= 14;
const hue = (s) => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) % 360; return h; };
const initials = (n) => n.split(/\s+/).filter((w) => /^[A-Za-z0-9]/.test(w)).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
const srcTag = (t) => (t === "anthropic" ? "Anthropic" : "Platform");

const primarySource = (p) => p.sources.find((s) => s.type === "platform") || p.sources[0];
const logoHTML = (p, size = "") => p.logo
  ? `<img class="logo${size}" src="./${esc(p.logo)}" alt="" width="40" height="40" loading="lazy" decoding="async">`
  : `<div class="logo${size}" aria-hidden="true" style="--h:${hue(p.name)}">${esc(initials(p.name))}</div>`;

function renderCard(p, updated) {
  const nw = isNew(p, updated), ps = primarySource(p);
  return `<li class="card reveal" id="${esc(p.id)}" data-id="${esc(p.id)}">
  <div class="c-head">
    ${logoHTML(p)}
    <div class="c-title"><h3><a href="#${esc(p.id)}">${esc(p.name)}</a></h3><p>${esc(p.summary)}</p></div>
  </div>
  <div class="badges"><span class="badge cat">${esc(p.category)}</span>${p.launchCohort ? '<span class="badge launch">Launch partner</span>' : ""}${nw ? '<span class="badge new">Recently added</span>' : ""}<span class="badge"><time datetime="${p.launchDate}">${fmtDate(p.launchDate)}</time></span></div>
  <p class="covers"><span class="lbl-sm">Covers</span>${esc(p.covers)}</p>
  <dl class="mini"><div><dt>Who can use</dt><dd>${esc(p.availability)}</dd></div><div><dt>If billing is refused</dt><dd>${esc(p.fallback)}</dd></div></dl>
  <div class="c-foot">
    <a class="primary-src" href="${esc(ps.url)}" rel="noopener" target="_blank"><span class="src-tag">${srcTag(ps.type)}</span><span>${esc(ps.label)}</span></a>
    <details class="more"><summary>Not covered &amp; all ${p.sources.length} sources</summary>
      <p><span class="lbl-sm">Not covered</span>${esc(p.notCovered)}</p>${p.platformPostDate && p.platformPostDate !== p.launchDate ? `<p class="muted">Platform post dated ${fmtDate(p.platformPostDate)}.</p>` : ""}
      <ul class="sources" aria-label="Sources for ${esc(p.name)}">${p.sources.map((s) => `<li><a href="${esc(s.url)}" rel="noopener" target="_blank"><span class="src-tag">${srcTag(s.type)}</span><span>${esc(s.label)}</span></a></li>`).join("")}</ul>
    </details>
    <div class="verified"><span>Last verified <time datetime="${p.lastVerified}">${fmtDate(p.lastVerified)}</time></span><button class="copy" type="button" data-copy="${esc(p.id)}" aria-label="Copy link to ${esc(p.name)}">Copy link</button></div>
  </div>
</li>`;
}

function renderRow(p, updated) {
  const primary = primarySource(p);
  return `<tr><th scope="row" style="position:static;background:none;text-transform:none;letter-spacing:0;font-size:14px;color:var(--fg)"><a href="#${esc(p.id)}">${esc(p.name)}</a>${isNew(p, updated) ? ' <span class="badge new">New</span>' : ""}</th><td>${esc(p.category)}</td><td>${esc(p.covers)}</td><td>${esc(p.availability)}</td><td>${esc(p.fallback)}</td><td><time datetime="${p.launchDate}">${fmtDate(p.launchDate)}</time></td><td><a href="${esc(primary.url)}" rel="noopener" target="_blank">${srcTag(primary.type)} source</a><br><span class="muted" style="font-size:12px">Verified ${fmtDate(p.lastVerified)}</span></td></tr>`;
}

/* global DATA, renderCard, renderRow, isNew */
(() => {
  const d = document, root = d.documentElement;
  root.classList.remove("no-js");
  // theme
  const tbtn = d.getElementById("theme");
  const cur = () => root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const setIcon = () => { tbtn.setAttribute("aria-label", cur() === "dark" ? "Switch to light mode" : "Switch to dark mode"); tbtn.innerHTML = cur() === "dark" ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'; };
  setIcon();
  tbtn.addEventListener("click", () => { const n = cur() === "dark" ? "light" : "dark"; root.dataset.theme = n; try { localStorage.setItem("theme", n); } catch (e) {} setIcon(); });

  // reveal
  const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" }) : null;
  const observe = (scope) => scope.querySelectorAll(".reveal:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
  observe(d);

  // directory
  const P = DATA.platforms, U = DATA.updated;
  const grid = d.getElementById("grid"), tbody = d.getElementById("tbody"), tableWrap = d.getElementById("tableWrap");
  const q = d.getElementById("q"), sortSel = d.getElementById("sort"), count = d.getElementById("count"), chips = d.getElementById("chips");
  const params = new URLSearchParams(location.search);
  const state = { q: params.get("q") || "", cat: params.get("cat") || "All", sort: params.get("sort") || "az", view: params.get("view") || "grid" };
  q.value = state.q; sortSel.value = state.sort;
  const hay = (p) => [p.name, p.category, p.summary, p.covers, p.notCovered, p.availability, p.fallback].join(" ").toLowerCase();
  const sorters = {
    az: (a, b) => a.name.localeCompare(b.name),
    newest: (a, b) => b.added.localeCompare(a.added) || b.launchDate.localeCompare(a.launchDate) || a.name.localeCompare(b.name),
    category: (a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name),
    verified: (a, b) => b.lastVerified.localeCompare(a.lastVerified) || a.name.localeCompare(b.name),
  };
  function syncURL() {
    const p = new URLSearchParams();
    if (state.q) p.set("q", state.q); if (state.cat !== "All") p.set("cat", state.cat);
    if (state.sort !== "az") p.set("sort", state.sort); if (state.view !== "grid") p.set("view", state.view);
    const s = p.toString(); history.replaceState(null, "", (s ? "?" + s : location.pathname) + location.hash);
  }
  function render() {
    const terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    const list = P.filter((p) => (state.cat === "All" || p.category === state.cat) && terms.every((t) => hay(p).includes(t))).sort(sorters[state.sort] || sorters.az);
    grid.innerHTML = list.length ? list.map((p) => renderCard(p, U)).join("") : `<li class="empty">No platforms match “${state.q.replace(/[<>&]/g, "")}”. <button class="copy" type="button" id="clear">Clear filters</button></li>`;
    tbody.innerHTML = list.map((p) => renderRow(p, U)).join("");
    grid.hidden = state.view !== "grid"; tableWrap.hidden = state.view !== "table";
    d.querySelectorAll("[data-view]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.view === state.view)));
    chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.cat === state.cat)));
    count.textContent = `${list.length} of ${P.length} platforms${state.cat !== "All" ? " in " + state.cat : ""}${state.q ? " matching “" + state.q + "”" : ""}`;
    grid.querySelectorAll(".card").forEach((c) => c.classList.add("in"));
    const clr = d.getElementById("clear"); if (clr) clr.onclick = () => { state.q = ""; state.cat = "All"; q.value = ""; syncURL(); render(); };
    syncURL();
  }
  let t; q.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => { state.q = q.value.trim(); render(); }, 80); });
  sortSel.addEventListener("change", () => { state.sort = sortSel.value; render(); });
  chips.addEventListener("click", (e) => { const c = e.target.closest(".chip"); if (!c) return; state.cat = c.dataset.cat; render(); });
  d.querySelectorAll("[data-view]").forEach((b) => b.addEventListener("click", () => { state.view = b.dataset.view; render(); }));
  d.addEventListener("keydown", (e) => {
    if (e.key === "/" && !/input|textarea|select/i.test(d.activeElement.tagName)) { e.preventDefault(); q.focus(); }
    if (e.key === "Escape" && d.activeElement === q) { q.value = ""; state.q = ""; render(); }
  });
  d.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-copy]"); if (!b) return;
    const url = location.origin + location.pathname + "#" + b.dataset.copy;
    try { await navigator.clipboard.writeText(url); b.textContent = "Copied"; } catch (_) { b.textContent = "Copy failed"; }
    setTimeout(() => (b.textContent = "Copy link"), 1600);
  });
  if (location.search) render(); // pre-rendered markup already matches the default view

  // eligibility checker (rules quoted from Anthropic's docs; see sources in the panel)
  const ck = d.getElementById("checker"), out = d.getElementById("verdict");
  const V = {
    yes: ["Yes — you can link", "Your Claude Platform (Console) organization pays Anthropic directly, so an Owner, Admin or Billing member can approve a link. Remember: your own ZDR, BAA, CMEK and IP-allowlist settings don't apply to linked requests."],
    role: ["Almost — ask an admin", "Your organization is eligible, but only a member with the Owner, Admin or Billing role can approve the link. Pass the request to one of them."],
    sub: ["No — subscriptions can't link", "Claude subscription plans (Pro, Max, Ultra, Team and Enterprise) can't be linked, and their monthly API credits can't pay for linked usage. You need a Claude Platform (Console) organization with prepaid credit or invoiced billing."],
    cloud: ["No — cloud-billed Claude can't link", "Claude through Bedrock, Vertex AI or Foundry, and Console organizations that pay through the AWS, Google Cloud or Azure marketplace, can't use linked billing."],
    hipaa: ["Not during the beta", "Anthropic says not to link customers who need HIPAA, FERPA or CMEK coverage, because linked requests run in the platform's organization."],
    promo: ["Maybe — check what pays", "Promotional, startup, VC and partner-program credits can't pay for linked usage. Add purchased credit or use invoiced billing, or requests may be refused with a 402."],
    pick: ["Answer the three questions", "We'll tell you whether your organization can link, using Anthropic's published rules."],
  };
  function check() {
    const f = new FormData(ck), how = f.get("how"), role = f.get("role"), need = f.get("need");
    let k = "pick", st = "";
    if (how === "sub") { k = "sub"; st = "no"; } else if (how === "cloud") { k = "cloud"; st = "no"; }
    else if (need === "yes") { k = "hipaa"; st = "no"; }
    else if (how === "promo") { k = "promo"; st = "maybe"; }
    else if (how === "direct" && role === "no") { k = "role"; st = "maybe"; }
    else if (how === "direct" && role === "yes" && need === "no") { k = "yes"; st = "yes"; }
    out.dataset.state = st; out.querySelector("h3").textContent = V[k][0]; out.querySelector("p").textContent = V[k][1];
  }
  ck.addEventListener("change", check);

  // mobile menu: close after choosing a section
  d.querySelectorAll(".menu nav a").forEach((a) => a.addEventListener("click", () => a.closest("details").removeAttribute("open")));
  d.addEventListener("keydown", (e) => { if (e.key === "Escape") d.querySelectorAll("details.menu[open]").forEach((m) => { m.removeAttribute("open"); m.querySelector("summary").focus(); }); });

  // waitlist. Preview mode (no endpoint configured) never sends anything.
  // Live mode posts JSON incl. the honeypot; the provider filters spam, so a real sign-up is never dropped client-side.
  const form = d.getElementById("waitlist"), msg = d.getElementById("form-msg");
  const email = form.querySelector("input[type=email]"), hp = form.querySelector(".hp input");
  const endpoint = form.dataset.endpoint || "";
  const live = /^https:\/\//.test(endpoint);
  email.name = "email"; hp.name = "_gotcha";
  const say = (cls, text) => { msg.className = "form-msg " + cls; msg.textContent = text; };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    say("", "");
    if (!email.value.trim() || !email.checkValidity()) { say("err", "Please enter a valid email address."); email.focus(); return; }
    if (!live) { say("preview", "Preview only: the waitlist isn't open yet, so nothing was sent or stored."); return; }
    const btn = form.querySelector("button[type=submit]"); btn.disabled = true; say("", "Sending…");
    try {
      const r = await fetch(endpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ email: email.value.trim(), _gotcha: hp.value, source: "claude-linked-billing-tracker" }) });
      if (!r.ok) throw new Error(String(r.status));
      say("ok", "You're on the list. We'll email you when Prospect Brief opens."); form.reset();
    } catch (err) { say("err", "That didn't go through. Please try again in a minute."); }
    finally { btn.disabled = false; }
  });
})();
