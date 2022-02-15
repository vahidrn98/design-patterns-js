class SuperHero {
  constructor(name,power) {
    this.name = name
    this.power = power
  }
}

function SuperHeroWithSword (hero){
  hero.sword = true;
  hero.hasSword = ()=> (`${hero.name}'s power is ${hero.power}, and he also has a sword now.`)
  return `${hero.name}'s power is ${hero.power}, and he also has a sword now.`
}

function SuperHeroWithSuperSpeed(hero){

    hero.superSpeed = true;
    hero.hasSuperSpeed = ()=> (`${hero.name}'s power is ${hero.power}, and he also has the super speed now.`)
    return `${hero.name}'s power is ${hero.power}, and he also has the super speed now.`
}

function SuperHeroWithSpeedandSword (hero){
  hero.speedAndSword = true;
  hero.hasSpeedAndSword = ()=> (`${hero.name}'s power is ${hero.power}, and he also has both super speed and a sword now.`)
  return `${hero.name}'s power is ${hero.power}, and he also has both super speed and a sword now.`
}