//setTimeout()
// setTimeout(()=>{
//     console.log("This is timing function")
// },5000);

// let time=function(){
//     console.log("this is timing function")
// }
// setTimeout(time,5000)

//setInterval()
// setInterval(()=>{
//     console.log("hello");
// },1000)


//clearInterval()
// let i=1;
// let data = setInterval(()=>{
//     console.log(i);
//     i++;
//     if(i>10){
//         clearInterval(data);
//     }
// },1000)

//clearTimeout()
// let data=setTimeout(()=>{
//     console.log('timings...')
// },5000)
// clearTimeout(data)





//task

// let time = new Date();
// console.log(time.toLocaleTimeString());
// document.body.append("Current time :" +time.toLocaleTimeString())



// let d = document.createElement('h1')
// document.body.append(d)
// setInterval(()=>{
//     let a=new Date()
//     d.innerHTML="<h1>current Time :"+a.toLocaleTimeString();
// })

// let i=10;
// let time = setInterval(()=>{
//     console.log(i);
//     i--;
//     if(i<5){
//         clearInterval(time)
//     }
// },1000)


// let data=setTimeout(()=>{
//     console.log("hello");
// },5000)

// let btn=document.getElementById('btn')
// btn.addEventListener('click',()=>{
//      clearTimeout(data);
// })


// let i=1;
// let click=setInterval(()=>{
//     console.log(i);
//     i++;
// },1000)

// let btn=document.getElementById('btn')
// btn.addEventListener('click',()=>{
//     clearInterval(click)
// })


let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
function signal() {
    one.style.backgroundColor = 'red';
    two.style.backgroundColor = 'white';
    three.style.backgroundColor = 'white';

    setTimeout(() => {
        one.style.backgroundColor = 'white';
        two.style.backgroundColor = 'yellow';
    }, 1000);

    setTimeout(() => {
        two.style.backgroundColor = 'white';
        three.style.backgroundColor = "green";
    }, 2000);

    setTimeout(() => {
        three.style.backgroundColor = 'white';
        one.style.backgroundColor = 'red';
    }, 3000);
}

// signal();
setInterval(signal, 3000);