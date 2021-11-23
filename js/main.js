const form = document.getElementsByTagName('form')[0];
const input = document.getElementsByTagName('input')[0];
const error = document.querySelector('span.error');

form.addEventListener('submit', function(event) {
    if(!input.validity.valid){
        input.classList.add('invalid');
        error.classList.add('show');
    }

    event.preventDefault();
});

input.addEventListener('input', function(event){
    if(this.validity.valid || this.value == "") {
        input.classList.remove('invalid')
        error.classList.remove('show');
    }

    console.log(this.value == "");
})