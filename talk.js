const btn = document.getElementById("btn");
const userText = document.getElementById("userText");
document.getElementById("botName").innerText = "꿀꿀";

document.addEventListener("click", (event) => {
  const target = event.target;
  const value = target.value;

  // 전송 클릭 시
  if (target.id == "btn") {
    const result = userText.value;
    userText.value = "";
    console.log(result);
  }
});

window.onkeyup = e => {
  if (e.target.id == "userText" && e.target.value != "") {
    btn.style.background = "rgb(252, 255, 94)";
    btn.style.color = "black";
  }
  if (userText.value == "") {
    btn.style.background = "rgb(240, 240, 240)";
    btn.style.color = "gray";
  }
};
