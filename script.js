function handleCredencialResponse(response) {
    console.log(response)
}

function decodeJwtResponse(data) {
    let tokens = data.split(".")
    return JSON.parse(atob(tokens[1]))
}