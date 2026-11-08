let enrollBtn = document.querySelector('#enrollBtn');
let status = document.querySelector('#status');
enrollBtn.addEventListener('click', function() {
    status.textContent = 'Зміни успішно збережено!';
    status.classList.add('success');
    enrollBtn.textContent = 'Збережено';
});
let studentsName = document.querySelector('#studentsName');
let welcome = document.querySelector('#welcome');
studentsName.addEventListener('input', function() {
    let name = studentsName.value.trim();
    if (name === '') {
        welcome.textContent = 'Вітаємо, гостю!';
    }
    else {
        welcome.textContent = "Вітаємо, " + name + "!";
    }
});
let format = document.querySelector('#format');
let card = document.querySelector('#card');
format.addEventListener('change', function() {
    let selectedTheme = format.value;
    if (selectedTheme === 'dark') {
        card.classList.add('dark');
    }
    else {
        card.classList.toggle('dark');
    }
});
let detailBtn = document.querySelector('#detailBtn');
let details = document.querySelector('#details');
detailBtn.addEventListener('click', function() {
    details.classList.toggle('hidden');
    if(details.classList.contains('hidden')) {
        detailBtn.textContent = 'Показати додаткову інформацію';
    }
    else {
        detailBtn.textContent = 'Приховати додаткову інформацію';
    }
});