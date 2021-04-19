// let fraction ={
//     numerator: "60",
//     denumerator: "50"
// }

// let fraction2 ={
//     numerator: "34",
//     denumerator: "12"
// }
//Addition of two fractions

// function sumOfObj(obj1, obj2){
//     let numer1 = obj1.numenator*obj2.denumerator;
//     let denum1 =  obj1.denumerator*obj2.denumerator;

//     let numer2 = obj2.numenator*obj1.denumerator;
//     let denum2 = obj2.denumerator*obj1.denumerator;

//     let sumNumer = numer1+numer2;

//         for(let i = denum1; i>0; i--){
//             if(sumNumer%i==0&&denum1%i==0){

//             let numbC = Math.floor((sumNumer/i)/(denum1/i))
//                 console.log(numbC +' '+(sumNumer/i-(denum1/i)*numbC)+'/'+denum1/i)
//                 break

//             }else{}
// }}
// sumOfObj(fraction, fraction2)

//Substraction of two fractions

// function subOfObj(obj1, obj2){
//     let numer1 = obj1.numenator*obj2.denumerator;
//     let denum1 =  obj1.denumerator*obj2.denumerator;

//     let numer2 = obj2.numenator*obj1.denumerator;
//     let denum2 = obj2.denumerator*obj1.denumerator;

//     let subNumer = numer1-numer2;

//         for(let i = numer1; i>0; i--){
//             if(subNumer%i==0&&denum1%i==0){

//                 console.log(subNumer/i+'/'+denum1/i)
//                 break

//             }else{}
// }}
// subOfObj(fraction, fraction2)

//Multiplication of two fractions

// function subOfObj(obj1, obj2){

//     let numer = obj1.numenator*obj2.numenator;
//     let denum =  obj1.denumerator*obj2.denumerator;

//         for(let i = denum; i>0; i--){
//             if(numer%i==0&&denum%i==0){
//                 let numbC = Math.floor(numer/denum)
//                 console.log(numbC +' '+(numer/i-(denum/i)*numbC)+'/'+denum/i)
//                 break
//             }else{}
// }}
// subOfObj(fraction, fraction2)

//Division of fractions

// function subOfObj(obj1, obj2){

//     let numer = obj1.numenator*obj2.denumerator;
//     let denum =  obj1.denumerator*obj2.numenator;

//         for(let i = denum; i>0; i--){
//             if(numer%i==0&&denum%i==0){
//                 let numbC = Math.floor(numer/denum)
//                 console.log(numbC +' '+(numer/i-(denum/i)*numbC)+'/'+denum/i)
//                 break
//             }else{}
// }}
// subOfObj(fraction, fraction2)

// Rounder

// function subOfObj(obj){
//         for(let i = obj.denumerator; i>0; i--){
//             if(obj.numerator%i==0&&obj.denumerator%i==0){
//                 let numbC = Math.floor((obj.numerator/i)/(obj.denumerator/i))
//                 console.log(numbC +' '+(obj.numerator/i-(obj.denumerator/i)*numbC)+'/'+obj.denumerator/i)
//                 break
//             }else{}
// }}
// subOfObj(fraction)


///Time - task2

// let time = {
// hours:0,
// minutes:0,
// seconds:0,
// }

// function timeShow(obj) {
//     console.log(obj.hours+':'+obj.minutes+':'+obj.second)
// }
// timeShow(time)

//change hours, minutes, seconds
// function timeShow(obj,secChange,minChange,hourChange) {
//     let hours = obj.hours+hourChange
//     let minutes = obj.minutes+minChange
//     let seconds = obj.seconds+secChange
    
//     if(seconds>59){
//         minutes=(minutes++)+(Math.floor(seconds/60))
//         seconds=seconds%60 
//     }
//     if(minutes>59){
//         hours=(hours++)+(Math.floor(minutes/60))
//         minutes=minutes%60
//     }
//     if(hours>23){
//         hours=1+Math.floor(hours/24)
//     }

//     console.log("Time: "+hours+':'+minutes+':'+seconds)
// }
// timeShow(time, 0,0,0)  
