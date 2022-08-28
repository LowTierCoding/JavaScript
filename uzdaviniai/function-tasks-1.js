console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{

  function firstElement(arr){
    return arr[0];
  }
  console.log(firstElement([1,2,3,4,5]));
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function shiftedElement(arr){
    return arr.shift();
  }
  console.log(shiftedElement([11,2,3,4,5]))
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function lastElement(arr){
    return arr[arr.length - 1];
  }
  console.log(lastElement([1,2,3,4,5]))
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function lastElement(arr){
    return arr.pop()
  }
  console.log(lastElement([1,2,3,4,5]))
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function lastElement(arr){
    return arr.length
  }
  console.log(lastElement([1,2,3,4,5,9]))
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function lastElementI(arr){
    return arr.length-1;
  }
  console.log(lastElementI([1,2,3,4,5,9]))
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{

  const words = ['vienas', 'du', 'trys', 'keturi'];
  words.forEach((word, index) => {
    console.log(index);
  })
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  const words = ['vienas', 'du', 'trys', 'keturi'];
  words.forEach((word) => {
    console.log(word);
  })
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const words = ['vienas', 'du', 'trys', 'keturi'];
  words.forEach((word, index) => {
    console.log(index, word);
  })
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function reverseArr(arr){
   return arr.reverse()
  }
  console.log(reverseArr([1,2,3,4,5]))
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
 function Array(arr){
  let i = "";
  for(let i = 0; i<arr.length; i++){
    i += i.toString() + " ";
    return i;
  }
}
console.log(Array([0,1,2,3,4,5]))

}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  function Array(arr){
    return arr.toString()
   }
   console.log(Array([-111,2,-9,48]))
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  const words = ['vienas', 'du', 'trys', 'keturi'];
  words.forEach.toString((word, index) => {
    console.log(index, word);
  })
  
}
console.groupEnd();
