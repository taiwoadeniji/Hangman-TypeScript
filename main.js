var _this;
var maxChances = 6;
var gameController = {
    form: document.querySelector('form'),
    input: document.querySelector('[name="guess"]'),
    word: document.querySelector('.word'),
    chances: document.querySelector('.chances'),
    previousGuesses: document.querySelector('.previous-guesses')
};
function Hangman() {
    this.runGame = true;
    this.words = [
        'abiogenesist',
        'galactometry',
        'bachelorhood',
        'tabularising'
    ];
    this.word = '';
    this.displayString = '';
    this.chances = maxChances;
    this.previousGuesses = [];
    this.run = function () {
        this.setup();
        _this = this;
        gameController.form.addEventListener('submit', this.guessLetter);
    };
    this.setup = function () {
        gameController.previousGuesses.innerHTML = '';
        this.previousGuesses = [];
        this.chances = maxChances;
        this.displayString = '';
        var i = Math.floor(Math.random() * this.words.length);
        this.word = this.words[i];
        for (var i = 0; i < this.word.length; i++)
            this.displayString += '_';
        gameController.word.textContent = this.displayString;
        gameController.chances.textContent = this.chances;
        console.log(this.word);
    };
    this.guessLetter = function (event) {
        event.preventDefault();
        if (_this.word.includes(gameController.input.value)) {
            for (var i = 0; i < _this.word.length; i++) {
                var currentChar = _this.word.substr(i, 1);
                if (currentChar === gameController.input.value) {
                    _this.displayString =
                        _this.displayString.slice(0, i) +
                            currentChar +
                            _this.displayString.slice(i + 1, _this.displayString.length);
                    gameController.word.textContent = _this.displayString;
                }
            }
            if (!gameController.word.textContent.includes('_')) {
                _this.win();
            }
        }
        else {
            _this.chances--;
            gameController.chances.textContent = _this.chances;
            if (_this.chances == 0) {
                _this.lose();
            }
        }
        gameController.input.value = '';
    };
    this.win = function () {
        if (confirm('You win! Play again?')) {
            this.setup();
        }
    };
    this.lose = function () {
        if (confirm('You lose! Play again?')) {
            this.setup();
        }
    };
}
;
var functiongame = function (newHangman) {
    return "run" + newHangman;
};
//# sourceMappingURL=main.js.map