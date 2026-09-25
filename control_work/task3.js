let PIN = 2026;
let sprobu = 3;
let password = +prompt("Enter your Password");

}
do{
    for (let sproba = 1; sproba <= 3; sproba++ ) {
        password = +prompt("Enter your Password");
        sproba++;
        alert(`Залишилося спроб: ${3 - sproba}`);
    }
    alert("Доступ відхилено");

} while(password !== PIN && sprobu <= 3)
alert("Доступ дозволено");
