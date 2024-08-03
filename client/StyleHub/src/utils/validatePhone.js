const phoneRegex = /^\+?[1-9]\d{1,14}$/;

function validatePhone(phone) {
    return phoneRegex.test(phone);
}

export default validatePhone;