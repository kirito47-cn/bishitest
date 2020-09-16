const sqrt = (num:number,precision:number) => {
    if(num< 0) {
        throw new Error('负数没有平方根')
    } else if (num === 1 || num === 0) {
        return num
    } else {
       let val = num, last:number
       do {
           last = val
           val = (val + num/val) / 2
       } while (Math.abs(val - last) > precision)
       return val
    }
}
console.log(sqrt(10,0.01))