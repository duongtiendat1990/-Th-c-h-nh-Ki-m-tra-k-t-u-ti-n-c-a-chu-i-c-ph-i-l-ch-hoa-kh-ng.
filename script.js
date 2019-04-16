function checkUpperCase() {
    let patt =/^[A-Z]/;
    let str = document.getElementById('str').value;
    let result = patt.test(str);
    if (result) document.getElementById('result').innerText = 'The first letter of string is uppercase';
    else document.getElementById('result').innerText = 'The first letter of string is not uppercase';
}