let billAmount = parseInt(document.getElementById("billInput").value)

let tipAmount = 0

getTipAmount = () => {

    document.getElementById("outputFromJS").innerHTML = `<p>Tip amount should be:<br> For 20%: $${billAmount*.2}<br> For 15%: $${billAmount*.15} </p>`
}