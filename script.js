let count = 0;

alert(`Вам пропонується дати відповіді на 10 запитань по темі 'Виникнення Київської Русі'.`)

let ask1 = prompt('Питання №1. Де описана легенда про заснування Києва?');

if (ask1.toLowerCase() === 'повість минулих літ') {
    count++;
}

let ask2 = prompt('Питання №2. Хто є автором «Повісті минулих літ»?');
if (ask2.toLowerCase() === 'нестор літописець') {
    count ++;
}

let ask3 = prompt('Питання №3. Вважається, що до заснування Києва Кий був князем...');
if (ask3.toLowerCase() === 'полян') {
    count++;
}

let ask4 = prompt('Питання №4. Яка держава була головним торговельним партнером Київської Русі?');
if (ask4.toLowerCase() === 'візантія') {
    count++;
}

let ask5 = prompt('Питання №5. Як східні слов’яни називали представників північних народів?');
if (ask5.toLowerCase() === 'варяги') {
    count++;
}

let ask6 = +prompt('Питання №6. В якому році Аскольд очолив морський похід проти Візантії?');
if (ask6 === 860) {
    count++;
}

let ask7 = prompt('Питання №7. Яке ім’я при хрещенні отримав Аскольд?');
if (ask7.toLowerCase() === 'микола') {
    count++;
}

let ask8 = prompt('Питання №8. З яким містом пов’язане правління князя Рюрика?');
if (ask8.toLowerCase() === 'новгород') {
    count++;
}

let ask9 = +prompt('Питання №9. В якому році князь Олег розпочав своє правління в Києві?');
if (ask9 === 882) {
    count++;
}

let ask10 = prompt('Питання №10. Як називалися збройні загони, що становили постійне військо князя та апарат його влади?');
if (ask10.toLowerCase() === 'дружина') {
    count++;
}

alert(`Ви правильно відповіли на ${count} запитань та набрали ${count} балів з 10!`);

if (count <= 2) {
    alert(`Ваш рівень знань - смерд!`)
}
else if (2 < count && count <= 4) {
    alert(`Ваш рівень знань -  міщанин.`)
}
else if (4 < count && count <= 7) {
    alert(`Ваш рівень знань -  дружинник.`)
}
else if (7 < count && count <= 9) {
    alert(`Ваш рівень знань -  боярин!`)
}
else if (count === 10) {
    alert(`Ваш рівень знань -  Князь Київський!`)
}

alert(`Щоб спробувати ще - оновіть сторінку :)`)

