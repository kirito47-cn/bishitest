function add(a:number,b:number) {
    return parseFloat((a+b).toFixed(10))
}
console.log(add(0.1,0.2) === 0.3)