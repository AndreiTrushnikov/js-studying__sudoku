export default class View {
    constructor(props) {
        this.gameContainer = props.gameContainer;
        if (!this.gameContainer) throw new Error('На странице не найден главный блок');
    }

    drawField() {
        return `
               <div class="field">
                ${this.createFieldTitle()}
                ${this.createMainField()}
                ${this.createNumbers()}
            </div>
        `
    }

    createMainField() {
        let $cells = this.createCells();
        return `
            <div class="cells">
                ${$cells}
            </div>
        `
    }

    createCells() {
        let cells = "";
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= 9; j++) {
                cells += this.createCell(i, j);
            }
        }

        return cells;
    }

    createCell(i, j) {
        return `
            <span data-y="${i}" data-x="${j}">9</span>
        `
    }

    createFieldTitle() {
        return `
            <div class="field-title" id="title">
                <h3>SUDOKU 9x9</h3>
            </div>
        `
    }

    createNumbers() {
        let numbers = "";
        for (let i = 1; i <= 9; i++) {
            numbers += `<button type="button" class="numbers-btn" data-number="${i}">${i}</button>`
        }

        return `
        <div class="numbers">
            ${numbers}
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