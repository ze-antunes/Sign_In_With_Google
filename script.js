
let responsePayload;
let handleCredentialResponse = (response) => {
    responsePayload = decodeJwtResponse(response.credential);

    console.log(responsePayload);
    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
}

function decodeJwtResponse(data) {
    let tokens = data.split(".")
    return JSON.parse(atob(tokens[1]))
}
