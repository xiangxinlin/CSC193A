function bigger(){
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pts";
}

function addStyle(){
    const textInput = document.getElementById("textInput");
    const fancy = document.getElementById("fancy");

    if (fancy.checked) {
        alert("FancyShmancy selected!")
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    }else{
        alert("BoringBetty selected!")
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

function moo(){
    const textInput = document.getElementById("textInput");
    let text = textInput.value.toUpperCase();
    let sentence = text.split(".");

    for(let i = 0; i < sentence.length; i++){
        let str = sentence[i].trim().split(" ");
        if(str.length > 0 && str[0] !== ""){
            str[str.length - 1] += "-Moo!";
            sentence[i] = str.join(" ");
        }
    }
    textInput.value = sentence.join(". ");
}