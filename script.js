function openModal(title, desc, img, link) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;
    document.getElementById("modal-img").src = img;

    const btn = document.querySelector(".book-now");

    btn.onclick = function () {
        window.open(link, "_blank");
    };

    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic(){

    if(music.paused){
        music.play();
        musicBtn.innerHTML = "SUGENG RAWUH TRAVELERS!";
    } 
    
    else{
        music.pause();
        musicBtn.innerHTML = "HI WELCOME TRAVELERS!";
    }
}


function openContact(){
    document.getElementById("contactModal").style.display = "flex";
}

function closeContact(){
    document.getElementById("contactModal").style.display = "none";
}


window.addEventListener("click", function(event){

    let contactModal = document.getElementById("contactModal");

    if(event.target == contactModal){
        contactModal.style.display = "none";
    }

});