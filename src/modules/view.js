export default class View {
    constructor(props) {
        this.gameContainer = props.gameContainer;
        if (!this.gameContainer) throw new Error('На странице не найден главный блок');
    }

    drawField() {
        return `
               <div class="field">
                ${this.createFieldTitle()}
                <div class="field__answers" id="answers"></div>
            </div>
        `
    }

    createFieldTitle() {
        return `
            <div class="field__title" id="title">
                <h3>SUDOKU 9x9</h3>
            </div>
        `
    }

    insertField() {
        this.gameContainer.innerHTML = this.drawField();
    }
    init() {
        this.insertField();
    }
}