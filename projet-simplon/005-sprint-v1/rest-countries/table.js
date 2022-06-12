async function render() {
  try {
    // let response = await fetch("https://restcountries.com/v3.1/region/europe");
    let response = await fetch("https://restcountries.com/v3.1/region/europe");
    let x = await response.json();
    let nomPays = "";

    let internationalNumberFormat = new Intl.NumberFormat("en-US");
    for (let a in x) {
      nomPays += `<tr id="tableArea"><th>${
        x[a].name.official
      }</th><td style="text-align: right">${internationalNumberFormat.format(
        x[a].area
      )}</td><td style="text-align: right">${internationalNumberFormat.format(
        x[a].population
      )}</td><td>${x[a].capital}</td></tr>`;
    }
    document.getElementById("tableNom").innerHTML = nomPays;
  } catch (e) {
    console.error(e);
    console.log("Dans le catch");
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
