document.querySelectorAll(".card").forEach((card) => {
    if (localStorage.getItem(card.id)) {
        card.classList.add("marcado");
    }
});

function marcar(id, name) {
    const card = document.querySelector(`#${id}`);
    card.classList.toggle("marcado");

    if (card.classList.contains("marcado")) {
        localStorage.setItem(id, name);
    } else {
        localStorage.removeItem(id);
    }
}
