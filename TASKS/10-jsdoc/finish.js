/** ЗАДАЧА 10 - Комментарий перед функцией
 *
 * 1. Объявите функцию с двумя параметрами, значения которых - числа
 *
 * 2. Эта функция должна возвращать разницу между первым и вторым параметром
 *
 * 3. Добавьте многострочный комментарий перед функцией:
 *  - Текст комментария "Возвращает разницу двух чисел"
 *  - Укажите тип параметров - number
 *  - Укажите тип возвращаемого значения - number
 *  - Опишите возвращаемое значение - "Разница чисел"
 *
 * 4. Вызовите функцию
 */
/*this function returns difference of two numbers*/
/**
 * returns the difference of two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns {number} the difference of two numbers
 */
function diff(a, b) {
  return a - b;
}

console.log(diff(15, 16));

