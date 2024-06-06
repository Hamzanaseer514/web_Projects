// let heading = document.createElement("button")
// heading.innerText = "Click Me !"
// heading.style.backgroundColor = "red";
// heading.style.color = "white";
// let body = document.querySelector("body")
// body.prepend(heading);

// heading.onclick = () => {
//     alert("YOu click the button")
//     console.log("you clicked thr buttoon")
// }

// heading.addEventListener("click",(evt) => {
//     console.log("hamza i am event listener");
//     console.log("You can use me instead of any other events");
//     console.log(evt)
//     console.log(evt.target)
//     console.log(evt.type)
// })

// heading.addEventListener("click",() => {
//     console.log("Stay Happy");
// })
// q2

// let newh = document.querySelector("p")
// newh.classList.add("new")
// newh.classList.remove("new")


let modebutton = document.querySelector(".mode");
let body = document.querySelector("body");
let currmode = "light";
modebutton.addEventListener("click" , () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light")
    }
    else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark")


    }
    console.log(currmode);
})
