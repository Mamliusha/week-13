
function CorrectName() {
    let date = new Date();
    document.getElementById('DatePosted').innerHTML = date;
}


function CorrectComment() {
    let yourcomment = document.getElementById('comment').value;
    let correctedComment = yourcomment.replace(/viagra/i, "******").replace(/sex/i, "***");
    console.log(correctedComment);
    document.getElementById('finalcomment').innerHTML = correctedComment
}

function isChecked(){
    let checkbox = document.getElementById('yes');
    let yourname = document.getElementById('name').value;
    let correctName = yourname.substr(0, 1).toUpperCase() + yourname.substr(1).toLowerCase();
    if(checkbox.checked === true) {
        document.getElementById('finalname').innerHTML = correctName   
    }
    else {
        document.getElementById('finalname').innerHTML = "username"
    }
}

function IsAvatarSet(){
    let youravatar = document.getElementById('avatar').value;
    let newav ="https://zooblog.ru/wp-content/uploads/2021/02/abissinskaya-koshka.jpg"
    if(youravatar === ''){
        document.getElementById('finalavatar').src = newav
    }
    else{
        document.getElementById('finalavatar').src = youravatar
    }
}
