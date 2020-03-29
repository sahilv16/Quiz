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
        choiceB : "Raghavi",
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
        question : "",
        imgSrc : "https://i0.wp.com/kbcliv.in/wp-content/uploads/2019/09/mahabharata-kbc.jpg?w=1024&ssl=1",
        choiceA : "Goti Goel",
        choiceB : "Sahil",
        choiceC : "Singal",
        correct : "A"
    }
    
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
    }else{
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





















