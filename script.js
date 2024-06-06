function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logic for adding book
    alert('Book added successfully!');
    this.reset();
});

document.getElementById('issueBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logic for issuing book
    alert('Book issued successfully!');
    this.reset();
});

document.getElementById('returnBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logic for returning book
    alert('Book returned successfully!');
    this.reset();
});

// Function to display the books list (placeholder)
function displayBooks() {
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '<p>Here will be the list of books...</p>';
}

// Display books on viewBooks section load
document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
});
