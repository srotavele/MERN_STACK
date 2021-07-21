class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}







class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.name = name
        this.power = power;
        this.res = res;
    }
    attack = target => {
        target.res -= this.power;
    }
}
    const unit1 = new Unit('Red Belt Ninja', 3, 3, 4);
    const unit2 = new Unit('Black Belt Ninja', 4, 5, 4);





class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.name = name
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }
    play = target => {
        if (this.stat == 'resilience') {
            target.res += this.magnitude;
        }
        if (this.stat == 'power') {
            target.power += this.magnitude;
        }
    }

}
    const effect1 = new Effect('Hard Algorithm', 2, 'increase targets resilience by three', 'resilience', 3);
    const effect2 = new Effect('Unhandled Promise Rejection', 1, "reduce targets resilience by two", 'resilience', -2);
    const effect3 = new Effect('Pair Programming', 3, 'increase targets power by two', 'power', 2);


console.log(unit1);
console.log(unit2);


effect1.play(unit1);
console.log(unit1);
effect2.play(unit1);
console.log(unit1);
unit1.attack(unit2);
console.log(unit2);

