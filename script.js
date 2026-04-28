function openModal(title, desc, img) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;
    document.getElementById("modal-img").src = img;

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