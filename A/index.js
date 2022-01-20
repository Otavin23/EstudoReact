async function exut(url){
    const resultado = await fetch(url )
    const converterjson = await resultado.json()
    console.log(converterjson)
}
exut("https://facebook.com/api")