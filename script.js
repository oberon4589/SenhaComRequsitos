const passwordInput = document.querySelector('.pass-field input');
const eyeIcon = document.querySelector('.pass-field i');
const requirementList = document.querySelector('.requirement-list li');

// Um array de senhas com os correspondentes requisitos
const requirements = [
    { regex: /.{8,}/, index: 0 }, // 8 ou mais caracteres
    { regex: /[0-9]/, index: 1 }, // 1 ou mais números
    { regex: /[a-z]/, index: 2 }, // 1 ou mais letras minúsculas
    { regex: /[^A-Za-z0-9]/, index: 3 }, // 1 ou mais caracteres especiais
    { regex: /[A-Z]/, index: 4 } // 1 ou mais letras maiúsculas
]

passwordInput.addEventListener('keyup', (e) => {
    requirements.forEach(item => {
        //Checa se a senha corresponde aos requisitos
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Atualiza a classe e o ícone do item da lista se a senha corresponder aos requisitos
        if(isValid) {
            requirementItem.classList.add('valid');
            requirementItem.firstElementChild.classname = 'fa-solid fa-check';
        } else {
            requirementItem.classList.remove('valid');
            requirementItem.firstElementChild.classname = 'fa-solid fa-circle';
        }
    });
});

eyeIcon.addEventListener('click', () => {
    // Alterna o tipo de input entre password e text
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

    // Atualiza o ícone do olho baseado no tipo de input
    eyeIcon.className = 'fa-solid fa-eye${passwordInput.type ==="password" ? "" : "-slash"}';
});