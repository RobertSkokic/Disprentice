function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add('show');
    }, 50);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

document.getElementById('search-button').addEventListener('click', function() {
    // Holen Sie sich den Suchtext
    const searchText = document.querySelector('.form-control').value.toLowerCase();

    // Durchlaufen Sie alle Kacheln
    const tiles = document.querySelectorAll('.category-card');
    tiles.forEach(tile => {
        const title = tile.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchText)) {
            tile.style.display = 'block'; // Zeigen Sie die Kachel an, wenn sie dem Suchtext entspricht
        } else {
            tile.style.display = 'none'; // Verbergen Sie die Kachel, wenn sie nicht dem Suchtext entspricht
        }
    });
});

