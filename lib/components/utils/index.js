export function hash(data, filename = '', lineNumber = Date.now()) {
    return `${Object.keys(data)[0]}_${filename.replace(/[\/\.\-]+/g, '')}_${lineNumber}`;
}
