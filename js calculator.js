(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    // let operator = ['+', '-', '*', '/'];

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {

            let value = e.target.dataset.num;
            screen.value += value;


            // if (operator.includes(value)) {
            //     screen.value += value;
            // } else {
            //     value = parseInt(value);
            //     screen.value += value;
            // }
        })
    });

    equal.addEventListener('click', function(e) {
        // console.log(eval(screen.value))
        if (screen.value === '') {
            screen.value = " ";

        } else {
            // console.log(screen.value)
            let answer = eval(screen.value);

            screen.value += ' = ' + answer;
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = "";
    });

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            var audio = new Audio("button.wav");
            audio.play();
        })
    });
})();

// var audio = new Audio("./audios/button.wav");

// document.onclick = function() {
//     audio.play();
// }

// function audio() {
//     var audio = new Audio("./audios/button.wav");
//     audio.play();
// }