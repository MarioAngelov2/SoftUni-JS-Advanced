function extract(content) {

    let text = document.getElementById(content);
    let regex = /\((.+?)\)/g;
    let matches = text.textContent.matchAll(regex);
    let result = [];

    for (let match of matches) {
        result.push(match[1]);
    }

    return result.join('; ');
}
