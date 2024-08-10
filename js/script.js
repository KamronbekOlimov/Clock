let hour = document.getElementById(`hour`)
let min = document.getElementById(`min`)
let sec = document.getElementById(`sec`)
const time = () => {
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let hRotation = 30*hh + mm/2
    let mRotation = mm*6
    let sRotation = ss*6
    hour.style.transform = `rotate(${hRotation}deg)`
    min.style.transform = `rotate(${mRotation}deg)`
    sec.style.transform = `rotate(${sRotation}deg)`
}
setInterval(time, 1000)