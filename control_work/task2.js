let N = +prompt("Введіть кількість оцінок");
let grade = 0;
let sum = 0;
let gradeSum = 0
let average = 0;
let more7 = 0;
let less7 = 0;
do {
    for (let n = 1; n <= N; n++) {
        let grades = +prompt("Введіть оцінки");
        for (let grade = 0; grade < grades; grade++) {
            gradeSum += grade;
            average = sum / N;
            if(grade >= 7){
                more7++
            }
            else {
                less7++;
            }

        }
    }
    alert(`Сума: ${gradeSum}`);
    alert(`Середнє: ${average}`);
    alert(`Більше 7: ${more7}`);
    alert(`Менше 7: ${less7}`);
    alert(`Максимальне: ${Math.max(grade)}`)

} while(grade >= 1 && grade <= 12)
alert("Valid grade type");