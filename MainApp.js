const input = document.querySelector('.main-form-text');
const mainForm = document.querySelector('.main-form');

// Gán element class warning cho biến warning:
const warning = document.querySelector('.warning');

const messageContent = document.querySelector('.message-content');

mainForm.addEventListener('submit', function (event) {
    event.preventDefault();

    messageContent.textContent = input.value;

    if (input.value === '') {
        warning.textContent = 'Please enter Your Message !';
        warning.style.display = 'block';

        // Logic để dòng cảnh báo biến mất sau 4s:
        setTimeout(function () {
            warning.style.display = 'none';
        }, 4000);
    } else {
        warning.style.display = 'none';
    };

    // Xóa dòng message sau khi nhập:
    input.value = '';
})

