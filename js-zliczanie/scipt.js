const btn = document.querySelector(".button");
let counter = 0;

function elementClick() {
    counter++;
    btn.innerText = `Liczba kliknięć: ${counter}`;
    if (counter >= 5) {
        btn.removeEventListener("click", elementClick);
    }
    else if(counter==1)
    {
        document.getElementById("demo").classList.add("class1")
    }
    else if(counter==2)
    {
        document.getElementById("demo").classList.remove("class1")
        document.getElementById("demo").classList.add("class2")
    }

}
function ZmianaKlasy() {
    
    document.getElementById("demo").classList.add("class1")
    
  }

btn.addEventListener("click", elementClick);