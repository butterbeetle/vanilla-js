const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    const clickedClass = "clicked";
    if( h1.className === clickedClass )
    {
        h1.className = "";
    }
    else
    {
        h1.className = clickedClass;
    }
}

h1.addEventListener( "click", handleTitleClick );
