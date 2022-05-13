document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#cypher-form');

    if (form) {
        const cypherKeyElem = form.querySelector('#cypher_key')
        const cypherTextElem = form.querySelector('#cypher_text');
        const submitButtonElem = form.querySelector('input[type="submit"]');
        const resultElem = form.querySelector('#cypher_result');

        if (submitButtonElem) {
            submitButtonElem.addEventListener('click', e => {
                e.preventDefault();

                if (cypherKeyElem && cypherTextElem && resultElem) {
                    let gap = parseInt(cypherKeyElem.value);
                    let text = cypherTextElem.value;

                    if (Number.isInteger(gap) && text.length > 0) {
                        resultElem.innerHTML = shift(gap, text);
                    }
                }
            })
        }
    }
});

const shift = (gap, text) => {
    let shiftedText = '';

    [...text].forEach(char => {
        let charCode = char.charCodeAt(0);

        // Case : lowercase
        if (charCode >= 65 && charCode <= 90) {
            if ((charCode + gap) > 90)
                shiftedText += String.fromCharCode(65 + ((charCode + gap) - 91));
            else
                shiftedText += String.fromCharCode(charCode + gap);
            return;
        }

        // Case : uppercase
        if (charCode >= 97 && charCode <= 122) {
            if ((charCode + gap) > 122)
                shiftedText += String.fromCharCode(97 + (charCode + gap) - 123);
            else
                shiftedText += String.fromCharCode(charCode + gap);
            return;
        }

        shiftedText += char;
    })

    return shiftedText;
}