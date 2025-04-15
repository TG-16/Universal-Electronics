
function Button ({text})
{
    return(
        <button>{text}</button>
    )
}

function Input ({placeholder, type})
{
    return(
        <input type={type} placeholder={placeholder}/>
    )
}

function Topic ({text})
{
    return(
        <h2>{text}</h2>
    )
}

export  {Button, Input, Topic};