function fetchUser(){
    return new Promise(
        (resolve) => {
            setTimeout(()=>{
                    resolve([
                            {id:1, name: "smarak"}, {id:2, name: "sambhav", id:3, name: "ram"}
                    ])
            },1000)
        })
}
async function getUser(){
    const user = await fetchUser()
    console.log("User:",user)
}
getUser()