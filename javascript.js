
const imgurl = document.getElementById("url");
const image = document.getElementById("images");
const submit = document.getElementById("submit");
const error = document.getElementById("error");
error.style.color = "red"
let array = [];
let keyValueItr = array.keys();
const background = document.getElementById("background")



submit.addEventListener("click", function () {

    if (imgurl.value.trim() == "") {

        error.innerHTML = "*required"
    }
    else {
        fetch(imgurl.value).then(reponse => {
            console.log(reponse.status);
            if (reponse.status == 200) {

                const img = new Image();
                img.src = imgurl.value;
                img.onload = function () {
                    if (this.width != 0) {
                        background.remove();
                        error.innerHTML = ""
                        const card = document.createElement("div");
                        const delbtn = document.createElement("button");
                        const editbtn = document.createElement("button");
                        const imgelement = document.createElement("img");
                        const btnimg = "https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                        const editbtnimg = "https://cdn-icons-png.flaticon.com/512/4211/4211584.png"
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
                        // let obj = Object.assign({}, array);
                        // let json = JSON.stringify(obj);
                        let x = keyValueItr.next().value;

                        card.id = "card"
                        delbtn.id = `delbtn${x}`
                        editbtn.id = `editbtn${x}`
                        // console.log(obj);
                        localStorage.setItem("URL", array);
                        imgurl.value = ""
                        delbtn.setAttribute("onclick", "delitem(this.id)");
                        editbtn.setAttribute("onclick", "edititem(this.id)");



                    }
                    else {
                        error.innerHTML = "URL not contain any picture"
                    }

                }

            }
            else {
                error.innerHTML = `Put valid Url :${reponse.status}`

            }
        })
            .catch((e) => {
                error.innerHTML = "*Picture In URL is PAID"
                console.log(e);
            })

    }
})


function delitem(id) {
    console.log(id)
    const element = document.getElementById(id)
    element.parentElement.remove()
    console.log(element.parentNode.children[0])
    const index = array.indexOf(element.parentNode.children[0].src);
    array.splice(index, 1);
    console.log(array)
    // let obj = Object.assign({}, array);
    // let json = JSON.stringify(obj);
    localStorage.setItem("URL", array);

    // for (let i = 0; i < onClickdelbtn.length; i++) {
    //     onClickdelbtn[i].addEventListener("click", e => {
    //         const parent = e.target.parentNode.parentNode;
    //         const index = array.indexOf(parent.children[0].src);
    //         console.log(parent.children)
    //         array.splice(index, 1);
    //         let obj = Object.assign({}, array);
    //         let json = JSON.stringify(obj);
    //         localStorage.setItem("URL", json);
    //         e.target.parentNode.parentNode.style.display = 'none';
    //         console.log(e.target.parentNode.parentNode)

    //     });
    // }
}


function edititem(id) {
    let newurl = prompt("New Url");
    if (newurl.trim() == "") {

        error.innerHTML = "*required"
    }
    else {
        fetch(newurl).then(reponse => {
            console.log(reponse.status);
            if (reponse.status == 200) {

                const img = new Image();
                img.src = newurl;
                img.onload = function () {
                    if (this.width != 0) {
                        const element = document.getElementById(id)
                        console.log(element)
                        const index = array.indexOf(element.parentNode.children[0].src);

                        array.splice(index, 1, newurl);
                        // let obj = Object.assign({}, array);
                        // let json = JSON.stringify(obj);
                        localStorage.setItem("URL", array);
                        element.parentNode.children[0].src = newurl;
                    }
                    else {
                        error.innerHTML = "*Put Valid URL"
                    }

                }

            }
            else {
                error.innerHTML = `Put valid Url :${reponse.status}`

            }
        })
            .catch((e) => {
                error.innerHTML = "*Picture In URL is PAID"
                console.log(e);
            })

    }







    // for (let button of onClickdeledit) {
    //     button.addEventListener("click", e => {
    //         let newurl = prompt("New Url");
    //         if (newurl.trim() != "") {
    //             const parent = e.target.parentNode.parentNode;
    //             console.log(e.target.parentNode.parentNode.children[0])

    //             const index = array.indexOf(parent.children[0].src);
    //             array.splice(index, 1, newurl);
    //             let obj = Object.assign({}, array);
    //             let json = JSON.stringify(obj);
    //             localStorage.setItem("URL", json);
    //             parent.children[0].src = newurl;
    //             console.log(e.target.parentNode.parentNode)
    //         }
    //     });
    // }
}
console.log(array.length)



let x = localStorage.getItem("URL")
x = x.split(",")
console.log(x.length);
console.log(x);

function onReload() {
    x.forEach((element, x) => {
        if(element[0].trim() !=''){
        background.remove();
        error.innerHTML = ""
        const card = document.createElement("div");
        const delbtn = document.createElement("button");
        const editbtn = document.createElement("button");
        const imgelement = document.createElement("img");
        const btnimg = "https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
        const editbtnimg = "https://cdn-icons-png.flaticon.com/512/4211/4211584.png"
        delbtn.innerHTML = `<img src=${btnimg}>`;
        editbtn.innerHTML = `<img src=${editbtnimg}>`;
        card.classList.add("eachImagecard")
        card.appendChild(imgelement);
        card.appendChild(delbtn);
        card.appendChild(editbtn);
        image.appendChild(card);
        imgelement.src = element;
        imgelement.classList.add("imgelement")
        delbtn.classList.add("delbtn")
        editbtn.classList.add("editbtn")
        array.push(imgurl.value);
        // let obj = Object.assign({}, array);
        // let json = JSON.stringify(obj);
        // let x = keyValueItr.next().value;

        card.id = "card"
        delbtn.id = `delbtn${x}`
        editbtn.id = `editbtn${x}`
        // console.log(obj);
        // localStorage.setItem("URL", array);
        imgurl.value = ""
        delbtn.setAttribute("onclick", "delitem(this.id)");
        editbtn.setAttribute("onclick", "edititem(this.id)");
    }


    });
    }




onReload();








