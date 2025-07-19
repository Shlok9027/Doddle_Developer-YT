const app = document.querySelector('#clock')

setInterval(function(){
    let date = new Date()

    app.innerHTML = date.toLocaleTimeString()
}, 1000)