
function Button ({text, classname, type, onClick})
{
    return(
        <button className={`${classname} button`} onClick={onClick} type={type}>{text}</button>
    )
}

function Input ({placeholder, type, value, onChange})
{
    return(
        <input className={`input`} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    )
}

function Topic ({text})
{
    return(
        <h2 className={`topic`}>{text}</h2>
    )
}

export  {Button, Input, Topic};