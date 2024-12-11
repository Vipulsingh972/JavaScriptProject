const qrText = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (qrText.value.length > 0) {
    let text = qrText.value;
    console.log(text);
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("empty");
    setTimeout(() => {
      qrText.classList.remove("empty");
    }, 1000);
  }
});

// const BASE_URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
