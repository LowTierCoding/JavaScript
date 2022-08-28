const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
 function printPerson(people){

  console.log(people.name)
 }
 people.forEach(printPerson)
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  function printPersonFullName(people){
    console.log(people.name +' -', people.surname );
  }
  people.forEach(printPersonFullName)
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function printPersonIsMarried(people){
    console.log(people.name, people.surname, people.married)
  }
  people.forEach(printPersonIsMarried)
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  const people1 = [
    {
      name: 'Valera',
      surname: 'Valerijonas',
      sex: 'male',
      income: 4100,
    },
    {
      name: 'Valera',
      surname: 'Valerija',
      sex: 'female',
      income: 1000,
    },
    {
      name: 'Ignas',
      surname: 'Mantaitis',
      sex: 'male',
      income: 1200,
    },
    {
      name: 'Inga',
      surname: 'Ingiene',
      sex: 'female',
      income: 2100,
    },
  ];
  console.log(people1)
};
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  const people2 = [
    {
      name: 'Viktoras',
      surname: 'Valerijonas',
      sex: 'male',
    },
    {
      name: 'Viktorija',
      surname: 'Pavardaite',
      sex: 'female',
    },
    {
      name: 'Ignas',
      surname: 'Ignaitis',
      sex: 'male',
    },
    {
      name: 'Inga',
      surname: 'Ingiene',
      sex: 'female',
    },
  ];
  console.log(people2)
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  function printMale(people){
    return people.sex === 'male'
  }
  const male = people.filter(printMale)
  console.log(male)
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function printFemale (people){
    return people.sex === 'female'
  }
  const female = people.filter(printFemale)
  console.log(female)
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function printPersonFullNameAndCar(people){
    if(people.hasCar === true){
    console.log(people.name, people.surname)
    } 
  }
  people.forEach(printPersonFullNameAndCar)
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function printMarriedPerson(people){
    return people.married === true;
  }
  const MarriedPeople = people.filter(printMarriedPerson);
  console.log(MarriedPeople)
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  function driversBySex(people){
    for (let i = 0; i < people.length -1; i++) {
      let menCount = 0;
      let womenCount = 0;
      if(people[i].hasCar){
        if(people[i].sex == 'male'){
          menCount += 1;
        }
        else{

          womenCount += 1;
        }
    }
  }
  return {
    vyrai: menCount,
    moterys: womenCount
  }

}
console.log(driversBySex(people));
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{

}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

