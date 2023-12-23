const animalData = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger
    }
    greet() {
        if(this.species === 'cat') {
            console.log(`Meow I am ${this.name} the ${this.species}`);
        } else if(this.species === 'dog') {
            console.log(`Woof, I am ${this.name} the ${this.species}`);
        } else {
            console.log(`Hi ${this.name}, the ${this.species}`);
        }
    }
    feed() {
        this.hunger -= 20;
        if(this.species === 'cat') {
            console.log(`Yum! I love ${this.food}`)
        } else if(this.species === 'dog') {
            console.log(`Yum, I love ${this.food}`) 
        } else {
            console.log(`Yum, I love food`);
        }
    }
}
class Cat extends Animal {
    constructor(name, color, hunger) {
        super(name, 'cat', color, hunger)
        this.food = 'fish';
    }
    // greet() {
    //     console.log(`Meow I am ${this.name} the ${this.species}`);
    // }
    // feed() {
    //     this.hunger -= 20;
    //     console.log(`Yum! I love ${this.food}`)
    // }
}
class Dog extends Animal {
    constructor(name, color, hunger) {
        super(name, 'dog', color, hunger);
        this.food = 'kibble';
    }
    // greet() {
    //     console.log(`Woof, I am ${this.name} the ${this.species}`);
    // }
    // feed() {
    //     this.hunger -= 20;
    //     console.log(`Yum, I love ${this.food}`)
    // }
}
/*
const binky = new Cat('Binky', 'brown', 85);
const brady = new Dog('Brady', 'black', 90)
console.log(binky);
binky.greet();
binky.feed();
console.log(brady);
brady.greet()
*/
class AnimalShelter {
    constructor() {
        this.animals = []
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    adopt(animal) {
        const animalIndex = this.animals.indexOf(animal);  // find the index of the animal in the `this.animals` array
        this.animals.splice(animalIndex, 1);  // remove that animal from the `this.animals` array 
    }
    getAnimalsBySpecies(species) {
        return this.animals.filter(animal => animal.species === species)
    }
}
// const nabi = new Animal('Nabi', 'cat', 'brown, black, orange, white', 80);
// console.log(nabi);

const shelter = new AnimalShelter();

for(const a of animalData) {
    if(!a.hunger) a.hunger = 50;
    let animal;
    
    if(a.species === 'cat') animal = new Cat(a.name, a.color, a.hunger);
    else if(a.species === 'dog') animal = new Dog(a.name, a.color, a.hunger);
    else animal = new Animal(a.name, a.species, a.color, a.hunger);
    
    shelter.addAnimal(animal);
}
for(const animal of shelter.animals) animal.greet(), animal.feed();


