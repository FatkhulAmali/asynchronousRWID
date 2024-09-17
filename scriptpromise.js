const token = ~~[Math.random()*12345678]
const files = ["1.xls", "2.xls","3.xls"]

function login(username) {
    console.log("processing token..")
    return new Promise(function(resolve, reject){
        if(username !== "fatkhul amali") {
            return reject("sorry data not valid")
        }
        setTimeout(
            () => {resolve({token})}, 300)
    })
}

function getUser(token) {
    console.log("processing API key now...")
    return new Promise(function(resolve, reject){
        if(!token) {
            return reject("no token has been generate")
        }
        setTimeout(
            () => {resolve({apiKey : "xKey123"})}, 500)
    })
}

function getFiles(apiKey) {
    console.log("processing files..")
    return new Promise(function(resolve, reject){
        if(!apiKey) {
            return reject("file error")
        }
        setTimeout(
            () => {resolve({ files })}, 2000)
    })
}

const user = login("fatkhul amali")
user.then(function(publish){
    const { token } = publish
    getUser(token).then(function (publish) {
        const { apiKey } = publish
        getFiles(apiKey).then(function(publish) {
            const { files } = publish
            console.log(files)
        }).catch(function(error){
            throw new Error(error)
        })
        }).catch(function(error){
            throw new Error(error)
        })
        }).catch(function(error){
        throw new Error(error)
        })