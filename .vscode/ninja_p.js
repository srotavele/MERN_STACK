class Ninja {
    constructor(first_name, health =100, speed=3, strength=3) {
        this.name = first_name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        
    }
    sayName() {
        console.log(ninja1.name);
    }


    drinkSake() {
        this.health += 10
        console.log(`Hyabusa's health is now: ${this.health}`)

    }

    showStats() {
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Health: ${this.health}`);

    }



}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();



class Sensei extends Ninja {
    constructor(first_name, health =200, speed=10, strength=10, wisdom=10) {
        super(first_name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake();
        const message = ('Any way is the Only Way');
        console.log(message);
    }

}
const superSensei = new Sensei("Karl");
superSensei.speakWisdom();
superSensei.showStats();
