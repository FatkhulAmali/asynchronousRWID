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

async function interface() {
    try{
        const { token } = await login("fatkhul amali")
        const { apiKey } = await getUser(token)
        const { files } = await getFiles(apiKey)
        console.log(`your token is ${token}, your apiKey is ${apiKey}, your excel file is ${files}`)
    } catch (error) {
    console.log(error)
    }
}

interface()