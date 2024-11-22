
//QUESTION ONE
let characters=['Harry', 'Hermione', 'Ron', 'Draco', 'Luna']
for (i=0; i<=4; i++)
{
    let answer= characters[i];
    console.log(answer);
}

//QUESTION TWO
let firstName='Harry';
let house='Gryffindor';
console.log (`Welcome, ${firstName} of ${house} !`);

//QUESTION THREE
let characterName='Hermione';
console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());

//QUESTION FOUR
let spell='Expelliarmus';
console.log(spell.trim());

//QUESTION FIVE
let quote='I solemnly swear that I am up to no good';
console.log(quote.slice(11,16));

//QUESTION SIX
let firstName2='Ron';
let lastName2='Weasley';
console.log(firstName2.concat(lastName2));

//QUESTION SEVEN
let sentence='Draco is a good wizard';
console.log(sentence.replace('good','bad'));

//QUESTION EIGHT
let houses=['Gryffindor','Hufflepuff','Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);

//QUESTION NINE
let spells=['Alohomora','Lumos','Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);