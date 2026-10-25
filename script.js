// ========== EDIT ONLY THIS BLOCK (keep the quotes and commas) ==========
var DATA = {
  name: "Musa Khan",
  roles: ["Web Developer", "BS Computer Science Student", "Digital Marketing Learner", "Cyber Security Learner"],
  tagline: "4th semester student at Lasbela University of Agriculture, Water and Marine Sciences. I build responsive websites and I am learning cyber security.",
  photo: "profile.jpg",
  about: [
    "I am Musa Khan, a 4th semester BS Computer Science student at Lasbela University of Agriculture, Water and Marine Sciences.",
    "I build websites with HTML, CSS and JavaScript, and I understand the basic concepts of programming.",
    "I completed a Google Digital Marketing course and I am now studying a Cyber Security Professional course."
  ],
  stats: [{ n: 4, l: "Semester" }, { n: 3, l: "Projects" }, { n: 2, l: "Courses" }, { n: 6, l: "Tools" }],
  skills: [
    { n: "HTML", v: 85 }, { n: "CSS", v: 80 }, { n: "JavaScript", v: 65 },
    { n: "Responsive Design", v: 80 }, { n: "GitHub and Vercel", v: 65 },
    { n: "Digital Marketing", v: 60 }, { n: "Cyber Security (learning)", v: 35 }
  ],
  timeline: [
    { t: "BS Computer Science", p: "Lasbela University of Agriculture, Water and Marine Sciences", d: "Currently in 4th semester" },
    { t: "Google Digital Marketing Course", p: "Online course", d: "Completed" },
    { t: "Cyber Security Professional Course", p: "Online course", d: "In progress" }
  ],
  projects: [
    { t: "PaniWala Landing Page", x: "Responsive product launching page with Hero, Features, Pricing and Call-to-Action.", tags: ["HTML", "CSS", "JavaScript"], live: "https://web-exam-projects-1.vercel.app", code: "https://github.com/sangatweb-Developer/web-exam-projects-1", s: "Live" },
    { t: "Secure Login System", x: "Signup and login with validation. One email can create only one account.", tags: ["JavaScript", "localStorage"], live: "", code: "", s: "In progress" },
    { t: "Inventory Manager", x: "Add, edit, delete and search products.", tags: ["HTML", "CSS", "JavaScript"], live: "", code: "", s: "In progress" }
  ],
  services: [
    { i: "🌐", t: "Responsive Websites", x: "Clean websites that work on mobile, tablet and desktop." },
    { i: "🚀", t: "Landing Pages", x: "Product launch pages with hero, features, pricing and call-to-action." },
    { i: "📈", t: "Digital Marketing Basics", x: "Simple online marketing ideas from my Google Digital Marketing course." }
  ],
  email: "musamengalofficial@gmail.com",
  phone: "",
  github: "https://github.com/sangatweb-Developer",
  linkedin: ""
};
// ========== DO NOT EDIT BELOW THIS LINE ==========

var $ = function (id) { return document.getElementById(id); };
function el(tag, cls, txt) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt) e.textContent = txt;
  return e;
}
function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
}

// Basic text
document.title = DATA.name + " | Web Developer";
$("name").textContent = DATA.name;
$("tag").textContent = DATA.tagline;
$("ghBtn").href = DATA.github;
$("foot").textContent = "© " + new Date().getFullYear() + " " + DATA.name + ". All rights reserved.";
$("ini").textContent = DATA.name.split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase();
$("pic").onerror = function () { this.style.display = "none"; };
$("pic").src = DATA.photo;
DATA.about.forEach(function (t) { $("aboutBox").appendChild(el("p", "", t)); });

// Stats
DATA.stats.forEach(function (s) {
  var d = el("div", "stat");
  var b = el("b", "cnt", "0");
  b.dataset.n = s.n;
  d.appendChild(b); d.appendChild(el("span", "", s.l));
  $("stats").appendChild(d);
});

// Skills
DATA.skills.forEach(function (s) {
  var d = el("div", "sk");
  var top = el("div"); top.appendChild(el("span", "", s.n)); top.appendChild(el("span", "", s.v + "%"));
  var bar = el("div", "bar"); var f = el("div", "fill"); f.dataset.w = s.v; bar.appendChild(f);
  d.appendChild(top); d.appendChild(bar);
  $("skillBox").appendChild(d);
});

// Timeline
DATA.timeline.forEach(function (x) {
  var d = el("div", "ti");
  d.appendChild(el("h3", "", x.t)); d.appendChild(el("p", "", x.p)); d.appendChild(el("small", "", x.d));
  $("tl").appendChild(d);
});

// Projects
DATA.projects.forEach(function (p) {
  var d = el("div", "card");
  d.appendChild(el("span", "badge", p.s));
  d.appendChild(el("h3", "", p.t)); d.appendChild(el("p", "", p.x));
  p.tags.forEach(function (t) { d.appendChild(el("span", "chip", t)); });
  var row = el("div");
  [["Live demo", p.live], ["Source code", p.code]].forEach(function (l) {
    if (l[1]) { var a = el("a", "", l[0]); a.href = l[1]; a.target = "_blank"; a.rel = "noopener"; a.style.marginRight = "14px"; row.appendChild(a); }
  });
  d.appendChild(row);
  $("projBox").appendChild(d);
});

// Services
DATA.services.forEach(function (v) {
  var d = el("div", "card");
  d.appendChild(el("span", "ic", v.i)); d.appendChild(el("h3", "", v.t)); d.appendChild(el("p", "", v.x));
  $("svcBox").appendChild(d);
});

// Contact links
function addC(label, val, href) {
  if (!val) return;
  var p = el("p", "", label + ": ");
  var a = el("a", "", val); a.href = href; a.target = "_blank"; a.rel = "noopener";
  p.appendChild(a); $("contactBox").appendChild(p);
}
addC("Email", DATA.email, "mailto:" + DATA.email);
addC("Phone", DATA.phone, "tel:" + DATA.phone);
addC("GitHub", DATA.github, DATA.github);
addC("LinkedIn", DATA.linkedin, DATA.linkedin);

// Contact form: checks the fields, then opens the visitor's email app
$("form").onsubmit = function (e) {
  e.preventDefault();
  var n = $("fn").value.trim(), m = $("fe").value.trim(), t = $("fm").value.trim(), out = $("fmsg");
  if (!n || !m || !t) { out.textContent = "Please fill all fields."; out.style.color = "#d33"; return; }
  if (!/^\S+@\S+\.\S+$/.test(m)) { out.textContent = "Please enter a valid email."; out.style.color = "#d33"; return; }
  out.textContent = "Thank you! Your email app will open now."; out.style.color = "#1a9a4a";
  location.href = "mailto:" + DATA.email + "?subject=" + encodeURIComponent("Portfolio message from " + n) +
    "&body=" + encodeURIComponent(t + "\n\nFrom: " + n + " (" + m + ")");
  $("form").reset();
};

// Theme (saved in the browser)
function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  $("themeBtn").textContent = t === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
var saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("themeBtn").onclick = function () {
  setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
};

// Mobile menu
$("menuBtn").onclick = function () { $("menu").classList.toggle("open"); };
$("menu").onclick = function (e) { if (e.target.tagName === "A") $("menu").classList.remove("open"); };

// Typing effect
var ri = 0, ci = 0, del = false;
function type() {
  var w = DATA.roles[ri];
  $("typed").textContent = w.slice(0, ci);
  if (!del && ci < w.length) { ci++; setTimeout(type, 90); }
  else if (!del) { del = true; setTimeout(type, 1400); }
  else if (ci > 0) { ci--; setTimeout(type, 45); }
  else { del = false; ri = (ri + 1) % DATA.roles.length; setTimeout(type, 300); }
}
type();

// Scroll: progress bar, back-to-top button
window.addEventListener("scroll", function () {
  var h = document.documentElement;
  $("bar").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
  $("topBtn").style.display = h.scrollTop > 400 ? "block" : "none";
});
$("topBtn").onclick = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };

// Reveal on scroll, skill bars, counters
function count(b) {
  var end = +b.dataset.n, cur = 0;
  var id = setInterval(function () { cur++; b.textContent = cur; if (cur >= end) clearInterval(id); }, 250);
}
function reveal(node) {
  node.classList.add("in");
  [].forEach.call(node.querySelectorAll(".fill"), function (f) { f.style.width = f.dataset.w + "%"; });
}
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function (list) {
    list.forEach(function (x) { if (x.isIntersecting) { reveal(x.target); io.unobserve(x.target); } });
  }, { threshold: 0.15 });
  [].forEach.call(document.querySelectorAll(".rv"), function (n) { io.observe(n); });
  var io2 = new IntersectionObserver(function (list) {
    list.forEach(function (x) { if (x.isIntersecting) { count(x.target); io2.unobserve(x.target); } });
  });
  [].forEach.call(document.querySelectorAll(".cnt"), function (n) { io2.observe(n); });
} else {
  [].forEach.call(document.querySelectorAll(".rv"), reveal);
  [].forEach.call(document.querySelectorAll(".cnt"), function (b) { b.textContent = b.dataset.n; });
}

// Download CV: opens a clean CV page and the Save as PDF window
$("cvBtn").onclick = function () {
  var w = window.open("", "_blank");
  if (!w) { alert("Please allow pop-ups, then click again."); return; }
  var li = function (arr) { return arr.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""); };
  w.document.write("<!DOCTYPE html><html><head><meta charset='UTF-8'><title>" + esc(DATA.name) + " - CV</title>" +
    "<style>body{font-family:Arial,sans-serif;max-width:760px;margin:30px auto;padding:0 20px;color:#222;line-height:1.6}" +
    "h1{margin:0;color:#0b7285}h2{border-bottom:2px solid #0b7285;color:#0b7285;margin-top:22px}</style></head><body>" +
    "<h1>" + esc(DATA.name) + "</h1><p>" + esc(DATA.roles[0]) + " | " + esc(DATA.email) + (DATA.phone ? " | " + esc(DATA.phone) : "") + "</p>" +
    "<h2>Profile</h2><p>" + esc(DATA.about.join(" ")) + "</p>" +
    "<h2>Education and Courses</h2><ul>" + li(DATA.timeline.map(function (x) { return x.t + " - " + x.p + " (" + x.d + ")"; })) + "</ul>" +
    "<h2>Skills</h2><ul>" + li(DATA.skills.map(function (s) { return s.n; })) + "</ul>" +
    "<h2>Projects</h2><ul>" + li(DATA.projects.map(function (p) { return p.t + ": " + p.x; })) + "</ul>" +
    "<h2>Links</h2><p>" + esc(DATA.github) + "</p></body></html>");
  w.document.close();
  setTimeout(function () { w.print(); }, 500);
};