

const inputEvent = document.getElementById("input");
const submitEvent = document.getElementById("buttons");
const canvas =  document.getElementById("myCanvas");
const firstButtonEvent = document.getElementById("first_button");
const secondButtonEvent = document.getElementById("second_button");
const thirdButtonEvent = document.getElementById("third_button");
const fourthButtonEvent = document.getElementById("fourth_button");
var clicks = 0;
var clickSecond = 0;
var clickThird = 0;
var clicksFourth = 0;

function chat(){
    if(inputEvent.value == "Hello" || "hello"){
        inputEvent.value = '';
        const ctx = canvas.getContext('2d');
        ctx.font = '60% Arial';
        ctx.fillStyle = 'Black';
        ctx.globalAlpha = 1.0;
        ctx.fillText('HI, choose options from side of your liking',10,50);
    }
}

function meme(){
    const array = ["https://play-lh.googleusercontent.com/cJokjWYV_EhTZJvJG0zbV6CowN5V8EoyjzF4LssGyjhTo6rAVntx3XjD7AkBQ2IdFKw=w240-h480","https://www.theinterrobang.ca/images/interrobang/030819/B8QC6DAZ9PWRK7M2.jpg","https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be6ace19c29d4e0cec7_LuyYKvSMNsoK3_Kgkfbw9Cwf-vF7gFtOyUnT6TogZ8vuN81S8hQWSTUh4_TpjkdUlQjr_0cOXJL2SyPT4KjX-RAVudOV7AH4JyP3K-zzaYIVCrvIpA31aoqB7dBjwSglYaJuFR4R.png"];
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.onload = function() {
        ctx.drawImage(image,0,0);
    };
    if (clicks < 3){
        image.src = array[clicks];
    }else{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText('thats it for today',10,50);
    }
    
}

function joke(){
    const array = ["Why don't scientists trust atoms?","What do you call a fish with no eyes?","Why don't skeletons fight each other?"];
    const array_ans = ["Because they make up everything!", "Fsh", "They don't have guts"];
    const ctx = canvas.getContext('2d');
    ctx.font = '60% Arial';
    ctx.fillStyle = 'Black';
    ctx.globalAlpha = 1.0;
    if (clickSecond < 3){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText(array[clickSecond],10,50);
        const value = clickSecond;
        setTimeout(function(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillText(array_ans[value],10,50);
        },3000)
        
    }else{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText('thats it for today',10,50);
    }
}

function Quote(){
    const array = ["No one who does good work will ever come to a bad end, \neither here or in the world to come","Whatever is going to happen, \nit happens and what is not going to happen will never happen, \nthose whose intellects have such a determination, they never get worried."]
    const ctx = canvas.getContext('2d');
    ctx.font = '60% Arial';
    ctx.fillStyle = 'Black';
    ctx.globalAlpha = 1.0;
    if (clickSecond < 2){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText(array[clickThird],10,50);
        const value = clickSecond;
        setTimeout(function(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
        },4000)
        
    }else{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText('thats it for today',10,50);
    }
}

function Riddle(){
    const array = ["The more you take, the more you leave behind. What am I?","I speak without a mouth and hear without ears. I have no body, but I come alive with wind."]
    const array_ans = ["footsteps","echo"];
    const ctx = canvas.getContext('2d');
    ctx.font = '60% Arial';
    ctx.fillStyle = 'Black';
    ctx.globalAlpha = 1.0;
    if (clickSecond < 2){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText(array[clicksFourth],10,50);
        if(inputEvent.value == "footsteps" || "Footsteps"){
            inputEvent.value = '';
            const ctx = canvas.getContext('2d');
            ctx.font = '60% Arial';
            ctx.fillStyle = 'Black';
            ctx.globalAlpha = 1.0;
            ctx.fillText('That was the answer try another click for anyother riddle',10,50);
        }
        
    }else{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillText('thats it for today',10,50);
    }
}

submitEvent.addEventListener("click",chat);
firstButtonEvent.addEventListener("click",function() {
    meme();
    clicks++;
});
secondButtonEvent.addEventListener("click",function() {
    joke();
    clickSecond++;
});
thirdButtonEvent.addEventListener("click",function() {
    Quote();
    clickThird++;
});
fourthButtonEvent.addEventListener("click",function() {
    Riddle();
    clicksFourth++;
});

