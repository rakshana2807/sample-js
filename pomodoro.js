var input = document.getElementById("taskInput")
var list = document.getElementById("taskList")
var timerDisplay = document.getElementById("timer")

let min = 1
let sec = 0
let interval = null
let activeTask = null

function addTask(){

    if(input.value.trim() == "") return

    var li = document.createElement("li")

    li.innerHTML =
    input.value +
    " <button onclick='startTask(this)'>Start</button>"

    list.append(li)

    input.value = ""
}

function startTask(btn){

    if(activeTask){
        alert("⚠ Only one task can run at a time!")
        return
    }

    activeTask = btn.parentElement
    activeTask.classList.add("active")

    alert("▶ Task Started!")

    startTimer()
}

function startTimer(){

    interval = setInterval(function(){

        if(min == 0 && sec == 0){
            clearInterval(interval)
            interval = null
            alert("⏰ Time Completed!")
            activeTask.classList.remove("active")
            activeTask = null
            return
        }

        if(sec == 0){
            sec = 59
            min--
        }
        else{
            sec--
        }

        updateTimer()

    },1000)
}

function updateTimer(){

    let m = String(min).padStart(2,"0")
    let s = String(sec).padStart(2,"0")

    timerDisplay.textContent = m + ":" + s
}

function pauseTimer(){

    if(interval){
        clearInterval(interval)
        interval = null
    }
}

function resumeTimer(){

    if(!interval && activeTask){
        startTimer()
    }
}

function resetTimer(){

    clearInterval(interval)
    interval = null

    min = 1
    sec = 0

    updateTimer()

    if(activeTask){
        activeTask.classList.remove("active")
        activeTask = null
    }
}