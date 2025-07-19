document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Elementlarni olish
  const toggleThemeButton = document.getElementById("toggleTheme");
  const githubLogo = document.querySelector('img[alt="github logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');
  const profilePic = document.getElementById("profilePic");

  const portfolio = document.getElementById("portfolio");
  const portfolioBtn = document.getElementById("portfolio-btn");
  const skills = document.getElementById("skills");
  const skillsBtn = document.getElementById("skills-btn");

  // 🔹 Light & Dark Theme logolari
const lightLogos = {
  github: "github_light.png",
  linkedin: "linkedin_light.png",
  email: "email_light.png",
  theme: "theme_light.png",
  profile: "IMG_1194.PNG",
};

const darkLogos = {
  github: "github_dark.png",
  linkedin: "linkedin_dark.png",
  email: "email_dark.png",
  theme: "theme_dark.png",
  profile: "IMG_1170.PNG",
};


  // 🔹 Theme sozlash funksiyasi
  function setTheme(isDark) {
    githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
    linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
    emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
    toggleThemeButton.src = isDark ? darkLogos.theme : lightLogos.theme;
    profilePic.src = isDark ? darkLogos.profile : lightLogos.profile;
  }

  // 🔹 Theme toggle
  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);
    setTheme(isDark);
  });

  // 🔹 Sahifa ochilganda theme ni yuklash
  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);
    setTheme(isDark);
  };

  loadTheme();

  // 🔹 Portfolio / Skills tugmalarini boshqarish
  portfolioBtn.addEventListener("click", () => {
    skills.style.display = "none";
    portfolio.style.display = "flex";
    skillsBtn.classList.remove("active-btn");
    portfolioBtn.classList.add("active-btn");
  });

  skillsBtn.addEventListener("click", () => {
    skills.style.display = "flex";
    portfolio.style.display = "none";
    portfolioBtn.classList.remove("active-btn");
    skillsBtn.classList.add("active-btn");
  });
});
