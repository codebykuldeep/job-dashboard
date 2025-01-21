export function nameFormatter(value:string){
    const arr = value.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('').split('_').join(" ");
}


