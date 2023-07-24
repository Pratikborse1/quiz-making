// print quiz user name in welcome section and in question page.
printname = () => {
  let user = document.querySelector(".input_value").value;
  document.getElementById("user_message").innerHTML = "Hey!" + " " + user;
  document.getElementById("wish_name").innerHTML = user;
};




let answer_option = document.querySelector(".answer_option");
let mainPage = document.getElementById("mainPage");

let seeresult = document.querySelector(".see_result_btn");
let question_category;
let question_count = 0;
let slNo = 1;
// selecting one category category and fetch questions.
let questions = document.querySelector("#question_box .questions");
let categoryButtons = document.querySelectorAll(".questionsCategory");

let question_box = document.getElementById("question_box");
//After selecting a category remove main page and show question page
categoryButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    question_category = QUESTIONS[event.currentTarget.dataset["category"]];
    mainPage.style.display = "none";
    question_box.style.display = "block"

    showQuestion(
      0,
      questions,
      QUESTIONS[event.currentTarget.dataset["category"]]
    );
    questionCount(1, QUESTIONS[event.currentTarget.dataset["category"]]);
    let categoryName = document.getElementById("categoryName");
    categoryName.innerHTML = event.currentTarget.dataset["category"];
    // display next buton when clicken on any option. and show see result button when clicked on last question option
    answer_option.addEventListener('click', () => {
      if (question_count < question_category.length - 1) {
        next_btn.style.display = "block";
      } else {
        seeresult.style.display = "block";
      }
    });


    // next button for each questions and hide next question button when getting a new question
    let next_btn = document.querySelector("#next");
    next_btn.addEventListener('click', () => {
      next_btn.style.display = "none";
      if (question_count < question_category.length - 1) {
        question_count++;
        slNo++;
        showQuestion(question_count, questions, question_category);
        questionCount(slNo, question_category);
      }
    });
  });
});



let option_list = document.querySelector(".answer_option");
let button = document.querySelector(".option");
//question couunter
questionCount = (index, myApp) => {
  let top_ques_counter = question_box.querySelector(".question_count");
  let totalQuestioncount = "<span>" + index + " / " + myApp.length + "</span>";
  top_ques_counter.innerHTML = totalQuestioncount;
};
//getting question and storing user answer
showQuestion = (index, elementId, myApp) => {
  let question = myApp[index].question;
  counter();
  let show_question = "<span>" + slNo + ". " + question + "</span>";
  let show_options =
    '<span class="option">' +
    myApp[index].options[0] +
    "</span>" +
    '<span class="option">' +
    myApp[index].options[1] +
    "</span>" +
    '<span class="option">' +
    myApp[index].options[2] +
    "</span>" +
    '<span class="option">' +
    myApp[index].options[3] +
    "</span>";
  elementId.innerHTML = show_question;
  option_list.innerHTML = show_options;



  // finding correct answer
  let option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
};
//creating scores
let score = 0;
let correctAns = 0;
optionSelected = (answer) => {
  let userAns = answer.textContent;
  let correctAns = question_category[question_count].answer;
  let scoreShow = document.querySelector("#score");
  scoreShow.innerText = "score";

  let allOptions = option_list.children.length;
  if (userAns == correctAns) {
    answer.classList.add("correct");
    score++;
    scoreShow.innerHTML = "Score :" + score;
    correctAns++;
  } else {
    answer.classList.add("incorrect");
    scoreShow.innerHTML = "Score :" + score;
    //if answer is incorrect  then automatically select the correct answer
    for (let i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correctAns) {
        option_list.children[i].setAttribute("class", "option correct");
      }
    }
  }
  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
};
//timer section
var timeleft = 300;
var element = document.querySelector("#timer");
var timerId = setInterval(counter, 1000);
function counter() {
  if (timeleft == 00) {
    clearTimeout(timerId);
    showResult();
  } else {
    element.innerHTML = timeleft;
    timeleft--;
  }
}
//show result box after all questions
let result_box = document.getElementById("result_box");
showResult = () => {
  mainPage.style.display = "none";
  question_box.style.display = "none"
  result_box.style.display = "block";


  //user name showing in result box
  let name = document.getElementById("user_name");
  let user = document.querySelector(".input_value").value;

  name.innerHTML = user + "<br>";
  //Total time take for this quiz
  let time_taken = 300 - timeleft;
  result_box.querySelector("#total_time_taken").innerHTML = "<b>Total Time Taken : </b>" + time_taken + " Seconds";



  //correct answer answered
  correct = score;
  correctAns = document.querySelector("#correct_answers").innerHTML = "<b>Correct : </b>" + correct;
  //total no of wrong answers
  let totalQuestion = 10;
  let wrong = totalQuestion - score;
  document.querySelector("#wrong_answers").innerHTML = "<b>Wrong : </b>" + wrong;



  // score in percentage
  let percentage = (score / totalQuestion) * 100 + " %";
  document.querySelector("#result_in_percent").innerHTML = "<b>Percentage : </b>" + percentage;
};
// Go back home page
let homePage = document.querySelector(".homePage");
homePage.onclick = () => {
  location.reload();
};
// Restart Page.
let restart = document.querySelector(".restart");
restart.onclick = () => {
  location.reload();
};