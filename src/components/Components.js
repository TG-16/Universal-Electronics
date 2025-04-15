
function Button ({text, classname})
{
    return(
        <button className={`${classname} button`}>{text}</button>
    )
}

function Input ({placeholder, type})
{
    return(
        <input className={`input`} type={type} placeholder={placeholder}/>
    )
}

function Topic ({text})
{
    return(
        <h2 className={`topic`}>{text}</h2>
    )
}

export  {Button, Input, Topic};