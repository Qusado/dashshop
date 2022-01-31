import React, {useContext} from 'react'
import '../css/cc.css'

export const Lox = () => {

    const dragAndDrop = () => {
        const card = document.querySelector('.js-card');
        const cells = document.querySelectorAll('.js-cell');

        const dragStart = function () {
            console.log('start');
            setTimeout(() => {
               this.classList.add('hide');
            }, 0);
        };

        const dragEnd = function () {
            console.log('end');
            setTimeout(() => {
                this.classList.remove('hide');
            }, 0);
        };

        const dragOver = function (evt) {
            evt.preventDefault();
        };

        const dragEnter = function (evt) {
            this.classList.add('hovered');
            evt.preventDefault();
        };

        const dragLeave = function () {
            this.classList.remove('hovered');
        };

        const dragDrop = function () {
            this.append(card);
            this.classList.remove('hovered');
        };

        cells.forEach((cell)=>{
           cell.addEventListener('dragover', dragOver);
           cell.addEventListener('dragenter', dragEnter);
           cell.addEventListener('dragleave', dragLeave);
           cell.addEventListener('drop', dragDrop);
        });
        if(card){
            card.addEventListener('dragstart', dragStart);
            card.addEventListener('dragend', dragEnd);
        }


    };
    dragAndDrop();
        return(
            <div className="hero row">
                <div className="wrapper col-9">
                    <ul className="list">
                        <li className="list_cell js-cell">
                            <div className="list_card js-card" draggable="true">
                                <div className="list_card-info">
                                    task description
                                </div>
                            </div>
                        </li>
                        <li className="list_cell js-cell">

                        </li>
                        <li className="list_cell js-cell">

                        </li>
                        <li className="list_cell js-cell">

                        </li>
                        <li className="list_cell js-cell">

                        </li>
                        <li className="list_cell js-cell">

                        </li>
                    </ul>
                </div>
                <div className="col-3">

                </div>
            </div>

        )
}
