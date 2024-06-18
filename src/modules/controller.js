// listeners

import View from "./view";
import Model from "./model";

export default class Controller {
    constructor({view, model, gameContainer, lengthOfSecretNumber}) {
        this.view = view;
        this.model = model;
        this.gameContainer = gameContainer;
        this.view.init();
    }

    addEventListeners() {
    }

    handleStartNewGame() {
        const controller = new Controller({
            view: new View({
                gameContainer: this.gameContainer,
            }),
            model: new Model({
                gameContainer: this.gameContainer,
            }),
            gameContainer: this.gameContainer,
        });
        controller.init();
    }


    init() {
        this.addEventListeners();
        this.model.init();
    }
}