window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrollY = window.scrollY;

  const socialMedia = document.querySelector(".card-social-media");
  if (scrollY === scrollable) {
    socialMedia.style.display = "none";
  } else {
    socialMedia.style.display = "";
  }
});
