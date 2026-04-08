const SIZE =10,MINES=10;
let board=[],flags=0,gameOver=false,firstClick=true;
const boardElement=document.getElementById('board');
const statusElement=document.getElementById('status');
const msgElement=document.getElementById('msg');

const colors=["","text-blue-600","text-green-600",
"text-red-600","text-purple-600",
"text-black",
"text-gray-600"]

function init(){
    board=Array.from({length:SIZE},()=>Array.from({length:SIZE},
        ()=>({mine:false,rev:false,flag:false})
        ))
        flags=0;
        gameOver=false;
        firstClick=true;
        statusElement.innerText=" ${MINES}";
        msgElement.innerText="";
        for (let r=0;r<SIZE;r++){
            for(let c=0;c<SIZE;C++){
                const cell=document.createElement('div');
                cell.className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 flex items-cener justify-center font-bold text-lg";
                cell.oncontextmenu=(e)=>{
                    e.preventDefault();
                    toggleFlag(r,c,cell);
                };
                cell.onclick=()=>clickCell(r,c,cell);
                boardElement.appendChild(cell);
            }
        }
}
function toggleFlag(r,c,cell){

}
function clickCell(r,c,cell){}

init();
