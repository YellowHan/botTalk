const btn = document.getElementById("btn");
const userText = document.getElementById("userText");

document.getElementById("botName").innerText = "꿀꿀";
document.getElementById("info").innerText = "?";

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id == "btn") {
    const result = userText.value;
    userText.value = "";
    btn.style.background = "rgb(240, 240, 240)";
    btn.style.color = "gray";
    document.getElementById("talk").innerHTML += send(result);
    document.getElementById("talk").innerHTML += answer(result);
  }
  if(target.id == "info") {
    document.getElementById("info").innerHTML = '<p id="infoMsg"><b>키워드</b><br/>안녕 / 이름 / 나이<br/>돼지 / 바보 / 꿀꿀<br/>나 어떻게 생각해<br/>나한테 궁금한<br/>웃어 / 울어</p>';
  }
  else {
    document.getElementById("info").innerHTML = "?";
  }
});

const send = (result) => {
  const now = time();
  return `<p class="userMsg">
    <span class="time">${now}</span>
    <span class="showText">${result}</span>
    </p>`;
};

const answer = (result) => {
  const now = time();
  for (let i = 0; i < talkDate.length; i++) {
    if (String(result).includes(talkDate[i].user)) {
      return `<span class="showText">${talkDate[i].bot}</span>`;
    }
  }
  return (
    `<span class="showText">엄마한테 못 배웠다꿀..</span>
    <span class="time">${now}</span>`);
};

time = () => {
  const now = new Date();
  return `${now.getHours()}:${
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
  }`;
};

window.onkeyup = (e) => {
  if (e.target.id == "userText" && e.target.value != "") {
    btn.style.background = "rgb(252, 255, 94)";
    btn.style.color = "black";
  }
  if (userText.value == "") {
    btn.style.background = "rgb(240, 240, 240)";
    btn.style.color = "gray";
  }
};

const talkDate = [
  {
    user: "안녕",
    bot: "반갑다 꿀!",
  },
  {
    user: "이름",
    bot: "꿀꿀이다 꿀!",
  },
  {
    user: "나이",
    bot: "맞춰봐라 꿀!",
  },
  {
    user: "돼지",
    bot: "그게 나다 꿀!",
  },
  {
    user: "바보",
    bot: "자기소개 잘 들었다 꿀!",
  },
  {
    user: "꿀꿀",
    bot: "설마.. 너도 돼지냐? 꿀?",
  },
  {
    user: "나 어떻게 생각해",
    bot: "넌 최고다 꿀!",
  },
  {
    user: "나한테 궁금한",
    bot: "독서록 다 썼냐? 꿀?",
  },
  {
    user: "웃어",
    bot: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"
  },
  {
    user: "울어",
    bot: "ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ"
  }
];
