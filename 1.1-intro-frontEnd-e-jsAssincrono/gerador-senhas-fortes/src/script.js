import { nanoid } from 'nanoid';
import clipboard from 'clipboard-copy';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
passwordBtnEl.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordEl.innerHTML = randomPassword;
});


// displayPasswordEl.addEventListener('click', (event) => {
//     clipboard(event.target.innerHTML);
//     alert('Senha copiada!');
// });

const btnCopiar = document.getElementById('copiar');

btnCopiar.addEventListener('click', () => {
    if (displayPasswordEl.innerHTML === '...') {
        return alert('Você precisa gerar uma senha primeiro.');
    }  
    clipboard(displayPasswordEl.innerHTML);
    alert('copiado');
});
