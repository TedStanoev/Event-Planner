export const validateEmail = email => email && email.includes('@') && email.length > 3;
export const validatePassword = password => password && password.length > 6;
export const validatePasswordsMatch = (password, confirmPassword) => password === confirmPassword;