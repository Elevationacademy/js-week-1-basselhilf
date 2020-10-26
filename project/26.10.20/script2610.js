//ex-1
// let Names = ["bassel", "dany", "amro", "lior"]
// let Ages = [23, 26, 22, 25]
// for(let i =0 ; i<Names.length;){
//     for(let j=0;j<Ages.length;j++){
//         console.log(Names[i]+" is "+Ages[j]+" yaers old")
//         i++
//     }
// }
  
//ex-2
// let Numbers = [23, 26, 22, 25,23,25,4,5,6,8,15]
// let count=0
// let sum=0
// for(let i=0;i<Numbers.length;i++){
//     sum+=Numbers[i]
//     count++;
//  }
//     console.log(sum)

 //ex-3
//  let average=0
//  average=sum/count
//  console.log(average)

//ex-4
// let nums = []
// let i=0
// while(i<100){
//     nums[i++]=i
// }
// console.log(nums)

//ex-5
// for(let j=0;j<nums.length;j++){
//     if(nums[j]%2==0)
//     console.log(nums[j])
//     }

//ex-6
// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// for(let i=0;i<nums.length;i++){
//     if(nums[i]==709){
//         console.log(i)
//     }
// }

let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
for(let companyIndex in companies){
    console.log(companies[companyIndex])
  }

  for(let company of companies){
    console.log(company)
  }