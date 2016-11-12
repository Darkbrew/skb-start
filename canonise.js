export default function canonise(username) {
  const re = new RegExp('@?(https?:)?(\/\/)?((telegram|vk)[^\/]*\/)?([a-zA-Z0-9]*)', 'i')
  const usename = username.match(re)[5]
  return '@' + usename
}
