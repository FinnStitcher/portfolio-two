export function validateEmail(string) {
    const regex = /^\w+@\w+\.\w+/;

    return regex.test(String(string));
};

export function toSentenceCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};