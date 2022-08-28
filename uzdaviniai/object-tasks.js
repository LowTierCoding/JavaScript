console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    function sortDrinkByPrice(drinks){
        return drinks.sort((a,b)=> a.price - b.price);
       }
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
        obj[name] = value;
        return obj;
    }
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        let f = {"-3":"great grandmother","-2":"grandmother","-1":"mother","0":"me!","1":"daughter","2":"granddaughter","3":"great granddaughter"}
        let m = {"-3":"great grandfather","-2":"grandfather","-1":"father","0":"me!","1":"son","2":"grandson","3":"great grandson"}
        if(y=='f')return f[x];
        return m[x];
    }
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    function maximumScore(tileHand) {
        return tileHand.reduce((previousValue,currentValue) => previousValue + currentValue.score, 0);
    }
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    function calculateDifference(obj, limit) {
     return (Object.values(obj)).reduce((a, b) => a + b) - limit;
    }
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
        return Object.entries(obj);
    }
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    function inkLevels(inks) {
        return Math.min(...Object.values(inks));
   }
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    function calculateLosses(obj) {
        return Object.values(obj).reduce((previousValue, currentValue) => previousValue + currentValue, 0) || 'Lucky you!';
    }
}
console.groupEnd();
