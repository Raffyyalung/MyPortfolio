VANTA.NET({
  el: "#divBg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x640628,
  backgroundColor: 0x0,
  points: 8.0,
  maxDistance: 19.0,
  spacing: 20.0,
});

// Get the elements for each content div
let homeContent = document.getElementById("home-content");
let aboutContent = document.getElementById("about-content");
let servicesContent = document.getElementById("services-content");
let projectContent = document.getElementById("project-content");
let contactContent = document.getElementById("contact-content");
let hireMeContent = document.getElementById("contact-content");
let letsTalkContent = document.getElementById("contact-content");

// Get the elements for each nav link
let homeLink = document.getElementById("home-link");
let aboutLink = document.getElementById("about-link");
let servicesLink = document.getElementById("services-link");
let projectLink = document.getElementById("project-link");
let contactLink = document.getElementById("contact-link");
let hireMeLink = document.getElementById("hireMe-link");
let letsTalkLink = document.getElementById("letsTalk-link");

// Hide all content divs
aboutContent.style.display = "none";
servicesContent.style.display = "none";
projectContent.style.display = "none";
contactContent.style.display = "none";

// Show home content by default
homeContent.style.display = "block";

// Add event listeners to the nav links
homeLink.addEventListener("click", function () {
  homeContent.style.display = "block";
  aboutContent.style.display = "none";
  servicesContent.style.display = "none";
  projectContent.style.display = "none";
  contactContent.style.display = "none";
});

aboutLink.addEventListener("click", function () {
  homeContent.style.display = "none";
  aboutContent.style.display = "block";
  servicesContent.style.display = "none";
  projectContent.style.display = "none";
  contactContent.style.display = "none";
});

servicesLink.addEventListener("click", function () {
  homeContent.style.display = "none";
  aboutContent.style.display = "none";
  servicesContent.style.display = "block";
  projectContent.style.display = "none";
  contactContent.style.display = "none";
});

projectLink.addEventListener("click", function () {
  homeContent.style.display = "none";
  aboutContent.style.display = "none";
  servicesContent.style.display = "none";
  projectContent.style.display = "block";
  contactContent.style.display = "none";
});

contactLink.addEventListener("click", function () {
  homeContent.style.display = "none";
  aboutContent.style.display = "none";
  servicesContent.style.display = "none";
  projectContent.style.display = "none";
  contactContent.style.display = "block";
});

hireMeLink.addEventListener("click", function () {
  homeContent.style.display = "none";
  aboutContent.style.display = "none";
  servicesContent.style.display = "none";
  projectContent.style.display = "none";
  contactContent.style.display = "none";
  hireMeContent.style.display = "block";
});

letsTalkLink.addEventListener("click", function () {
  homeContent.style.display = "none";
  aboutContent.style.display = "none";
  servicesContent.style.display = "none";
  projectContent.style.display = "none";
  contactContent.style.display = "none";
  hireMeContent.style.display = "none";
  letsTalkContent.style.display = "block";
});
