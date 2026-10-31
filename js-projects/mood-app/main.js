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
  console.log(moodBG.style.backgroundImage)
  moodTitle.textContent = btn.dataset.title;
  localStorage.setItem("currentBackground", bg);
  console.log(localStorage.getItem("currentBackground"))
  localStorage.setItem("currentTitle", moodTitle.textContent);
};

function main() {
  console.log(defaultBG)
  let curBG = localStorage.getItem("currentBackground");
  let curTitle = localStorage.getItem("currentTitle");
  if (!curBG) {
    curBG = defaultBG;
    localStorage.setItem("currentBackground", curBG);
  };
  console.log(curBG)
  console.log(moodBG.style.backgroundImage)
  moodBG.style.backgroundImage = `url(${curBG})`
  console.log(moodBG.style.backgroundImage)


  if (!curTitle) {
    curTitle = defaultTitle;
    localStorage.setItem("currentTitle", curTitle);
  };
  moodTitle.textContent = curTitle;

  sunriseBtn.onclick = () => swapBG(sunriseBtn);
  swordsBtn.onclick = () => swapBG(swordsBtn);
  sunsetBtn.onclick = () => swapBG(sunsetBtn);
};


main()
