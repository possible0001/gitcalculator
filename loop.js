
let weekday = ['sunday','Monday','Tuesday','Wednesday','Thursday','Frayday','Saturday']
for(let i =0; i<weekday.length; i++){
    console.log(`Day ${i+1}: ${weekday[i]}`)
}

let myhour = new Date().getHours()
let day = new Date().getDay()

let mysession;

if(myhour<12){
    mysession= 'Morning'
}else if(myhour<16){
    mysession='Afternoon'
}else {
    mysession='evening'
}

if(day==0){
    console.log(`Good ${mysession}, Happy sunday`)
}else if(day==5){
    console.log(`Good ${mysession}, TGIF`)
}else if(day==6){
    console.log(`Good ${mysession}, Today is Saturday`)
}else if(day>=1 && day<=4){
    console.log(`Good ${mysession}, Today is ${weekday[day]}, Get up and work!`)
}




function basit(){
    let courses = document.querySelectorAll('p')
    for(let i=0; i<courses.length; i++){
        courses[i].style.background='blue'
    }
}




// for(let s=40; s<70; s++){
//     if(s%2==1){
//         continue
//     }
//     console.log(s)
// }

for(let s=40; s<70; s++){
    if(s % 2 == 0 || s % 3 == 0 || s % 5 == 0 || s % 7 == 0){
        continue
    }
    console.log(s)
}

let prime= prompt('Enter a prime number');
let s;
if(prime<40 || prime>70 || isNaN(prime)){
    console.log('invalid number')
}else{
    for(s=2; s<prime; s++){
        if(prime%s==0){
            console.log(`${prime} is not a prime number`)
            break;
        }
    }
    if(prime==s){
        console.log(`${prime} is a prime number`)
    }
}
