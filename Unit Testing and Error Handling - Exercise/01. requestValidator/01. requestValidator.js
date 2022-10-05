function requestValidator(obj) {

    let methodValidation = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriValidation = /^[\w.]+$/g;
    let versionValidation = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messageValidation = [`<`, `>`, `\\`, `&`, `'`, `"`]

    if (!methodValidation.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`)
    }

    if (!obj.hasOwnProperty('uri')) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (obj.uri !== '*' && !obj.uri.match(uriValidation)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!versionValidation.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!obj.hasOwnProperty('message')) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    for (let ch of obj.message) {
        if (messageValidation.includes(ch)) {
            throw new Error(`Invalid request header: Invalid Message`);
        }
    }

    return obj
}
requestValidator({
    method: 'GET',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: ''
})