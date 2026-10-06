document.getElementById("year").textContent = new Date().getFullYear();

const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

