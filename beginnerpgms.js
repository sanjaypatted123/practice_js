console.log('hello')

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


//3.callback function chained

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


//4.creating a promise example

function checkAge(age){
    return new Promise((resolve,reject)=> {   // new promise is created
        if(age>18){                             //if resolve case
            resolve('access grabted');
        }else{                                  //if reject case
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


//5.fetching a simple userdata predefined (fake data like an API)
function fetchUseData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const userData={            //pre defined data for fetching
                id:1,
                name:'sanju',
                email:'sanju@gmail.com'

            };
            resolve(userData);// i am always resolving promise using resolve
        },2000);
    });
}

fetchUseData()
.then(user=>{
    console.log('data recived:',user);

})
.catch(error=>{                 //for just having safe case if error occurs it is catched
    console.log('error:',error);
})


//practicing the async and await now 

//delaying the async function here


function delay(milli_sec) {
    return new Promise(resolve => setTimeout(resolve, milli_sec));
}


async function delay_for_two_sec(){
    console.log('wating for time');
    await delay(2000);
    const data={
        name:'sanju',
        place:'Bangalore',
        date:'30th April 2025'
    };
    alert('success!!!!! Data is received >>>click to view data')
    console.log('Data:',data);
}

delay_for_two_sec();


//practicing the promise


function simulateDownload(){
    return new Promise((resolve,reject)=>{
        console.log('starting download......');
        setTimeout(()=>{
            const success=true;
            if(success){
                resolve('download complete !!!!');
            }else{
                reject('xxxxxx download failed xxxxxx');
            }
        },2000);
    });
}


simulateDownload()
    .then(result=>{
        console.log('success :',result);
    

    })
    .catch(error=>{
        console.log('error :',error);
    });



//same above example using async and await but instead of then and catch

async function startDownload(){
    try{
        const result=await simulateDownload();
        console.log('success',result);

    }catch(error){
        console.log('error',error)

    }
}
startDownload();



//fetching some user data given in resolve:
function loginUser(username){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`logging in as ==> ${username} `);
            console.log('<<<<this is waiting time>>>')
            resolve({ username: username });
        }, 1000);
    });
}


function getUserData(user){
    return new Promise((resolve)=>{
        setTimeout(() => {
        console.log('fetched user details ');
        resolve({user:user,
                age:25,
                email:'sanjay@gmail.com'
                });    
        }, 1500);
    })
}

async function start(){
    try{
        const user=await loginUser('sanjay');
        const profile=await getUserData(user);
        console.log('login was successfull !!!!');
        console.log('profile :',profile);
    }catch(error){
        console.log('something went wrong:',error);

    }
}
start();
//this is how workflow happens in real apps and then update with the ui 


//pausing the execution using await
function getMsg(){
    console.log('this is getMsg function mesage');
    console.log('next here below it is printing the actual msg that is from greet async func')
    return new Promise(resolve => resolve("Hello"));
    
}
async function greet() {
    const msg=await getMsg();
    console.log(msg);
}
greet();

// here we can also add setTimout to just delay the printing or fetching the message


