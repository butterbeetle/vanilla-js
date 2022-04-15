const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;

    if( currentColor === "blue" )
    {
        newColor = "tomato";
    }
    else
    {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

h1.addEventListener( "click", handleTitleClick );
