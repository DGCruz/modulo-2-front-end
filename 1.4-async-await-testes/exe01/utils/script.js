const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

buttonEl.addEventListener('click', handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    const keysData = Object.keys(data)

    preEl.innerHTML = keysData.map((key) => {
        return `${key}: ${data[key]} \n`
    });
    
    return data;
  } catch (error) {
    return error.message;
  }
}
