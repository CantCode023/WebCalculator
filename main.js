// get class wrapper
var wrapper = document.getElementsByClassName('wrapper')[0];
// get h1 tag in wrapper
var h1 = wrapper.getElementsByTagName('h1')[0];
// get calculator class in wrapper
var calculator = wrapper.getElementsByClassName('calculator')[0];
// get every button in calculator
var buttons = calculator.getElementsByTagName('button');
let a = ""
let b = false
let c = false
let d = false

function updateh1() {
    h1.innerHTML = a;
}

// for every buttons check if a button is clicked
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let content = buttons[i].textContent;
        if (content != "=") {
            if (b == false) {
                a += content;
                b = false
                if (c == true) {
                    a = ""
                    a += content;
                    c = false
                }
                if (d == true) {
                    if (content != "<-") {
                        a = ""
                        a += content;
                        d = false
                    }
                }
                if (content == "<-") {
                    if (a.replace("<-", "").length > 1) {
                        a = a.substring(0, a.replace("<-", "").length - 1);
                    } else if (a.replace("<-", "").length == 1) {
                        a = "0"
                        d = true
                    }
                }
            } else {
                a = ""
                a += content;
                b = false
            }
        } else {
            a = eval(a.replace("x", "*").replace("÷", "/"));
            b = true
        }
        if (content == "C") {
            a = "0"
            c = true
        }
        updateh1();
    })
}