const intro = document.getElementById("intro");

function enterPortfolio() {
  intro.classList.add("hide");
  document.body.classList.remove("is-loading");
}

intro.addEventListener("click", enterPortfolio);
intro.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    enterPortfolio();
  }
});

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

window.addEventListener("mousemove", (e) => {
  if (!dot || !ring) return;
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  ring.animate(
    { left: e.clientX + "px", top: e.clientY + "px" },
    { duration: 120, fill: "forwards" }
  );
});

document.querySelectorAll(".project-card, .coding-links a").forEach((el) => {
  el.addEventListener("mouseenter", () => ring?.classList.add("active"));
  el.addEventListener("mouseleave", () => ring?.classList.remove("active"));
});
