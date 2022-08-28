/*
  Užduotis reikia atlikti 2 kartus
    * su while ciklu
    * su for ciklu
*/

const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

console.groupCollapsed('WHILE');
{
  console.groupCollapsed('1. Sukurkite ciklą kuris 5 kartus atspausdintų "Sveikas Pasauli"');
  {
    let i = 0;
    while (i < 5) {
      i++; 
      console.log('Sveikas Pasauli');
    }
  }
  console.groupEnd();
  console.groupCollapsed('2. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <');
  {
    let i = 0
    while(i < 5) {
      i++;
      console.log(i)
    }
  }
  console.groupEnd();
  console.groupCollapsed('3. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <');
  {
    let i = 2;
    while (i < 7){
      i++;
      console.log(i);
    }
  }
  console.groupEnd();
  console.groupCollapsed('4. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <');
  {
    let i = -4;
    while(i < 2){
      i++;
      console.log(i)
    }
  }
  console.groupEnd();
  console.groupCollapsed('5. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <=');
  {
    let i = 0;
    while(i <= 4){
      i++;
      console.log(i)
    }
  }
  console.groupEnd();
  console.groupCollapsed('6. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <=');
  {
    let i = 2;
    while (i <= 6){
      i++;
      console.log(i);
    }
  }
  console.groupEnd();
  console.groupCollapsed('7. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <=');
  {
    let i = -4;
    while(i <= 1){
      i++;
      console.log(i)
    }
  }
  console.groupEnd();
  console.groupCollapsed('8. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >');
  {
    let i = 3;
    while (i > -3){
      i--;
      console.log(i)
    }
  }
  console.groupEnd();
  console.groupCollapsed('9. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >');
  {
    let i = -4;
    while (i > -10){
      i--;
      console.log(i)
    }
  }
  console.groupEnd();
  console.groupCollapsed('10. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >');
  {
    let i = 3;
    while (i > 1){
      i--;
      console.log(i)
    }
  }
  console.groupEnd();
  console.groupCollapsed('11. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >=');
  {
    let i = 3;
    while(i >= -2){
      i--;
      console.log(i)
    }
  }
  console.groupEnd();
  console.groupCollapsed('12. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >=');
  {
    let i = -4;
    while(i >= -9){
      i--;
      console.log(i);
    }
  }
  console.groupEnd();
  console.groupCollapsed('13. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >=');
  {
    let i = 3;
    while(i >= 2){
      i--;
      console.log(i)
    }
  }
  console.groupEnd();
  console.groupCollapsed('14. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Naudojant žingsnį +2');
  {
    let i = 2;
    while(i< 10){
      i+= 2;
      console.log(i)
    }
  }
  console.groupEnd();
  console.groupCollapsed('15. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Tikrinant ar kintamasis yra lyginis. Naudokite liekanos operatorių');
  {
    let i = 1;
    while (i <= 10){
      if(i % 2== 0){
        console.log(i);
      }
      i += 1;
    }
  }
  console.groupEnd();
  console.groupCollapsed('16. Sukurkite ciklą kuris atspausdintų 4, 1, -2, -5, -8. Naudojant žingsnį -3');
  {
    let i = 7;
    while (i > -8){
      i+= -3;
      console.log(i);
    }
  }
  console.groupEnd();
  console.groupCollapsed('17. Sukurkite ciklą kuris atspausdintų 3, 0, -3, -6, -9. Tikrinant ar kintamojo liekana dalinant iš 3 yra lygi 0?');
  {
    let i = 3;
    while (i >= -9){
      if(i % 3== 0){
        console.log(i)
      }
      i+= -3;
    }
  }
  console.groupEnd();
  console.groupCollapsed('18. Sukurkite ciklą kuris atspausdintų 2, 0, -2, -4, -6. Naudojant kintamojo liekaną');
  {
    let i = 2;
    while (i >= -6){
      if(i % 2== 0){
        console.log(i);
      }
      i -= 2;
    }
  }
  console.groupEnd();
  console.groupCollapsed('19. Sukurkite ciklą kuris atspausdintų 2, -1, -4, -7, -10. Naudojant kintamojo liekaną');
  {
    let i = 2;
    while (i >= -10){
      if(i % 1== 0){
        console.log(i);
      }
      i -= 3;
    }
  }
  console.groupEnd();
  console.groupCollapsed('20. Atspausdinkite <numbers> masyvo elementus nuo pirmo iki paskutinio');
  {
    let i = 0
    while(numbers[i]){
      console.log(numbers[i]);
      i++;
    }
  }
  console.groupEnd();
  console.groupCollapsed('21. Atspausdinkite <numbers> masyvo elementus nuo 3 iki paskutinio');
  {
    let i = 2
    while(numbers[i]){
      console.log(numbers[i]);
      i++;
    }
  }
  console.groupEnd();
  console.groupCollapsed('22. Atspausdinkite <numbers> masyvo elementus nuo 2 iki prieš paskutinio');
  {
    let i = 1;
    while(numbers.length -1 != i) {
      console.log(numbers[i]);
      i++;
    }   
  }
  console.groupEnd();
  console.groupCollapsed('23. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki pirmo');
  {
    let i = numbers.length -1;
    while(i >= 0) {
      console.log(numbers[i])
      i--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('24. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki antro');
  {
    let i = numbers.length -1;
    while(i != 1) {
      console.log(numbers[i])
      i--;
    }
}
  console.groupEnd();
  console.groupCollapsed('25. Atspausdinkite <numbers> masyvo elementus nuo prieš paskutinio iki trečio');
  {
    let i = numbers.length -2;
    while(i >= 2) {
      console.log(numbers[i])
      i--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('26. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę');
  {
    let i = 0;
    while(numbers.length > i) {
      console.log(numbers[i])
      i += 2;
    }
  }
  console.groupEnd();
  console.groupCollapsed('27. Atspausdinkite <numbers> masyvo kas trečią elementą iš kairės į dešinę');
  {
    let i = 0;
    while(numbers.length > i) {
      console.log(numbers[i])
      i += 3;
    }
  }
  console.groupEnd();
  console.groupCollapsed('28. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę, pradedant trečiu');
  {
    let i = 3;
    while(numbers.length > i) {
      console.log(numbers[i])
      i += 2;
    }
  }
  console.groupEnd();
  console.groupCollapsed('29. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės');
  {
    let i = numbers.length -1;
    while( i>= 0) {
      console.log(numbers[i])
      i -= 2;
    }
  }
  console.groupEnd();
  console.groupCollapsed('30. Atspausdinkite <numbers> masyvo kas trečią elementą iš dešinės');
  {
    let i = numbers.length -1;
    while( i>= 0) {
      console.log(numbers[i])
      i -= 3;
    }
  }
  console.groupEnd();
  console.groupCollapsed('31. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės, pradedant prieš prieš paskutiniu');
  {
    let i = numbers.length -2;
    while( i>= 0) {
      console.log(numbers[i])
      i -= 2;
    }
  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('FOR');
{
  console.groupCollapsed('1. Sukurkite ciklą kuris 5 kartus atspausdintų "Sveikas Pasauli"');
  {
    for (let i = 0; i < 5; i++)
    console.log('Sveikas Pasauli')
  }
  console.groupEnd();
  console.groupCollapsed('2. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <');
  {
    for (let i = 1; i < 6; i++)
    console.log(i);
  }
  console.groupEnd();
  console.groupCollapsed('3. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <');
  {
    for(let i =3; i<8; i++)
    console.log(i)
  }
  console.groupEnd();
  console.groupCollapsed('4. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <');
  {
    for(let i = -3; i<3; i++)
    console.log(i);
  }
  console.groupEnd();
  console.groupCollapsed('5. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <=');
  {
    for(let i = 1; i<= 5; i++)
    console.log('i:', i)
  }
  console.groupEnd();
  console.groupCollapsed('6. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <=');
  {
    for(let i = 3; i<=7; i++)
    console.log(i);
  }
  console.groupEnd();
  console.groupCollapsed('7. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <=');
  {
    for(let i = -3; i<=2; i++)
    console.log(i);
  }
  console.groupEnd();
  console.groupCollapsed('8. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >');
  {
    for(let i= 2; i> -4;i--)
    console.log(i);
  }
  console.groupEnd();
  console.groupCollapsed('9. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >');
  {
    for(let i= -5; i> -11;i--)
    console.log(i);
  }
  console.groupEnd();
  console.groupCollapsed('10. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >');
  {
    for(let i= 2; i> 0;i--)
    console.log(i);
  }
  console.groupEnd();
  console.groupCollapsed('11. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >=');
  {
    for(let i=2; i>= -3; i--)
    console.log(i)
  }
  console.groupEnd();
  console.groupCollapsed('12. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >=');
  {
    for(let i=-5; i>= -10; i--)
    console.log(i)
  }
  console.groupEnd();
  console.groupCollapsed('13. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >=');
  {
    for(let i=2; i>= 1; i--)
    console.log(i)
  }
  console.groupEnd();
  console.groupCollapsed('14. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Naudojant žingsnį +2');
  {
    for(let i=1; i<= 10; i+=2)
    console.log(i)
  }
  console.groupEnd();
  console.groupCollapsed('15. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Tikrinant ar kintamasis yra lyginis. Naudokite liekanos operatorių');
  {
    for(let i=1; i<=10; i++)
    if(i % 2== 0){
      console.log(i);
    }
  }
  console.groupEnd();
  console.groupCollapsed('16. Sukurkite ciklą kuris atspausdintų 4, 1, -2, -5, -8. Naudojant žingsnį -3');
  {
    for(let i = 4; i>= -8; i--)
    console.log(i);
  }
  console.groupEnd();
  console.groupCollapsed('17. Sukurkite ciklą kuris atspausdintų 3, 0, -3, -6, -9. Tikrinant ar kintamojo liekana dalinant iš 3 yra lygi 0?');
  {
    for(let i=3; i>= -9; i--)
    if(i % 3== 0){
      console.log(i);
    }
  }
  console.groupEnd();
  console.groupCollapsed('18. Sukurkite ciklą kuris atspausdintų 2, 0, -2, -4, -6. Tikrinant ar kintamojo liekana');
  {
    for(let i=2; i>= -6; i--)
    if(i % 2== 0){
      console.log(i);
  }
}
  console.groupEnd();
  console.groupCollapsed('19. Sukurkite ciklą kuris atspausdintų 2, -1, -4, -7, -10. Tikrinant ar kintamojo liekana');
  {
    for(let i = 2; i>= -10; i--)
    if(i % 2== 0){
      console.log(i);
    }
  }
  console.groupEnd();
  console.groupCollapsed('20. Atspausdinkite <numbers> masyvo elementus nuo pirmo iki paskutinio');
  {
    for(i= 0; numbers[i]; i++)
    console.log(numbers[i])
  }
  console.groupEnd();
  console.groupCollapsed('21. Atspausdinkite <numbers> masyvo elementus nuo 3 iki paskutinio');
  {
    for(i= 3; numbers[i]; i++)
    console.log(numbers[i])
  }
  console.groupEnd();
  console.groupCollapsed('22. Atspausdinkite <numbers> masyvo elementus nuo 2 iki prieš paskutinio');
  {

    for(i= 1; numbers.length-1 != i; i++)
    console.log(numbers[i])
      
    }
  }
  console.groupEnd();
  console.groupCollapsed('23. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki pirmo');
  {
    for(i= numbers.length-1; numbers[i]>= 0; i--)
    console.log(numbers[i])
  }
  console.groupEnd();
  console.groupCollapsed('24. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki antro');
  {
    for(i= numbers.length-1; numbers[i] != 1; i--)
    console.log(numbers[i])
  }
  console.groupEnd();
  console.groupCollapsed('25. Atspausdinkite <numbers> masyvo elementus nuo prieš paskutinio iki trečio');
  {
    for(i= numbers.length-2; numbers[i] >=2; i--)
    console.log(numbers[i])
  }
  console.groupEnd();
  console.groupCollapsed('26. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę');
  {
    for(i= 0; numbers.length-1 > i; i+=2)
    console.log(numbers[i]);
  }
  console.groupEnd();
  console.groupCollapsed('27. Atspausdinkite <numbers> masyvo kas trečią elementą iš kairės į dešinę');
  {
    for(i= 0; numbers.length-1 > i; i+=3)
    console.log(numbers[i]);
  }
  console.groupEnd();
  console.groupCollapsed('28. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę, pradedant trečiu');
  {
    for(i= 3; numbers.length-1 > i; i+=2)
    console.log(numbers[i])
  }
  console.groupEnd();
  console.groupCollapsed('29. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės');
  {
    for(i= numbers.length-1; numbers[i] >=0; i-=2)
    console.log(numbers[i]);
  }
  console.groupEnd();
  console.groupCollapsed('30. Atspausdinkite <numbers> masyvo kas trečią elementą iš dešinės');
  {
    for(i= numbers.length-1; numbers[i] >=0; i-=3)
    console.log(numbers[i]);
  }
  console.groupEnd();
  console.groupCollapsed('31. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės, pradedant prieš prieš paskutiniu');
  {
    for(i= numbers.length-2; numbers[i] >=0; i-=2)
    console.log(numbers[i]);
  }
  console.groupEnd();

console.groupEnd();
