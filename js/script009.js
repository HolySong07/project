
"use strick";

console.log("str" + " - мама");
console.log("str" + " - мама");
console.log(4 + +"3"); // + перед кавічками или командой превращает это в цифры

let increment = 10,
    decrement = 10;

/*     increment++;
    decrement--; */

    console.log(--increment); // сначало уменьшает на 1 а потом выводит что осталось, в итоге получаем 9
    console.log(decrement++); // получим 10, так как сначало получили переменную, а потмо прибавляем 1


    console.log(2*4 == 8); // true
    console.log(2*4 == "8"); // true
    // если ===  то это строгое сравнение и ниже получим фолс
    console.log(2*4 === "8");

    // && - и (если и то и то правда)
    // || - или (если или это правла или это)
    // ! отрицание - превращает в наоборот
    // != не равен

    const isChecked = true;
    const isMam = false;
    const isPap= false;

    console.log(isChecked && isMam); // возвращает правду только если оба подопечных одинаковы

    console.log(isChecked && isPap); // возвращает правду если хотябы 1 правдивый, если 2 фолс, ответ будет фолс