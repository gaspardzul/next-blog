
const PageTitle =({num=0 ,pageName='',onCountLetras=null,nombre2=''})=> {

    const contarLetras =()=>{
            onCountLetras && onCountLetras(pageName.length+num,num)
    }

    return (
        <p>Hola gaspar bienvenido a Blog {nombre2} {pageName} {num} <button onClick={contarLetras} > obtener Num</button>  </p>
    )
}

export default PageTitle;