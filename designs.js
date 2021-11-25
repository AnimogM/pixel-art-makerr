// getting elements and assigning it to variables
const form = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight')
let width = document.getElementById('inputWidth')
let table = document.getElementById('pixelCanvas')
let color = document.getElementById('colorPicker')

// declared variable for 'table row' and 'table data'
let rowEle, colEle;

// assigning the value of color to a variable
let newColor = color.value

// added an event listener to color to get current value
color.addEventListener('input', (e)=> {
    newColor = e.currentTarget.value
})


function makeGrid(e) {
    e.preventDefault()
    table.innerHTML = ''

    // getting values of height and width
    let a = height.value
    let b = width.value

    // creating table rows
    for (let i = 0; i < a; i++) {
        rowEle = document.createElement('tr');

        // creating table data
        for (let j = 0; j < b; j++) {
            colEle = document.createElement('td');
            colEle.classList.add("mystyle")
            rowEle.appendChild(colEle);
        }
        table.appendChild(rowEle);
    }

    // getting the grid squares and changing the background color

    let box = document.querySelectorAll('.mystyle')

    box.forEach((ele) => {
        ele.addEventListener('click', (e)=>{
            let td = e.currentTarget;
            td.style.backgroundColor = newColor
        })
    })

}

form.addEventListener('submit', makeGrid)
