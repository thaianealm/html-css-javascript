//validate input field
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task");
    }
    //Add a new task
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <img src="assets/img/recycle-bin.png" alt="">
                </button>
            </div>
        `;
    }
}