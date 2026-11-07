const sunriseBtn = document.getElementById("sunriseBtn");
const swordsBtn = document.getElementById("swordsBtn");
const sunsetBtn = document.getElementById("sunsetBtn");
const moodBG = document.getElementById("moodBG");
const moodTitle = document.getElementById("moodTitle");
const defaultTitle = sunriseBtn.dataset.title;
const defaultBG = sunriseBtn.getAttribute("src");


function swapBG(btn) {
  const bg = btn.getAttribute("src");
  moodBG.style.backgroundImage = `url(${bg})`;
  moodTitle.textContent = btn.dataset.title;
  localStorage.setItem("currentBackground", bg);
  localStorage.setItem("currentTitle", moodTitle.textContent);
};

function main() {
  let curBG = localStorage.getItem("currentBackground");
  let curTitle = localStorage.getItem("currentTitle");
  if (!curBG) {
    curBG = defaultBG;
    localStorage.setItem("currentBackground", curBG);
  };
  moodBG.style.backgroundImage = `url(${curBG})`


  if (!curTitle) {
    curTitle = defaultTitle;
    localStorage.setItem("currentTitle", curTitle);
  };
  moodTitle.textContent = curTitle;

  sunriseBtn.onclick = () => swapBG(sunriseBtn);
  swordsBtn.onclick = () => swapBG(swordsBtn);
  sunsetBtn.onclick = () => swapBG(sunsetBtn);
};

// TODO: make thumbnail sized images named regname-thumb.jpg
// TODO: switch img src to those in html
// TODO: write function to chop off -thumb from src attributes 
// TODO: make sure everything works ;)
//
// TODO: title flexbox adjustment
// TODO: smoother background image transition
// TODO: change scrolling behavior (see cyoa project's left bar - css)

main()
