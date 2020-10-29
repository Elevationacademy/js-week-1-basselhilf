// Scope - Exercises

//===================================================================================
//Section 1
//===================================================================================
// const run = true

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }


// console.log("Damn, you see this gal? She ran " + distance + " miles")    

// What will console log? 8*running && "Finished running 8 miles"
// Will there be an error? yes
// Why? becacause distance is local variable
// Will something be undefined? no
// Why?
// To what scope does each variable belong? run=>all the code , distance=> if scope 
// Global or local? If local, to which specifically? run=> global , distance=> local to if scope

    //===================================================================================//Section 2//===================================================================================
// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound)
// }

// What will console log? error
// Will there be an error? cowSound is not define
// Why? because there is no define to cowSound in the else 
// Will something be undefined? yes
// Why? cowSound not define in else
// To what scope does each variable belong? cowSound=>if scope
// Global or local? If local, to which specifically? cowSound=>local to if scope

//===================================================================================
//Section 3
//===================================================================================
// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)

// What will console log? special fish , special lettuce plate , special curious cheese
// finished serving all the orders : fish , lecttuce plate curious cheese
// Will there be an error? no
// Why?
// Will something be undefined? no
// Why?
// To what scope does each variable belong? allorders=>to all the code , orders=>serveOrders function , order=>for scope , specialOrder =>for scope
// Global or local? If local, to which specifically? allOrders=>global , orders=>local , order=> local , specialOrder=> local

//===================================================================================
//Section 4
//===================================================================================
// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()

// What will console log? no
// Will there be an error? yes
// Why? because getSeed is not defined
// Will something be undefined? no 
// Why? 
// To what scope does each variable belong? pot=>all the code , seed=>getSeed function , 
// Global or local? If local, to which specifically? pot=>global , sees=>local 

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found
// }
// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }

// What will console log? no
// Will there be an error? yes
// Why? because found is not defined at doesUserExist 
// Will something be undefined? no 
// Why? 
// To what scope does each variable belong? userExists=>all the code , users=>deosUserExist function scope , u=>for scope , found=>if scope
// Global or local? If local, to which specifically? userExists=>global , users => local , u=>local , found=>local

//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
// const isEnough = false
// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }
// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")
// }

// What will console log? No
// Will there be an error? yes
// Why? because const type can't be changed
// Will something be undefined?no
// Why?
// To what scope does each variable belong? isEnough=>all the code , i=>fir scope
// Global or local? If local, to which specifically? isEnough=>global , i=> local


//JS This

//Spot Check 1
// const person = {
//   username: "bassel",
//   introduce: function(){
//     console.log("Hi, Iam "+this.username)
//   }
// }
// person.introduce()

//EXERCISE 1
// const person = {
//   hungry: true,

//   feed: function () {
//     if (this.hungry) {
//       hungry = false;
//       alert('Im no longer hungry!')
//     }
//   }
// }
// person.feed() //should alert "I'm no longer hungry"

//EXERCISE 2
// const pump = function (amount) {
//   this.liters += amount;
//   console.log('You put ' + amount + ' liters in ' + this.name);
// };

// const garage = {
//   car1: {
//     name: 'Audi',
//     liters: 3,
//     fillTank: pump
//   },
//   car2: {
//     name: 'Mercedes',
//     liters: 1,
//     fillTank: pump
//   }
// };
// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ',  garage.car1.liters);

// garage.car2.fillTank(30);
// console.log('Mercedes should have 31 liters: ', garage.car2.liters);

//EXERCISE 3
// const pumpFuel = function (plane) {
//   plane.fuel += 1;
// };

// const airplane = {
//   fuel : 1 ,
//   fly: function () {
//     if (this.fuel < 2) {
//       return 'on the ground!';
//     }
//     else {
//       return 'flying!';
//     }
//   }
// };

// console.log('The plane should not be able to fly (yet): ' + airplane.fly());

// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly());

// pumpFuel(airplane);
// console.log('Take off! ' + airplane.fly());

//EXERCISE 4
// const tipJar = {
//   coinCount: 20,
//   tip: function () {
//     this.coinCount += 1;
//   },
//   stealCoins : function(num){
//     this.coinCount-=num
//   }
// };

// tipJar.tip();
// console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

//EXERCISE 5
// const revealSecret = function () {
//   return this.secret;
// };
// const shoutIt = function (person, func) {
//   person.revealItAll = func;
//   const result = person.revealItAll();
//   alert(person.name + " said: " + result);
// };

//   const person = {
//    avi : {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   },
//     narkis : {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   }
// }
// shoutIt(person.avi, revealSecret);
// shoutIt(person.narkis, revealSecret);

// //EXERCISE 6
// const coffeeShop = {
//   beans: 40,

//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12
//   },

//   makeDrink: function (drinkType) {
//     // TODO: Finish this method
//       if(this.drinkRequirements[drinkType]==undefined){
//         alert("the drink not exist")
//       }
//       else if (this.drinkRequirements[drinkType]>this.beans){
//         alert ("we don't have much beans")
//       }
//       else {
//         this.beans-=this.drinkRequirements[drinkType]
//         alert("sa7a")
//       }

//    }
// }
// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"



//EXERCISE 6.1
// const coffeeShop = {
//   beans: 40,

//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12
//   },
//   makeDrink: function (drinkType) {
//     // TODO: Finish this method
//       if(this.drinkRequirements[drinkType]==undefined){
//         alert("the drink not exist")
//         return
//       }
//       if (this.drinkRequirements[drinkType]>this.beans){
//         alert ("we don't have much beans")
//       }
//       else {
//         this.beans-=this.drinkRequirements[drinkType]
//         alert("enjoy your drink")
//       }

//    }
// }
// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


// Extension 1
// const coffeeShop = {
//   // 1- bean = 1-money
//   money : 50 ,
//   beans: 40,

//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12
//   },
//   buyBeans : function(numBeans){
//     this.beans+=numBeans
//     this.money-=numBeans
//     console.log("The Beans you have after purchase : " + this.beans)
//     console.log("The Money you have after purchase : " + this.money)
//   },

//   makeDrink: function (drinkType) {
//     // TODO: Finish this method
//       if(this.drinkRequirements[drinkType]==undefined){
//         alert("the drink not exist")
//       }
//       else if (this.drinkRequirements[drinkType]>this.beans){
//         alert ("we don't have much beans")
//       }
//       else {
//         this.beans-=this.drinkRequirements[drinkType]
//         alert("sa7a")
//       }

//    }
// }
// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
// coffeeShop.buyBeans(23);

