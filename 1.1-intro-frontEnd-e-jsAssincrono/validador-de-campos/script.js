import validator from "validator";

const value = document.getElementById('value');
const buttonValidar = document.getElementById('buttonValidar')
const selectOption = document.getElementById('selectOption')
const textSaida = document.getElementById('answer')


buttonValidar.addEventListener('click', (event) => {
    event.preventDefault()
    const campos = {
        cpf: validator.isTaxID(value.value, 'pt-BR'),
        hexColor: validator.isHexColor(value.value),
        email: validator.isEmail(value.value),
        uuid: validator.isUUID(value.value, 4),
        url: validator.isURL(value.value),
      };

    textSaida.innerHTML = `A validação retornou ${campos[selectOption.value]}`
});  
    // if (selectOption === validator(value)) {
    //     alert(`O ${value} é um ${selectOption}`)
    // }
    // alert(`O ${value} não é um ${selectOption}`)
// })
