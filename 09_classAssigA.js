
class Vehicle{
    constructor(color, year, model, company, mileage){
        this.color=color;
        this.year=year;
        this.model=model;
        this.company=company;
        this.mileage=mileage;
    }
    getDetails(){
        console.log(`Color: ${this.color}, Year: ${this.year}, Model: ${this.model}, Company: ${this.company}, Mileage: ${this.mileage}`);
    }
}
console.log(`============================== Step 1 ======================================`);
console.log(` `);
const innova = new Vehicle("White", 2020, "Innova", "Toyota", "16/23 Km/L");
console.log(innova);
console.log(` `);
const civic = new Vehicle("Silver", 2021, "Civic", "Honda", "16/23 Km/L");
console.log(civic);
console.log(` `);
const mustang = new Vehicle("Red", 2020, "Mustang", "Ford", "16/23 Km/L");
console.log(mustang);
console.log(` `);
const chevrolet = new Vehicle("Black", 2020, "Chevrolet", "Malibu", "16/23 Km/L");
console.log(chevrolet);
console.log(` `);
const altima = new Vehicle("White", 2020, "Altima", "Nissan", "16/23 Km/L");
console.log(altima);

console.log(`============================== Step 2 ======================================`);
