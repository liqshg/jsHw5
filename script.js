import "@pnotify/core/dist/PNotify.css"
import "@pnotify/core/dist/BrightTheme.css"
import { error, success, notice } from "@pnotify/core"


const key = document.getElementById("key")
const message = document.getElementById("message")
const newGame = document.getElementById("newGame")

const keyArr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]

let currentIndex = 0

function changeKey() {
    key.textContent = keyArr[currentIndex]
}


document.addEventListener("keypress", (event) => {
    console.log(event.key)
    message.textContent = ""
    if (event.key !== keyArr[currentIndex]) {
        error({ text: "wrong key!", delay: 1000 })
        return
    }
    if (currentIndex === keyArr.length - 1) {
        success({ text: "you won!", delay: 1000 })
        currentIndex = 0
        message.textContent = "you won"
        changeKey()
        return
    }
    currentIndex += 1
    changeKey()
})

newGame.addEventListener("click", () => {
    currentIndex = 0
    message.textContent = ""
    changeKey()
    notice({ text: "new game!", delay: 1000 })
})

changeKey()