const boardElement = document.getElementById('gameboard');
boardElement.innerHTML = `
<!-- gameboard squares -->
<div class="col-3 board-square ">
    <div class="face-container">
        <div class="facedown"></div>
        <div class="faceup"></div>

    </div>
</div>`;
console.log(boardElement);
