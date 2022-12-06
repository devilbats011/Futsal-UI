import "./style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function main() {
  const futsalCourtEl = document.querySelector(".futsal-court");

  for (let index = 5; index > 0; index--) {
    //Clone Courts
    const futsalCourtElClone = futsalCourtEl.cloneNode(true);
    // let futsalCourtTextEL = futsalCourtElClone;
    const futsalCourtTextEL =
    futsalCourtElClone.getElementsByClassName("card-title")[0];
    futsalCourtTextEL.innerText = "COURT " + (index + 1);
    // futsalCourtTextEL.tex
    console.log(futsalCourtTextEL);
    // Inject after the element
    futsalCourtEl.after(futsalCourtElClone);
  }

}
main();
