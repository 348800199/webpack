//我们这里使用CommonJS的风格
function generateText1() {
    var element1 = document.createElement('h3');
    element1.innerHTML = "dasdadas";
    return element1;
}

module.exports = generateText1;