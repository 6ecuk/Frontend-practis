var  emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/;
var  counter = 0;
function Forms(nameFormData, emailFormData) {
 this.nameForm = nameFormData;
 this.emailForm = emailFormData;
}

function Sticker(emailData, nameData, messageData, counter) {
    this.email = emailData;
    this.name = nameData;
    this.message = messageData;
    this.div = document.createElement('div');
    this.p = document.createElement('p');
    this.deleteButton = document.createElement('a');
    this.parrentDiv = document.getElementById('messageBox');
    this.div.className = 'messageView';
    this.div.id = "sticker_" + counter;
    this.p.className = 'message_p';
    this.deleteButton.className = 'delete';
    this.deleteButton.href = '#';
    this.deleteButton.id = this.parrentDiv.childElementCount;
    this.deleteButton.onclick = removeSticker;
    this.p.innerHTML = this.message;
    this.div.appendChild(this.deleteButton);
    this.div.appendChild(this.p);
    this.parrentDiv.insertBefore(this.div, this.parrentDiv.firstChild);

}

function removeSticker () {
    var parentDiv = document.getElementById('messageBox');
    var deleteDiv = document.getElementById(this.parentElement.id);
    parentDiv.removeChild(deleteDiv);
//   console.log(parentDiv);
}

function createObjects() {
    forms = new Forms(
        document.getElementById("nameText"),
        document.getElementById("emailText")
    );

    if (forms.nameForm.value === "" && forms.emailForm.value === "" )
    {
        forms.nameForm.className = 'errorBorders';
        forms.nameForm.placeholder = "Поле Имя не должно быть пустым";
        forms.emailForm.className = 'errorBorders';
        forms.emailForm.placeholder = "Поле E-mail не должно быть пустым";
    }
    else if (forms.nameForm.value === "") {
        forms.nameForm.className = 'errorBorders';
        forms.nameForm.placeholder = "Поле Имя не должно быть пустым";
    }
    else if (forms.emailForm.value === "") {
        forms.emailForm.className = 'errorBorders';
        forms.emailForm.placeholder = "Поле E-mail не должно быть пустым";
    }
    else if (forms.emailForm.value.search(emailPattern) < 0) {
        forms.emailForm.className = 'errorBorders';
        forms.emailForm.value = "Поле E-mail должно содержать @";
    }
    else if (forms.nameForm.value.length < 3) {
        forms.nameForm.className = 'errorBorders';
        forms.nameForm.value = "Имя должно содержать более 3 символов";
    }
else {

    sticker = new Sticker(
        document.getElementById("emailText").value,
        document.getElementById("nameText").value,
        document.getElementById("messageText").value,
        counter
    );
    counter++;

    }
}


window.onload = function () {
document.getElementById('button').onclick = createObjects;

};


