
const scriptURL = 'https://script.google.com/macros/s/AKfycbwFk0kMZIEzjk2G30zV2QGu2oiInPjzadhwvFJnGOavLTxzRTiswjyfDMF2qcZ8Xk/exec';
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(new FormData(form))
    })
        .then(response => response.json())
        .then(result => {
            alert("Form submitted successfully!");
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error);
            alert("An error occurred while submitting the form.");
        });
});
