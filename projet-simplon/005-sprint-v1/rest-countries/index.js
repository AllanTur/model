async function render() {
  try {
    let response = await fetch("https://restcountries.com/v3.1/region/europe");
    let x = await response.json();
    let nomPays = "";

    for (let a in x) {
      nomPays += `<li>${x[a].name.official}</li>`;
    }
    document.getElementById("nom").innerHTML = nomPays;
  } catch (e) {
    console.error(e);
    console.log("Dans le catch");
    // let btn = document.createElementById("refresh");
    // let txt = document.createTextNode("boutton raffraichir");
    // btn.appendChild(txt);
    // document.getElementById("refresh").textContent = "";
    // document.getElementById("refresh").appendChild(btn);
    // btn.addEventListener("click", function () {
    //   render();
    // });
  }
}

render();
document.getElementById("refresh").style.color = "grey";
document.getElementById("refresh").style.border = "none";
document.getElementById("refresh").style.borderRadius = "5px";
document.getElementById("refresh").style.margin = "50px";
document.getElementById("refresh").style.height = "50px";
document.getElementById("refresh").style.width = "200px";
function mouseDown() {
  document.getElementById("refresh").style.color = "aqua";
}

function mouseUp() {
  document.getElementById("refresh").style.color = "grey";
}
// let btn = document.createElementById("refresh");
// let txt = document.createTextNode("boutton raffraichir");
// btn.appendChild(txt);
// document.getElementById("refresh").textContent = "";
// document.getElementById("refresh").appendChild(btn);
