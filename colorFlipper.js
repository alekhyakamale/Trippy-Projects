function handleClick(){
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const color = "rgb("+red+","+green+","+blue+")";
    document.getElementById("clrFlppr").style.backgroundColor = color;
}