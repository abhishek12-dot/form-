
const scriptURL = 'https://script.google.com/macros/s/AKfycbzV4vZvS7EMzZVVA0xYgsS-325lkzUx6fRpjnQO7VHeM-cvJwAHRdwEgqHllsM43ZLc/exec';
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
