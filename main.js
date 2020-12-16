function pageLoad() {

    let myObjects = [
        {
            tag: "h1",
            content: "Erika Szilágyi"
        },
        {
            tag: "p",
            content: "Frontend developer"
        }
    ];

    // console.log(myObjects);
    /* for (let i = 0; i < myObjects.length; i++) {

    }  */


        // <div id="root" ....
    let rootE = document.getElementById('root');

    for (myObject of myObjects) {

        console.log(myObject.tag);
        console.log(myObject.content);

        //debugger
        //rootE.insertAdjacentHTML('afterbegin','<'+myObject.tag+'>');

        /*  version :1 insertAdjacent...
            let elem = ` <${myObject.tag}>  ${myObject.content}  </${myObject.tag}>   `;
            console.log(elem); // <h1> Erika... </h1> , // <p> Fornt.... </p>
            rootE.insertAdjacentHTML('beforeend',elem);
        */

        /*  version :2 createElement + appendChild... */
        let elem2 = document.createElement(myObject.tag);
        elem2.innerHTML = myObject.content;
        console.log(elem2);
        rootE.appendChild(elem2);




    }

rootE.addEventListener('click', function (){
                               // this.classList.toggle('click');
                                rootE.classList.toggle('click');

                            } 
                        );
    //root --tag vagy emeent, aminek az eleme tag object 

} //load func

window.addEventListener(`load`, pageLoad);