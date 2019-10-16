interface Lakes {
    name: string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[]
}
let firstLake: Lakes = {
    name: 'Caspian Sea',
    length: 1199,
    depth: 1025,
    area: 371000,
    isFreshwater: false,
    countries: ['Kazakhstan', 'Russia', 'Turkmenistan',
        'Azerbaijan', 'Iran']
}
console.log(firstLake.countries);

//optional properties
interface Lakes {
    name: string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[],
    frozen?: string[]
}
let secondLake: Lakes = {
    name: 'Superior',
    depth: 406.3,
    length: 616,
    area: 82100,
    isFreshwater: true,
    countries: ['Canada', 'United States']
}

let thirdLake: Lakes = {
    name: 'Baikal',
    depth: 1637,
    length: 636,
    area: 31500,
    isFreshwater: true,
    countries: ['Russia'],
    frozen: ['January', 'February', 'March', 'April', 'May']
}
interface distance
{
    fromDistance:number;
    toDistance:number;
    computeDistance: ()=>number;
    computeRelation:()=>string;
}
//read only
interface Enemy {
    readonly size: number,
    health: number,
    range: distance,
    readonly damage: number
}
let distobj:distance={fromDistance:56,toDistance:130,
    computeDistance: ():number =>{return 100},
    computeRelation: ():string =>{return ("computed")}
};

//annonymous instance
let tank: Enemy = {
    size: 50,
    health: 100,
    range: distobj,
    damage: 12
}
console.log('Tank details...','-->',tank);

// This is Okay
tank.health = 95;
console.log('After modifying Tank details...','-->',tank);
// Error because 'damage' is read-only.
//tank.damage = 10;

interface EnemyHit {

    (name: Enemy, damageDone: number): number;


}

let tankHit: EnemyHit = function(tankName: Enemy, damageDone: number) {
    tankName.health -= damageDone;
    return tankName.health;
}

console.log(tankHit(tank,2))

interface Human {
    firstName: string;
    lastName: string;
    name?: Function;
    isLate?(time: Date): Function;
}

class Person implements Human {
    constructor(public firstName, public lastName) {
    }

    public name() {
        return `${this.firstName} ${this.lastName}`;
    }

    protected whoAreYou() {
        return `Hi i'm ${this.name()}`;
    }
}

class Student extends Person {
    constructor(public firstName, public lastName, public course) {
        super(firstName, lastName);
    }

    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying ${this.course}`;
    }
}


var asim = new Student("Asim", "Hussain", "typescript");
console.log(asim.whoAreYou());