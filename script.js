
const scriptURL = 'https://script.google.com/macros/s/AKfycbwFk0kMZIEzjk2G30zV2QGu2oiInPjzadhwvFJnGOavLTxzRTiswjyfDMF2qcZ8Xk/exec';
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify({
            name:form.name.value,
            email:form.email.value,
            message:form.message.value
        }),
        headers :{
            'content-type':'application/json'
        }
    })
        .then(response=>alert("form submission successfully!"))
        .catch(error=>alert("error submitting form:"+ error));
});
