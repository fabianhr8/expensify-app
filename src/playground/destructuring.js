////////// Object destructuring

const person = {
    name: 'Fabian',
    age: 29,
    location: {
        city: 'cdmx',
        temp: 25
    }
};

const { name = 'default', age } = person;
const { city: cityName, temp: temperature } = person.location;

console.log(`${name} is ${age} years old.`);
if (cityName && temperature) {
    console.log(`It is ${temperature} degrees in ${cityName}.`);
}

//////////// Array destructuring
const address = ['123 Sunny Street', 'El Paso', 'Texas', '79940'];

const [street, city, state, zip] = address;

console.log(`You are in ${street}`);
