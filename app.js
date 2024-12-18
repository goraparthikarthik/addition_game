let first_number = document.getElementById('firstNumber');
let second_number = document.getElementById('secondNumber');
let user_input = document.getElementById('userInput');
let game_result = document.getElementById('gameResult');

function restart_button() {
    let first_random_number = Math.ceil(Math.random() * 100);
    let second_random_number = Math.ceil(Math.random() * 100);
    first_number.textContent = first_random_number;
    second_number.textContent = second_random_number;
    user_input.value = "";
    game_result.textContent = "";
}
restart_button();


function check_button() {
    let num_1 = parseInt(first_number.textContent);
    let num_2 = parseInt(second_number.textContent);
    let sum = num_1 + num_2;
    let input = parseInt(user_input.value);
    
    if (sum === input) {
        game_result.textContent = "Congratulations! You got it right!";
        game_result.style.backgroundColor = "#028a0f";
    }
    else {
        game_result.textContent = "Please Try Again!";
        game_result.style.backgroundColor = "#1e217c";
    }
    
}