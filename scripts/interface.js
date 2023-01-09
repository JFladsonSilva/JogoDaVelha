document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

})

const handleClick = (event) => {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => alert('Fim de Jogo'), 10)
    }
    updateSquares(position);
}

// const updateSquares = () => {
//     let squares = document.querySelectorAll(".square")

//     squares.forEach((square) => {
//         let postion = square.id;
//         let symbol = board[postion];

//         if (symbol !== '') {
//             square.innerHTML = `<div class='${symbol}'> </div>`
//         }
//     })
// }

const updateSquares = (position) => {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'> </div>`

}