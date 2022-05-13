const shift = (gap, text) => {
    let shiftedText = '';
    [...text].forEach(char => {
        let charcode = char.charCodeAt(0);

        if ((charcode > 100 && charcode < 133) || (charcode > 64 && charcode < 91)) {
            charcode += gap;
        }

        shiftedText += String.fromCharCode(charcode);
    })
    return shiftedText;
}

console.log(shift(1, 'TesTerer test'));