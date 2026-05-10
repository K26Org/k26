const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(email) {
    const trimmed = $.trim(email);
    if (emailRegex.test(trimmed)) {
        return true;
    } else {
        return false;
    }
}
