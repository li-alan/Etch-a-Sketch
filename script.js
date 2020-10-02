let gridSize=16;
const container=document.querySelector('#grid-container');
for(let i=0;i<gridSize;i++){
    const row=document.createElement('div');
    row.classList.add('row')
    row.style.cssText='display:flex ; justify-content:center'
    for(let j=0;j<gridSize;j++){
        const square=document.createElement('div');
        square.classList.add('square')
        square.style.backgroundColor='white';
        square.style.borderColor='black';
        square.style.borderStyle='solid'
        square.style.borderWidth='thin'
        square.style.height='20px';
        square.style.width='20px';
        square.style.margin='2px';
        square.addEventListener('mouseover',function(e){
            this.style.backgroundColor='black'; 
        })
        row.appendChild(square);
    }
    container.appendChild(row);
}


