document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const fields = [
        {id: 'firstname', error: 'First Name cannot be empty' },
        { id: 'lastname', error: 'Last Name cannot be empty' },
        { id: 'email', error: 'Looks like this is not an email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        { id: 'password', error: 'Password cannot be empty' }
    ];

    let isValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorText = input.nextElementSibling;

        // Validate based on field type
        if (field.regex) {
            if (!field.regex.test(input.value.trim())) {
                input.classList.add('error');
                isValid = false;

                const currentVal = input.value;
                input.value = '';
                input.value = currentVal;
            } else {
                input.classList.remove('error');
            }
        } else {
            if (input.value.trim() === '') {
                input.classList.add('error');
                errorText.style.visibility = 'visible';
                isValid = false;
            } else {
                input.classList.remove('error');
                errorText.style.visibility = 'hidden';
            }
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            input.value = '';
        });
    }

    
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function () {
        if (input.classList.contains('error')) {
            input.classList.remove('error');
            input.nextElementSibling.style.visibility = 'hidden';
        }
    });
});