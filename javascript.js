
const imgurl = document.getElementById("url");
const image = document.getElementById("images");
const submit = document.getElementById("submit");
const error = document.getElementById("error");
 error.style.color = "red"
const array = [];
let keyValueItr = array.keys();
let pass = false

async function validate() {
    if (imgurl.value.trim() == "") {
        pass=false;
    }else{
        await fetch(imgurl.value).then(reponse =>{ 
            console.log(reponse.status);
            if(reponse.status == 200){
                const img = new Image();
                img.src = imgurl.value;
                img.onload = function() { 
                    if(this.width != 0){
                        pass=true
                    }

                 }
    
            }else{
                error.innerHTML = `Put valid Url ${reponse.status}`
                pass=false;
            }
            })
            .catch((e)=>{
                console.log(e);
            })

    }
    
   
    
}
const background = document.getElementById("background")
submit.addEventListener("click", function () {
    validate();
    if (pass) {
        background.remove();
        error.innerHTML = ""
        const card = document.createElement("div");
        const delbtn = document.createElement("button");
        const editbtn = document.createElement("button");
        const imgelement = document.createElement("img");
        editbtn.id = "editbtn"
        delbtn.id = "delbtn"
        const btnimg="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
        const editbtnimg="https://cdn-icons-png.flaticon.com/512/4211/4211584.png"
        delbtn.innerHTML = `<img src=${btnimg}>`;
        editbtn.innerHTML = `<img src=${editbtnimg}>`;
        card.classList.add("eachImagecard")
        card.appendChild(imgelement);
        card.appendChild(delbtn);
        card.appendChild(editbtn);
        image.appendChild(card);
        imgelement.src = imgurl.value;
        imgelement.classList.add("imgelement")
        delbtn.classList.add("delbtn")
        editbtn.classList.add("editbtn")
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

    }
})


function delitem() {
    const onClickdelbtn = document.querySelectorAll("[id='delbtn']");
    console.log(onClickdelbtn)
    for (let button of onClickdelbtn) {
        button.addEventListener("click", e => {
            const parent = e.target.parentNode.parentNode;
            const index = array.indexOf(parent.children[0].src);
            array.splice(index, 1);
            let obj = Object.assign({}, array);
            let json = JSON.stringify(obj);
            localStorage.setItem("URL", json);
            e.target.parentNode.parentNode.style.display = 'none';
            console.log(e.target.parentNode.parentNode)
        });
    }
}

function edititem() {
    const onClickdeledit = document.querySelectorAll("[id='editbtn']")
    for (let button of onClickdeledit) {
        button.addEventListener("click", e => {
            let newurl = prompt("New Url");
            if (newurl.trim() != "") {
                const parent = e.target.parentNode.parentNode;
                const index = array.indexOf(parent.children[0].src);
                array.splice(index, 1, newurl);
                let obj = Object.assign({}, array);
                let json = JSON.stringify(obj);
                localStorage.setItem("URL", json);
                parent.children[0].src = newurl;
                console.log(e.target.parentNode.parentNode)
            }
        });
    }
}


















