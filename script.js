const token = ~~[Math.random() * 12345678]

const files = ["1.xls", "2.xls", "3.xls"]

function login(username) {
    return {token, username}
}

function getUser(token) {
    if (token)
        return {apiKey: "xkey123"}
}

function getFiles (apiKey) {
    if(apiKey)
        return files
}

const user = login("fatkhul amali")
console.log(user.token)
const {apiKey} = getUser(user.token)
console.log(apiKey)

const getUserFiles = getFiles(apiKey)
console.log(getUserFiles)