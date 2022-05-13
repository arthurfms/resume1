function form (name, email, subject, message) {
    this.name = name;
    this.email = email
    this.subject = subject;
    this.message = message;
}

const messages = []


function send_form () {
    var form__name = document.getElementById("form__name").value;
    var form__email = document.getElementById("form__email").value;
    var form__subject = document.getElementById("form__subject").value;
    var form__message = document.getElementById("form__message").value;

    var m = new form(form__name, form__email, form__subject, form__message);
    messages.push(m);
    console.log(m);
    
}