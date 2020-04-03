const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUSer",
    SHOWING_CN = "showing";

/* handle Submit  start*/
function handleSubmit(event) {
    event.preventDefalt();
    const currentValue = input.value;
    console.log(currentValue);
}
/* handle Submit  end*/

/* ask for name  start*/
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
/* ask for name  end*/

/* paint greeting start*/
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello${text}`;
}
/* paint greeting end*/

/* loadName: 로컬 스토리지에 저장된 값을 가져오는 역할 */
function loadName() {
    const currentUSer = localStorage.getItem(USER_LS);
    if (currentUSer == null) {
        //person is not
        askForName();
        console.log("current user is empty");
    } else {
        //person is
        console.log("current user is not empty");
        paintGreeting(currentUSer);
    }
}
/* loadName end */
function init() {
    loadName();
}
init();