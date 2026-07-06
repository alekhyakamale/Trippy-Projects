let count = 0;

function handleIncrement() {
    const p = document.getElementById("clrVal");
    count++;
    p.textContent = count;
}

function handleDecrement() {
    if(count > 0){
            const p = document.getElementById("clrVal");
    count--;
    p.textContent = count;
    }
    else p.textContent = count;
}
