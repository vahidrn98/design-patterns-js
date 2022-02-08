//Define the Ninja class and write rest of the code here
const Ninja = function (name) {
    this.points = 100;
    this.name = name;

}

Ninja.prototype.kick = function(ninja) {
    ninja.points = ninja.points - 50
    if (ninja.points < 0 || this.points < 0) {
        return `Can't kick ${ninja.name}`;
    }
    return `${ninja.name}'s points are ${ninja.points}`
}

Ninja.prototype.punch = function(ninja) {
    ninja.points = ninja.points - 20
    if (ninja.points < 0 || this.points < 0) {
        return `Can't punch ${ninja.name}`;
    }
    return `${ninja.name}'s points are ${ninja.points}`
}