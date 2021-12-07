
const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    'b',
    'a'
];

let keyArray = [];


function resultElem(text1, text2) {
    const resultElem = document.querySelector(".result-signal");

    resultElem.innerHTML = `
    <h2> ${text1} <br> 
    ${text2}</h2>
    `;

    resultElem.classList.add("appear");
}

function keyExecuter() {

    if (JSON.stringify(keyArray) == JSON.stringify(konamiCode)) {
        console.log('Konami Code Activated')
        const text1 = 'Konami Code Activated!'
        const text2 = ""
        resultElem(text1, text2);
    }


    else {
        console.log('Wrong Code, Try again');
        const text1 = 'Wrong Code!';
        const text2 = "Please Try Again";
        resultElem(text1, text2);
    }

    keyArray = [];
}

function keyMonitor(event) {
    const { key } = event;

    // store keyDown events in array form by spread operator
    keyArray = [...keyArray, key]
    console.log(keyArray);

    const submit = document.querySelector('#key-executer');
    submit.addEventListener('click', keyExecuter);
}

function run() {
    const inputSignalElem = document.querySelector("#append-signal");
    const startTextElem = document.querySelector('.start-text');

    inputSignalElem.addEventListener("click", () => {
        startTextElem.classList.toggle("appear");

        // involke key handler here
        window.addEventListener('keydown', keyMonitor)
    });

}



run();

