var btn = document.getElementById('change');
var text = document.getElementById('colour');

var execute = function () {
    newclr = '#' + 
    (Math.random() * 0xFFFFFF << 0).toString(16);
    console.log(newclr.length);
    if (newclr.length < 7) {
        execute();
    }
}

btn.addEventListener('click', function () {
    execute();
    document.body.style.background = newclr;
    btn.style.color = newclr;
    text.innerText = newclr;
});