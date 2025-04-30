//console.log('hello')

//beginner programs
//1.to delay the logger>>>>

setTimeout(()=>{
    console.log('printed after 2 seconds');
},2000);


//2.countdown timer >>>>>


let sec=10;
const countdown= setInterval(() => {
    console.log(sec);
    sec--;
    if (sec<0){
        clearInterval(countdown)
        console.log('Times Up!!!!!'); 
    } 
}, 1000);


//callback function chained

function step1(callback){
    setTimeout(()=>{
        console.log('step1 log');
        callback();
    },1000);
}

function step2(callback){
    setTimeout(()=>{
        console.log('step2 log');
        callback();
    },1000);
}
function step3(){
    setTimeout(()=>{
        console.log('step3 log');
        
    });
}
console.log('printed by unorder')
   
step1(()=>{
    step2(()=>{
        step3();
    });
});


//creating a promise example

function checkAge(age){
    return new Promise((resolve,reject)=> {
        if(age>18){
            resolve('access grabted');
        }else{
            reject('no acsess must be 18 or old');
        }
    });
}

checkAge(20)
.then(msg=>{
    console.log('success:',msg);

})
.catch(err=>{
    console.log('error:',err);
});


//fetching a simple userdata predefined
function fetchUseData(){
    return new Promise((yes,no)=>{
        setTimeout(()=>{
            const userData={
                id:1,
                name:'sanju',
                email:'sanju@gmail.com'
            };
        })
    })
}