//ex-1
// const calcAge =function(currentYear,birthYear){
//     let sum = currentYear-birthYear
//     return sum
// }
// const age = calcAge(2017, 1989)
// console.log(age)

//ex-2
// const calcAge =function(currentYear,birthYear){
//         let sum = currentYear-birthYear
//         let addyears = sum + 1
//         console.log("you are " + sum + " OR " + addyears)
//     }
//     const age = calcAge(2017, 1989)
   
//ex-3
// const isEven =function(Number){
//       if(Number%2==0){
//           return true
//       }
//       else if (Number%2==1){
//           return false
//       }
//     }
//     const checkIfeven = isEven(73)
//     if(checkIfeven==true){
//         console.log("the number is Even , congrats")
//     }
//     else console.log("its odd number try another one")
    
//ex-4
// const findOdds = function(numbers){
//     for(let num of numbers){
//       if(num % 2== 1){
//         console.log(num)
//       }
//     }
//   }
// const numbers = [17, 21, 9, 34,35,70,100,90,95,49,23,14,82,45,88,70,71]
// const odd = findOdds(numbers)


//ex-5
// const findNumber = function(numbers,index){
//     for (let n of numbers)
//         if(n==index){
//             return true
//         }
        
//         return false
//     }
//     const nums = [17, 21, 9, 34,35,70,100,90,95,49,23,14,82,45,88,70,71]
//     const isExist = findNumber(nums,50)
//     if(isExist==true){
//         console.log("yeah its here")
//     }
//     else console.log("its not exist")

//ex-6
// const calculator = {
//     add: function(number1,number2){let result1 = number1+number2
//     return result1 },
//     subtract: function(number3,number4) { let result2 = number3-number4
//     return result2 }
// }
//     const result1 = calculator.add(20, 1)
//     const result2 = calculator.subtract(30, 9)

//     console.log(calculator.add(result1, result2)) //should print 42

//ex-7

// const increaseByNameLength = function(money, name){
//      return name.length*=money
// }
// const makeRegal = function(name){
//    return  "His Royal Highness "+ name
// }
// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)
//     console.log(name + " has " + money + " gold coins")
// }
// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
  


// Functions Mini Lesson - Optional!

// const capitalize = function(str){
//   let capitalizedStr = ""
//   capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
//   capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
// }
// const getSummary = function(person){
//     let summary = ""//modify the summary string with the person parameterreturn summary
//    let name = person.name.toUpperCase()
//    let profession = person.profession.toUpperCase()
//    let adress = person.country.charAt(0).toUpperCase()+person.country.slice(1) + "," + person.city.charAt(0).toUpperCase()+person.city.slice(1)
//    let age
//    if(person.age<21){
//         age = " His/Her Underage "
//    }
//    else if(age>55){
//         age = " His/Her 55+ "
//    }
//    else age="His/Her age is : " + person.age
//    let catchphrase = person.catchphrase.charAt(0).toUpperCase()+person.catchphrase.slice(1)

//    return name + "\n"  + profession + "\n" + adress + "\n"  + age + "\n"  + catchphrase
//   }
// people_info = [
//     {
//       name: "guido",
//       profession: "bungalow builder",
//       age: 17,
//       country: "canaland",
//       city: "sydurn",
//       catchphrase: "what a piece of wood!"
//     },
//     {
//       name: "petra",
//       profession: "jet plane mechanic",
//       age: 31,
//       country: "greenmark",
//       city: "bostork",
//       catchphrase: "that's my engine, bub"
//     },
//     {
//       name: "damian",
//       profession: "nursery assistant",
//       age: 72,
//       country: "zimbia",
//       city: "bekyo",
//       catchphrase: "with great responsibility comes great power"
//     }
//   ]
//   for(let i = 0 ; i<people_info.length;i++){
//   const summary = getSummary(people_info[i])
//   console.log(summary)
//   }