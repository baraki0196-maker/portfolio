const intro=document.getElementById("intro");

function enterPortfolio(){
  intro.classList.add("hide");
  document.body.classList.remove("intro-lock");
}

document.getElementById("enterBtn").addEventListener("click",enterPortfolio);
intro.addEventListener("click",enterPortfolio);

function fit(){
  const el=document.getElementById("scale");

  if(innerWidth<=1024){
    el.style.transform="none";
    el.style.marginLeft="0";
    document.body.style.height="auto";
    return;
  }

  const s=Math.min(1,innerWidth/1440);
  el.style.transform=`scale(${s})`;
  el.style.transformOrigin="top left";
  document.body.style.height=(3040*s)+"px";
  el.style.marginLeft=s<1?"0":((innerWidth-1440)/2)+"px";
}
addEventListener("resize",fit);
fit();


// ===== CUSTOM CURSOR : BIG INVERT CIRCLE + NEON GLOW =====
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor-glow');
  if (!cursor || !window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;

  const hoverTargets = document.querySelectorAll(
    'a, button, .visual, .coding-video, .profile-wrap, .skill-grid > div, .services article, [role="button"]'
  );

  window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.opacity = '1';
  });

  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
  });

  document.documentElement.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursor.classList.remove('is-hover');
  });
});
