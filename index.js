window.addEventListener('load', () => {

    let loadingAnimation = document.querySelector('.load')

    setTimeout(() => {
        
        loadingAnimation.style.display = "none";

    },2000)
})

let Button = document.querySelector('.main-content-div-button');

Button.addEventListener('click', () => {
    document.querySelector('.main-content-image').src = "./images/Nami.gif"
})

function mudaImg(id) {

    console.log(id)

    if (id ==1) {
        document.querySelector('.main-content-image').src = "./images/LuffyPositive.gif"
    }
    else if (id == 2) {
        document.querySelector('.main-content-image').src = "./images/ZoroS.gif"
    }
    else if (id == 3) {
        document.querySelector('.main-content-image').src = "./images/Happy.gif"
    }
    else if (id == 4) {
        document.querySelector('.main-content-image').src = "./images/Crew.gif"
    }
    else if (id == 5) {
        document.querySelector('.main-content-image').src = "./images/Robin.gif"
    }
    else if (id == 6) {
        document.querySelector('.main-content-image').src = "./images/Franky.gif"
    }
    else if (id == 7) {
        document.querySelector('.main-content-image').src = "./images/Zoro.gif"
    }
    else if (id == 8) {
        console.log(id)
        document.querySelector('.main-content-image').src = "./images/Vivi.gif"
    }
    else {
        document.querySelector('.main-content-image').src = "./images/LuffyPositive.gif"
    }
}

mudaImg()