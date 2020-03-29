
// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
     {
        question : "Chandila pe kitna paisa hai ?",
        imgSrc : "https://img.etimg.com/thumb/width-640,height-480,imgsize-94334,resizemode-1,msid-66159360/fall-in-rupee-not-bad-news-for-students-going-overseas.jpg",
        choiceA : "Andha",
        choiceB : "Bhatera",
        choiceC : "Theek Theek",
        correct : "A"
    },
    {
        question : "Tarun Chandila ke kitne school hai ?",
        imgSrc : "https://scontent.fdel3-1.fna.fbcdn.net/v/t31.0-8/14289949_1184779038261250_5735890412364153543_o.jpg?_nc_cat=103&_nc_sid=6e5ad9&_nc_ohc=2AQeCn9AE3YAX-0a0Mi&_nc_ht=scontent.fdel3-1.fna&oh=6a79a0cc8bd1207f7167fc0880f6b5a1&oe=5EA77B8F",
        choiceA : "3",
        choiceB : "1",
        choiceC : "4",
        correct : "A"
    },{
        question : "Tarun Chandila ka TV kitne ka hai ?",
        imgSrc : "https://cdn.vox-cdn.com/thumbor/VekRcKwWh4hGMSBSUgY7-TTjJzo=/0x0:2040x1360/1220x813/filters:focal(953x533:1279x859):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62796564/DSCF1117.1546830817.jpg",
        choiceA : "50,000",
        choiceB : "12cr",
        choiceC : "2cr",
        correct : "B"
    },{
        question : "Tarun life me kya ban na chahta hai ?",
        imgSrc : "https://cdn2.vectorstock.com/i/1000x1000/84/21/bureaucrat-vector-788421.jpg",
        choiceA : "Politician",
        choiceB : "Investment Banker",
        choiceC : "bureaucrat",
        correct : "C"
    },
    {
        question : "Tarun ne first ball par kitne run mare hain ?",
        imgSrc : "https://static.india.com/wp-content/uploads/2019/07/Rohit-Sharma-celebrates-after-scoring-27th-ODI-century-during-ICC-Cricket-World-Cup-match-vs-Sri-Lanka-at-Headingley_BCCI-Twitter.jpg",
        choiceA : "6",
        choiceB : "1",
        choiceC : "0",
        correct : "A"
    },
    {
        question : "Goti ko kiske sapne aate hain ?",
        imgSrc : "https://images.sadhguru.org/sites/default/files/media_files/11487-bigstock-woman-lighting-stars-47940332.jpg",
        choiceA : "Chandila",
        choiceB : "Kanika",
        choiceC : "Muskan",
        correct : "A"
    },
    {
        question : "Konsi ladki chandila ke pyar me pagl hai ?",
        imgSrc : "https://honknews.com/wp-content/uploads/2020/03/200128-selena-gomez-ew-245p_0141ebad6123e7e0074bcb5df1322d32.jpg",
        choiceA : "BBA vali",
        choiceB : "Bhavini",
        choiceC : "Muskan Chawla",
        correct : "C"
    },
    {
        question : "Ye ques kisne bnaye hain ?",
        imgSrc : "https://i0.wp.com/kbcliv.in/wp-content/uploads/2019/09/mahabharata-kbc.jpg?w=1024&ssl=1",
        choiceA : "Goti Goel",
        choiceB : "Sahil",
        choiceC : "Singal",
        correct : "A"
    },
     {
        question : "Chandila se sbse zyda nafrat kon krta hai ?",
        imgSrc : "https://3.bp.blogspot.com/-Riw47GMvKrw/XIYnKAJOGBI/AAAAAAAARGs/Vm1q2-m0KcU3bJVnJIKAeePTFi1hHqmCwCLcBGAs/s1600/Nafrat-Shayari-in-Hindi.jpg",
        choiceA : "Kanishk",
        choiceB : "Rishik",
        choiceC : "Vansh",
        correct : "A"
    },
    {
        question : "Chandila ka nick name kya hai ?",
        imgSrc : "https://appellationmountain.net/wp-content/uploads/2013/04/Nick-Names.jpg",
        choiceA : "Tanki",
        choiceB : "Chandu",
        choiceC : "Tannu",
        correct : "A"
    },
    {
        question : "Chandila ka future plan kya hai ?",
        imgSrc : "https://3.imimg.com/data3/MA/NF/MY-14063158/bussiness-services-500x500.png",
        choiceA : "Politics",
        choiceB : "Gupta ka katl",
        choiceC : "Dairy products(Chandu Dairy)",
        correct : "C"
    },
    {
        question : "Bakchodi krne pe chandila kya krta hai ?",
        imgSrc : "data:image/jpeg;base64,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",
        choiceA : "Koi nii chood",
        choiceB : "OOOO Bataun Tujhe",
        choiceC : "Sunn tujhe na main yahi bt dunga",
        correct : "A"
    },
    
    
    
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 30; // 30s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }
    else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















