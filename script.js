const input = document.getElementById('search');
const names = document.querySelectorAll('li');

const searchFunction = e => {
    const text = e.target.value.toLowerCase();

    names.forEach(element => {
        if (element.textContent.toLocaleLowerCase().indexOf(text) !== -1) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}



input.addEventListener('keyup', searchFunction);