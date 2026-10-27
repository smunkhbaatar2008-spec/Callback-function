// const run = (callback) => {
//     callback();
// }
// run(() => console.log("Эхэллээ"));
// run(() => console.log("Дууслаа"));
// run(() => console.log(100));

// const sendName = (name ,callback) => {
//     callback(name);
// }
// const hello = (name) => console.log(` ${name} ,${"Сайн уу, …!"}` );
// sendName("Бат" , hello)

// const processNumber = (number , callback) => {
//    return callback(number);
// }
// console.log(processNumber(5 , element => element * 2));
// console.log(processNumber(4 , element => element * element));
// console.log(processNumber(10 , element => element - 3 ));

// const calculate = (a , b , callback) => {
//     return callback(a , b)
// }
// console.log(calculate(8 , 3 , (a , b) => a + b));
// console.log(calculate(8 , 3 , (a , b) => a - b));
// console.log(calculate(8 , 3 , (a , b) => a * b));

// const chooseAction = (condition , onTrue , onFalse) => {
//     if (condition === true) {
//         onTrue()
//     }
//     else {
//         onFalse()
//     }
// }
// const yes = () => console.log("Зөвшөөрсөн");
// const no = () => console.log("Татгалзсан");
// chooseAction(true , yes , no);
// chooseAction(false , yes , no);
// chooseAction(5 > 3 , yes , no);

// const toUpper = (text) => text.replace("cat" , "cat".toUpperCase());
// console.log(toUpper("cat and cat"));
// console.log(toUpper("my cat"));
// console.log(toUpper("dog"));

// const toUpper = (text) => text.replaceAll("hi" , "hi".toUpperCase());
// console.log(toUpper("hi hi"));
// console.log(toUpper("say hi"));
// console.log(toUpper("hello"));

// const fillPrice = (text , price) => text.replaceAll("{price}" , price + "₮");
// console.log(fillPrice("{price}" , 500));
// console.log(fillPrice("{price} + {price}" , 800));
// console.log(fillPrice("Үнэгүй" , 0));

// const items = ["Талх", "Сүү"].forEach((element, index) => {
//     console.log(`${index +1} , ${element}`);
// });

// const result = (minutes) => minutes.map(element => element * 60);
// console.log(result([1]));
// console.log(result([2]));
// console.log(result([5]));

// const result = (name) => name.map(element => element.trim(" ") );
// console.log(result([" Бат ", "Ану "]));
// console.log(result(["Номин"]));
// console.log(result([]));

// const temp = (freezing) => freezing.filter(element => element <= 0);
// console.log(temp([-5 , 0 , 8]));

// const result = (products) => products.filter(element => element.available);
// console.log(result([{id: 1, available: true}, {id: 2, available: false}]));
// console.log(result([{id: 3, available: false}]));

// const highTemperature = (temp) => temp.find(element => element > 30);
// console.log(highTemperature([22, 32, 35]));
// console.log(highTemperature([30, 29]));
// console.log(highTemperature([40]));

// const findWord = (word) => word.find(element => element.startsWith("b"));
// console.log(findWord(["cat", "book", "bag"]));
// console.log(findWord(["apple"]));
// console.log(findWord(["ball"]));

// const evenIndex = (number) => number.findIndex(element => element < 0);
// console.log(evenIndex([4, -2, -8]));
// console.log(evenIndex([-5, 2]));
// console.log(evenIndex([0, 3]));

// const firstUnreadIndex = (objects) => objects.findIndex(element => element.isRead === false);
// console.log(firstUnreadIndex([{isRead: true}, {isRead: false}]));
// console.log(firstUnreadIndex([{isRead: false}]));
// console.log(firstUnreadIndex([]));

// const lastEvenNumber = (numbers) => numbers.findLast(element => element % 2 === 0);
// console.log(lastEvenNumber([2, 7, 8, 3]));
// console.log(lastEvenNumber([1, 3]));
// console.log(lastEvenNumber([0]));

// const lastLongWord = (words) => words.findLast(element => element.length > 4);
// console.log(lastLongWord(["apple", "cat", "school"]));
// console.log(lastLongWord(["book"]));
// console.log(lastLongWord(["house", "a"]));

// const findPrice = (price) => price.some(element => element < 1000);
// console.log(findPrice([1500, 800, 2000]));
// console.log(findPrice([1000, 1200]));
// console.log(findPrice([]));

// const findQuestion = (words) => words.some(element => element.endsWith("?"));
// console.log(findQuestion(["Сайн уу?", "Сайн"]));
// console.log(findQuestion(["Тийм", "Үгүй"]));
// console.log(findQuestion([]));

// const CorrectScores = (score) => score.every(element => element >= 0 && element <= 100);
// console.log(CorrectScores([0, 75, 100]));
// console.log(CorrectScores([80, 101]));
// console.log(CorrectScores([]));

// const allPaid = (list) => list.every(element => element.paid);
// console.log(allPaid([{paid: true}, {paid: true}]));
// console.log(allPaid([{paid: true}, {paid: false}]));
// console.log(allPaid([]));

// const totalExpence = (expence) => expence.reduce((total, e) => total + e , 0);
// console.log(totalExpence([1200, 800, 500]));

// const totalPrice = (prices) => prices.reduce((total , items) => total + items.price * items.quantity , 0);
// console.log(totalPrice([{price: 500, quantity: 2}, {price: 800, quantity: 1}]));
// console.log(totalPrice([{price: 1000, quantity: 0}]));
// console.log(totalPrice([]));

// const sortAsceding = (temp) => temp.sort((a, b) =>  a - b);
// console.log(sortAsceding([12, -3, 5]));

// const sortAsceding = (temp) => temp.sort((a, b)=> b - a);
// console.log(sortAsceding([70, 95, 80]));
