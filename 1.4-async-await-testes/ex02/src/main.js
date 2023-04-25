import Swal from 'sweetalert2';

const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const preEl = document.querySelector('pre');

export async function handleClick() {
  const cep = document.querySelector('input').value;

  try {
    const addressData = await getAddressFromCep(cep);
    document.querySelector('pre').innerHTML = JSON.stringify(addressData);
  } catch (error) {
    Swal.fire(error.message);
  }
}

buttonEl.addEventListener('click', handleClick);
