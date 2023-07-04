const chessboard = document.querySelector("#chessboard");
const playerDisplay = document.querySelector("#player");
const width = 8;
let playerGo = 'white'
playerDisplay.textContent = "white"

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
]

function createBoard(){
    startPieces.forEach((startPieces , i) => {
        const row = Math.floor( i / 8);
        const newChessCase = document.createElement("div")
        newChessCase.classList.add('chessCase')
        newChessCase.setAttribute('case-id',i)
        newChessCase.innerHTML = startPieces
        newChessCase.firstChild && newChessCase.firstChild.setAttribute('draggable', true)
        if(row % 2 == 0){
            if(i % 2 != 0){
                newChessCase.classList.add('black')
            }else{
                newChessCase.classList.add('aquamarine')
            }
        }
        else{
            if(i % 2 == 0){
                newChessCase.classList.add('black')
            }else{
                newChessCase.classList.add('aquamarine')
            }
        }
        if (i <= 15){
            newChessCase.firstChild.firstChild.classList.add('white')
        }else if (i >= 48){
            newChessCase.firstChild.firstChild.classList.add('black')
        }
        chessboard.appendChild(newChessCase)
    })
}
createBoard()

const allCases = document.querySelectorAll("#chessboard .chessCase")

allCases.forEach(chessCase => {
    chessCase.addEventListener('dragstart', dragStart)
    chessCase.addEventListener('dragover', dragOver)
    chessCase.addEventListener('drop', dragDrop)
})

let draggedElement
let startPosition

function dragStart(e){
    draggedElement = e.target
    startPosition = e.target.parentNode.getAttribute('case-id')
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e){
    e.stopPropagation()
    const correctGo = draggedElement.firstChild.classList.contains(playerGo)
    const taken = e.target.classList.contains('piece')
    const valid = checkIfValid(e.target)
    const opponentGo = playerGo === 'white' ? 'black' : 'white'

    const takenByOpponent = e.target.firstChild?.classList.contains(opponentGo)

    if(correctGo){
        if(takenByOpponent && valid){
            e.target.parentNode.append(draggedElement)
            e.target.remove();
            changePlayer();
            return
        }
        if(taken && takenByOpponent){
            return
        }
        if(valid){
            e.target.append(draggedElement)
            changePlayer();
            return
        }
    }
}

function changePlayer(){
    if(playerGo === 'white'){
        reverceIds()
        playerGo = 'black'
        playerDisplay.textContent = "Black"
    }else{
        reverceIds()
        playerGo = 'white'
        playerDisplay.textContent = "white"
    }
}

function checkIfValid(target){
    const targetId = Number(target.getAttribute('case-id')) || Number(target.parentNode.getAttribute('case-id'))
    const startId = Number(startPosition)
    const piece = draggedElement.id

    switch(piece){
        case 'pawn' :
            const startRow = [8,9,10,11,12,13,14,15]
            if (startRow.includes(startId) && targetId === startId + (2*width) || 
            targetId === startId + (width) || 
            targetId === startId + (width-1) && document.querySelector('[case-id="'+targetId+'"]').firstChild ||
            targetId === startId + (width+1) && document.querySelector('[case-id="'+targetId+'"]').firstChild
            ){return true}
            break;

        case 'knight' :

            
    }
    
}

function reverceIds(){
    const allTheCases = document.querySelectorAll(".chessCase")
    allTheCases.forEach(chessCase => {
        let id = Number(chessCase.getAttribute('case-id'))
        id = Math.abs(id - (width * width - 1))
        chessCase.setAttribute('case-id', id);
    })
}