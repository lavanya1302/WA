export function passwordValidator(password) {
  if (!password) return "You will have to fill this"
  if (password.length < 5) return 'Your password should have atleast 5 characters and 1 special character'
  return ''
}
