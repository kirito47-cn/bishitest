function replaceVersion (newVersion:string) {
    const reg:RegExp = /version=\'(\d+(\.\d+)*)\'/g
    const str = `<widget id="xx.xxx.xx" version='1.0'  xmlns="http://www.w3.org/ns/widgets" `
    console.log(str)
    return str.replace(reg,(word,g1) => {
        return word.replace(g1,newVersion)
    })
}
console.log(replaceVersion("3.4.5"))