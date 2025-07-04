
const scriptURL = 'https://script.google.com/macros/s/AKfycbzV4vZvS7EMzZVVA0xYgsS-325lkzUx6fRpjnQO7VHeM-cvJwAHRdwEgqHllsM43ZLc/exec';
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(scriptURL, {
        method: 'POST',
         headers :{
            'content-type':'application/json'
        },
        body: JSON.stringify({
            name:form.name.value,
            email:form.email.value,
            message:form.message.value
        }),

    })
        .then(response=>{alert("form submission successfully!"); form.reset();})
        .catch(error=>{alert("error submitting form:"+ error);});
});
