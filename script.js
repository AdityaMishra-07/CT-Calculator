let bag = "";
let keys = document.querySelectorAll("#keyboard>div");

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", mycalc);
}


function mycalc(event) {
    let targetNumber = event.target.innerText;
    if (targetNumber == "C") {
        bag = "";
        document.querySelector("#inputbox").innerText = bag;
    } else if (targetNumber == "=") {
        let ans = eval(bag);
        document.querySelector("#inputbox").innerText = `= ${ans}`;
        // bag = ans;
    } else {
        bag += targetNumber;
        document.querySelector("#inputbox").innerText = bag;
    }
}
