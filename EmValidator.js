export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "You have to fill this"
  if (!re.test(email)) return 'Enter a valid email'
  return ''
}