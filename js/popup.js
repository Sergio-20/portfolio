//Control over section containers of each website project
let appsContainer = document.querySelectorAll("#apps .section");
let websiteContainer = document.querySelectorAll("#websites .section");

//Each specific app container
let billsApp = document.getElementById("bills-app");
let dragonGame = document.getElementById("dragon-game");
let ifitChallenge = document.getElementById("ifit-challenge");
let jpopRadio = document.getElementById("jpop-radio");

//Each specific website container
let expTriathlon = document.getElementById("experience-triathlon");
let marketingGenome = document.getElementById("marketing-genome");
let microAutomation = document.getElementById("microautomation");
let photoTheme = document.getElementById("photography-theme");
let smbillings = document.getElementById("smbillings");

//Reusable Project Modal Components
let projectModal = document.querySelector(".project-modal");
let pmDesc = document.querySelector(".pm-desc");
let pmFigcap = document.querySelector(".pm-figcap");
let pmFigure = document.querySelector(".pm-figure");
let pmGithub = document.querySelector(".pm-github");
let pmHeader = document.querySelector(".pm-header");
let pmImg = document.querySelector(".pm-img");
let pmViewProject = document.querySelector(".pm-view-project");

//Modify Project Modal Container
appsContainer.forEach((section) => {
  section.addEventListener("click", () => {
    //Show or Hide Project Modal
    projectModal.classList.remove("modal_none");
    projectModal.classList.add("modal_flex");
    pmImg.classList.add("img-fluid");
  });
});

websiteContainer.forEach((section) => {
  section.addEventListener("click", () => {
    //Show or Hide Project Modal
    projectModal.classList.remove("modal_none");
    projectModal.classList.add("modal_flex");
    pmImg.classList.add("img-fluid");
  });
});

//Website-specific Implementations
expTriathlon.addEventListener("click", () => {
  pmDesc.innerHTML = `<p>I helped Tara Gearhart of <a href="https://www.tmediaconsulting.com/about-us" target="_blank">T Media Consulting</a>
  with redesigning some webpages and CTAs for one of her clients, Experience Triathlon.</p>`;
  pmDesc.style.width = "100%";

  pmFigcap.innerText = "Experience Triathlon Education Page";
  pmGithub.style.display = "none";
  pmHeader.innerText = "Experience Triathlon";

  pmImg.alt = "Experience Triathlon";
  pmImg.src = "../img/experience-triathlon.png";

  pmViewProject.style.display = "revert";
  pmViewProject.href =
    "https://experiencetriathlon.com/etu-experience-triathlon-university/";
  pmViewProject.innerText = "View Online";
});

marketingGenome.addEventListener("click", () => {
  pmDesc.innerHTML = `<p>Marketing Genome needed their website to be migrated over from Hubspot to WordPress. 
  I along with Jonathan Sumner of <a href="https://www.khaoticdigital.com/" target="_blank">Khaotic Digital</a>, 
  helped with the migration.</p>`;
  pmDesc.style.width = "100%";

  pmFigcap.innerText = "Marketing Genome Homepage";
  pmGithub.style.display = "none";
  pmHeader.innerText = "Marketing Genome";

  pmImg.alt = "Marketng Genome Homepage";
  pmImg.src = "../img/marketing-genome.png";

  pmViewProject.style.display = "revert";
  pmViewProject.href = "https://microautomation.com/";
  pmViewProject.innerText = "View Online";
});

microAutomation.addEventListener("click", () => {
  pmDesc.innerHTML = `<p>I along with Jonathan Sumner of <a href="https://www.khaoticdigital.com/" target="_blank">Khaotic Digital</a> 
    helped to migrate Microautomation from Hubspot over to WordPress. The code was written in a modular way.</p>`;
  pmDesc.style.width = "100%";

  pmFigcap.innerText = "Microautomation Homepage";
  pmGithub.style.display = "none";
  pmHeader.innerText = "Microautomation";

  pmImg.alt = "Microautomation";
  pmImg.src = "../img/microautomation.png";

  pmViewProject.style.display = "revert";
  pmViewProject.href = "https://microautomation.com/";
  pmViewProject.innerText = "View Online";
});

photoTheme.addEventListener("click", () => {
  pmDesc.innerHTML = `<p>This is a pure HTML and CSS theme with some Javascript. It demonstrates my front-end development skills.</p>`;
  pmDesc.style.width = "100%";

  pmFigcap.innerText = "Photography Theme Above The Fold";
  pmGithub.style.display = "revert";
  pmGithub.href = "https://github.com/Sergio-20/photography-theme";
  pmGithub.innerText = "View Code";
  pmHeader.innerText = "Photography Theme";

  pmImg.alt = "Photography Theme";
  pmImg.src = "../img/photography-website.jpg";

  pmViewProject.style.display = "revert";
  pmViewProject.href = "https://sergio-20.github.io/photography-theme/";
  pmViewProject.innerText = "View Online";
});

smbillings.addEventListener("click", () => {
  pmDesc.innerHTML = `<p>I installed a WordPress theme for SmartMed Billing Solutions.</p>`;
  pmDesc.style.width = "100%";

  pmFigcap.innerText = "SmartMed Billing Solutions Homepage";
  pmGithub.style.display = "none";
  pmHeader.innerText = "SmartMed Billing Solutions";

  pmImg.alt = "SmartMed Billing Solutions Homepage";
  pmImg.src = "../img/smartmed-billing-solutions.png";

  pmViewProject.style.display = "revert";
  pmViewProject.href = "https://microautomation.com/";
  pmViewProject.innerText = "View Online";
});

//App-specific Implementations
billsApp.addEventListener("click", () => {
  pmDesc.innerHTML = `<p>A React app that allows you to add bills and see the amount that you need to pay for all of your bills.</p>`;
  pmDesc.style.width = "100%";

  pmFigcap.innerText = "Desktop View of the app";
  pmGithub.style.display = "revert";
  pmGithub.href = "https://github.com/Sergio-20/pay-your-bills";
  pmGithub.innerText = "View Code";
  pmHeader.innerText = "Pay Your Bills App";

  pmImg.alt = "Pay Your Bills App";
  pmImg.src =
    "https://user-images.githubusercontent.com/29030325/58362713-1452d600-7e4f-11e9-991c-b410570e91d2.png";

  pmViewProject.style.display = "none";
});

dragonGame.addEventListener("click", () => {
  pmDesc.innerHTML = `<p>Save your people from the gruesome dragon that haunts them!</p>`;
  pmDesc.style.width = "100%";

  pmFigcap.innerText = "Save your village! - Ruby Terminal Game";
  pmGithub.style.display = "revert";
  pmGithub.href = "https://github.com/Sergio-20/terminal-game";
  pmGithub.innerText = "View Code";
  pmHeader.innerText = "Save Your Village!";

  pmImg.alt = "Save your village!";
  pmImg.src = "../img/slay-the-dragon-save-your-village.PNG";

  pmViewProject.style.display = "none";
});

ifitChallenge.addEventListener("click", () => {
  pmDesc.innerHTML = `<p>The iFit Coach homepage was built while referencing a mockup within a day and a half. HTML, CSS, Sass (SCSS) 
  Javascript, jQuery, and React were used to finish this project.</p>`;
  pmDesc.style.width = "100%";

  pmFigcap.innerText = "iFit Front-End Developer challenge";
  pmGithub.style.display = "revert";
  pmGithub.href = "https://github.com/Sergio-20/ifit-FED-challenge";
  pmGithub.innerText = "View Code";
  pmHeader.innerText = "ifit FED challenge";

  pmImg.alt = "SmartMed Billing Solutions Homepage";
  pmImg.src =
    "https://user-images.githubusercontent.com/29030325/83676379-6c0e3c00-a58f-11ea-9c7a-b29b23949d11.png";

  pmViewProject.style.display = "none";
});

jpopRadio.addEventListener("click", () => {
  pmDesc.innerHTML = `<p>This is a radio web app that was created using the WebSocket API, HTML, CSS, Responsive Web Design, 
  Javascript and Bootstrap. The channel sends data through, wss://listen.moe/gateway_v2 and the audio source 
  is, <a href='https://listen.moe/stream' rel='noopener noreferrer' target='_blank'>https://listen.moe/stream</a>.</p>`;
  pmDesc.style.width = "100%";

  pmFigcap.innerText = "Listen to Jpop music online for free!";
  pmGithub.style.display = "revert";
  pmGithub.href = "https://github.com/Sergio-20/jpop-radio";
  pmGithub.innerText = "View Code";
  pmHeader.innerText = "J-pop Radio";

  pmImg.alt = "J-pop Radio Application";
  pmImg.src =
    "https://github.com/Sergio-20/jpop-radio/raw/master/assets/images/pc-01.png";

  pmViewProject.style.display = "revert";
  pmViewProject.href = "https://sergio-20.github.io/jpop-radio/index.html";
  pmViewProject.innerText = "View Online";
});
