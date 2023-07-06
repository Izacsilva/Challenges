const iconDrop = document.querySelectorAll(".drop")


iconDrop.forEach(drop => {

    const svg = document.createElement("svg")

    svg.setAttribute("width","10")
    svg.setAttribute("height","6")
    svg.setAttribute("viewBox","0 0 10 6")
    svg.setAttribute("xmlns","http://www.w3.org/2000/svg")

    svg.setAttribute("class","dropIcon")

    svg.innerHTML = ´
    <path stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
    
    ´

    
    drop.appendChild(svg)

    

    // drop.addEventListener("mouseover", (Event) => {
    //     img.src = "./src/images/icon-arrow-up.svg"
    //     console.log("hello")
    // })

    // drop.addEventListener("mouseout", (Event) => {
    //     img.src = "./src/images/icon-arrow-down.svg"
    //     console.log("hello")
    // })

    // const img = document.createElement('img')
    // const src = document.createAttribute("src")
    // src.value = "./src/images/icon-arrow-up.svg"
    // img.setAttributeNode(src)

    // drop.appendChild(img)
});


// se o elemento estiver em hover então troque o atributo para
// up, se não deixe como está.


