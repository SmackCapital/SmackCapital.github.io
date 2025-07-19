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
    github: "assets/github_light.png",
    linkedin: "assets/linkedin_light.png",
    email: "assets/email_light.png",
    theme: "assets/theme_light.png",
    profile: "assets/IMG_1194.PNG", // Yorug' tema rasmi
  };

  const darkLogos = {
    github: "assets/github_dark.png",
    linkedin: "assets/linkedin_dark.png",
    email: "assets/email_dark.png",
    theme: "assets/theme_dark.png",
    profile: "assets/IMG_1170.PNG", // Qorong'u tema rasmi
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
