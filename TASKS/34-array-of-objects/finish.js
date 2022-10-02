/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const cars = [
  {
    carBrand: "Nissan",
    price: 20000,
    isAvailableForSale: true,
},
  {
    carBrand: "Opel",
    price: 10000,
    isAvailableForSale: false,
},
  {
    carBrand: "BMW",
    price: 30000,
    isAvailableForSale: true,
},
]

const newCar = {
  carBrand: "Toyota",
  price: 30000,
  isAvailableForSale: true,
}

cars.push(newCar);
console.log(cars);