document.getElementById('checkout-container').onsubmit = function(e) {
    e.preventDefault();
    console.log('REDIRECTING')
    window.location.href = '/confirmation';

};

function checkIfFilled(inputElement) {
    const userInput = inputElement.value
    if (userInput.trim() !== '') {
        inputElement.classList.remove('error')
        toggleErrorMsg(inputElement, "*Required", false);
    } else {
        inputElement.classList.add('error')
        toggleErrorMsg(inputElement, "*Required", true);
    }
}

function toggleErrorMsg(inputElement, errorMsg, add) {
    const label = document.querySelector(`label[for="${inputElement.id}"]`);
    if (label) {
        if (add){
            if (!label.querySelector('.alert-text')) {

                const p = document.createElement('p');
                p.textContent = errorMsg;
                p.className = 'alert-text';
                label.appendChild(p);;
            }
        } else {
            const existingSpan = label.querySelector('.alert');
            const existingP = label.querySelector('.alert-text');
            if (existingSpan) label.removeChild(existingSpan);
            if (existingP) label.removeChild(existingP);
        }

    }
}