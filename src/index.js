// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";
import animals, { useAnimals } from "./data";

// ---------------------------- Destructuring An Array
// console.log(animals);
/* 
(2) [Object, Object]
0: Object
name: "cat"
sound: "meow"

1: Object
name: "dog"
sound: "woof"
*/

// this variable (... cat, dog )names must unique
// const [cat, dog] = animals;

// var cat = animals[0];
/*  here we can see what the erorr says:
... Identifier 'cat' has already been declared
*/

// console.log(cat);

// ---------------------------- Destructuring An Object
// const { name, sound } = cat;
// {name: "cat", sound: "meow"}
// console.log(sound);
// meow

/*
And this provides us a lot of convenience because
if i gona use it or call .. i can got it by name directly
... not as normal calling .... :animals[0].sound;
*/

// ------------------------------------------------
/* 
- Notice how in the array we could have basically 
called each of these destructured variables any 
name we wanted. 

const [cat, dog] = animals;
... const [c, d] = animals;

- I could call this c and call this d.

- And I decide to log c, notice how it is still 
going to log cat. 

- But when you destructure an object, these names 
that are going inside here have to match with 
the property names of that object.


{name: "cat", sound: "meow"}

name: these have to be the same as the keys that 
you see here .... name: "cat"

          // ------------------------------
          {name: "cat", sound: "meow"}
          name: "cat"
          sound: "meow"
          // ------------------------------

const { name, sound } = cat;

SO NOT WORK:::  const { n, s } = cat;

// ------------------------------------------------

and if we change key name as now:
we will have  variable undefined case

const { name, AniSound } = cat;
console.log(AniSound);
// undefined 

because AniSound is not equal "cat"
 
// -----------------------------------------------------
const { name: catName, sound: catSound } = cat;

console.log(sound);
// meow 

console.log(catSound);
// meow 

- This is a way of providing an alternative name 
for the properties that come from an object.

- and the tow names is work with calling

- And this is really useful especially when your 
getting hold of data from public APIs where 
you didn't really get the chance to name 
the properties inside those JSONs.
// -----------------------------------------------------


// -----------------------------------------------------
- if we were going to destructure our cats object again 
and we have:
const { name, sound } = cat;

- But I wanted to give name and sound a custom value.

- Well you could simply just add in an equal sign, 
say name is equal to, let's call it I don't know,

const { name = "Fluffy", sound = "Purr"} = cat;
console.log(name);
// cat

- if we losed the variable (name) from data

and printed it

console.log(name);
// Fluffy

- So this basically says if name is undefined, 
then use this value instead.

- And this is also really helpful because sometimes 
when you're getting data again from the Internet, 
a lot of these fields might not be filled.

- You don't want your app or your website to just crash.

- You want to give it some default value so that 
it will actually get displayed.
// -----------------------------------------------------


// -----------------------------------------------------
- When you have a nested object
- So let's say we had another property called feeding Requirements 
- And this property is going to hold its own object 
and it has a property called food and another one called water.


.
.
const animals = [
  { name: "cat", sound: "meow", feedingRequirements: {
    food: 2,
    water: 3
  } },
  
  { name: "dog", sound: "woof" }
];

-  now got an object which has an object inside it.
- So how would we destructure these nested objects?



const {name, sound, feedingRequirements} = cat;
console.log(feedingRequirements);

/*
{food: 2, water: 3}
food: 2
water: 3
*/

// -----------------------------------------------------

// const { name, sound, feedingRequirements } = cat;
// console.log(feedingRequirements.food);
// 2

// console.log(food);
// .... eroor .. ReferenceError: food is not defined

/* 
- you can simply set this feedingRequirements instead of 
giving it an alternative name

- you open up a set of curly braces and you pull out 
the values inside



const { name, sound, feedingRequirements: {food, water} } = cat;


- So now if you console log food, you're going to get 
the number of times that the cat needs to be fed


// console.log(food);
// 2


- if I only wanted the feeding requirements destructed, 
then I can do that.

- You don't have to do it for all of the keys 
and values inside an object.

*/

// -----------------------------------------------------

// -----------------------------------------------------
// const [cat, dog] = animals;
// console.log(useAnimals(cat));

/* 
(2) ["cat", ƒ ()]
0: "cat"
1: ƒ () {}
<constructor>: "Function"



- Now if I go ahead and log the value of this useAnimals 
with cat, then you can see that what gets logged is an array 
with two items.

- The first item is the string cats and the second item 
is a function.

- Now that I know that the output of this function 
is an array, 
- well I can simply just destructure it right?

- So I can create a const, add a set of square brackets 
to create an array literal, 

- so the first item that goes in here is gonna be 
the name of the first item of the array which I'll 
just call animal.

- And the second item is going to be assigned the value 
of the function.

// const [cat, dog] = animals;
// console.log(cat);
// useAnimals(cat)

*/

/*
const [cat, dog] = animals;
// console.log(cat);
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
// cat

makeSound(cat);
// meow

makeSound();
// meow
*/

// -----------------------------------------------------

// -----------------------------------------------------
