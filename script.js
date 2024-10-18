const inputBox=document.getElementById('input-box')
const listContainner=document.getElementById('list-containner')
function addTask(){
    if(inputBox.value ===''){
        alert('you must write sumthing...')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML=inputBox.value
        listContainner.appendChild(li)
        let span =document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
        saveData()

    }
    inputBox.value=''
}
listContainner.addEventListener('click',function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('chacked')
        saveData()
    }
    else if(e.target.tagName === ('SPAN')){
        console.log('clicekd')
        e.target.parentElement.remove()
        saveData()
    }
},false)
function saveData(){
    localStorage.setItem('data',listContainner.innerHTML

    )
}
function showTask(){
    listContainner.innerHTML=localStorage.getItem('data')
}
showTask()