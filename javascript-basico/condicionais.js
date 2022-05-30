// if e else
var nome = "Aline";

if (nome === "Aline") {
    console.log("Legal! Seu nome é este mesmo");
} else if (nome === "Avelino") {
    console.log("Tudo bem! Você também serve")
} else {
    console.log("Que pena! seu nome não é Aline!");
}

//switch
switch (nome) {
    case "Aline":
        console.log("Legal! Você é a Aline mesmo!");
        break;
    case "Avelino":
        console.log("Ah! Você também serve!");
        break;
    default:
        console.log("Que pena! Você não é quem eu estou procurando.");
        break;
}
