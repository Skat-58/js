// Последнее значение цикла
// Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  // while (i) это краткий вариант while (i != 0)
  alert(i--); // alert выведет 1
}

// Какие значения выведет цикл for?
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:

for (let i = 0; i < 5; i++) alert(i); // 1 раз выполняется i = 0, затем проверится i < 5 и далее выполнится условие i++ до 4

// Префиксная форма:

for (let i = 0; i < 5; ++i) alert(i); // тоже самое

// Замените for на while
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let i = 0;

while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Выведите чётные числа
// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    // делаем проверку если i делится на 2 то выводим четные числа
    alert(i);
  }
}

// Повторять цикл, пока ввод неверен
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let number;

while (true) {
  number = prompt("Введите число, больше 100", 0);
  if (number >= 100 || number == null) break; // если number больше или ровно 100 или number отсутствует то происходит закрытие
}

// Вывести простые числа

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 10;

Mark: for (let i = 2; i < n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue Mark;
  }
  alert(i);
}
