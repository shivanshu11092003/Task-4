
const imgurl = document.getElementById("url");
const image = document.getElementById("images");
const submit = document.getElementById("submit");

const error = document.getElementById("error");

const array = [];

let keyValueItr = array.keys();

function validate() {
    if (imgurl.value == "") {
        return false;
    }
    else if (imgurl.value == "/^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/") {
        return false;
    }
    else {
        return true;
    }
}



submit.addEventListener("click", function () {
    if (validate()) {
        error.innerHTML = ""
        const card = document.createElement("div");
        const delbtn = document.createElement("button");
        const editbtn = document.createElement("button");
        const imgelement = document.createElement("img");

        editbtn.id = "editbtn"

        delbtn.id = "delbtn"

        delbtn.innerText = "Delete";
        editbtn.innerText = "Edit";





        card.style.height = "28em"
        card.style.width = "39em"
        card.style.backgroundColor = "#f5f6f6"
        card.style.display = "flex";
        card.style.flexDirection = "column"
        card.style.justifyContent = "center"
        card.style.alignItems = "center"
        card.style.margin = "auto"
        card.style.borderRadius = "10px"


        card.appendChild(imgelement);
        card.appendChild(delbtn);
        card.appendChild(editbtn);
        image.appendChild(card);

        imgelement.src = imgurl.value;
        imgelement.style.height = "24em"
        imgelement.style.width = "39em"
        imgelement.style.objectFit = "contain"
        imgelement.style.borderRadius = "10px"


        array.push(imgurl.value);
        let obj = Object.assign({}, array);

        let json = JSON.stringify(obj);

        let x = keyValueItr.next().value;
        console.log(x);
        card.id = `card${x}`

        console.log(obj);
        localStorage.setItem("URL", json);


        imgurl.value = ""


        delbtn.setAttribute("onclick", "delitem()");
        editbtn.setAttribute("onclick", "edititem()");

    }
    else {
        error.innerHTML = "Put valid Url"
        error.style.color = "red"
    }


})





function delitem() {
    const onClickdelbtn = document.querySelectorAll("[id='delbtn']");
    console.log(onClickdelbtn)
    for (let button of onClickdelbtn) {
        button.addEventListener("click", e => {
            e.target.parentNode.style.display = 'none';
        });
    }


}

function edititem(){
    const onClickdeledit = document.querySelectorAll("[id='editbtn']")
    for (let button of onClickdeledit) {
        button.addEventListener("click", e => {
            console.log(e.target.parentNode);
        });
    }



}


















