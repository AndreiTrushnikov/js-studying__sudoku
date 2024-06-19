import 'core-js/stable'
import 'regenerator-runtime/runtime'

export default class Model {
    constructor(props) {
        this.minNumber = 1;
        this.maxNumber = 9;

        this._secretNumbers = [];

        this._userNumbers = {};
        this.response = {
            innerHTML: '',
            error: false,
            winner: false
        };

        this.gameContainer = props.gameContainer;
    }
    getRandomUniqueNumber() {
        let curNumber = this.getRandomNumber();
        if (this._secretNumbers.includes(curNumber)) {
            curNumber = this.getRandomUniqueNumber();
        }
        return curNumber;
    }
    getRandomNumber() {
        return Math.floor(Math.random() * (this.maxNumber - this.minNumber)) + this.minNumber;
    }

    addEventListener() {
        this.gameContainer.addEventListener('click', (e) => {
            if (e.target.nodeName === 'SPAN' && e.target.dataset.x) {
                this.clearPreviousActiveCell();
                this.addCurrentActiveCell(e.target);
            }
        })
    }

    clearPreviousActiveCell() {
        this.gameContainer.querySelector('span.active')?.classList.remove('active');
    }

    addCurrentActiveCell(target) {
        target.classList.add('active');
    }

    /*
    * Метод по созданию массива с данными
     */
    _createDataArray() {

    }

    init() {
        this.addEventListener();
    }
}