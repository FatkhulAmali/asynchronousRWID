const token = ~~[Math.random() * 12345678]
const files = ["1.xls", "2.xls", "3.xls"]
function login(username, callback) {
    console.log("waiting process..")
    setTimeout(() => {
        callback ({token, username})
    }, 300)
}
function getUser(token, callback) {
    console.log("processing apiKey..")
    if (token)
        setTimeout(() => {
        callback({apiKey: "xkey123"})
        }, 200)
}
function getFiles (apiKey, callback) {
    console.log("processing files..")
    if(apiKey)
        setTimeout(() => {
        callback ({ files })
        }, 500)
}
login("fatkhul", function(publish){
    const {token} = publish
    getUser(token, function (publish) {
        const {apiKey} = publish
        getFiles(apiKey, function (publish){
            const {files} = publish
            console.log(files)
        })
    })
})
    
// }
// function getUser(token) {
//     if (token)
//         return {apiKey: "xkey123"}
// }
// function getFiles (apiKey) {
//     if(apiKey)
//         return files
// }
// const user = login("fatkhul amali")
// console.log(user.token)
// const {apiKey} = getUser(user.token)
// console.log(apiKey)

// const getUserFiles = getFiles(apiKey)
// console.log(getUserFiles)