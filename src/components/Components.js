
function Button ({text, classname, type, onClick, style})
{
    return(
        <button className={`${classname} button`} onClick={onClick} type={type} style={style}>{text}</button>
    )
}

function Input ({placeholder, type, value, onChange, onKeyDown})
{
    return(
        <input className={`input`} type={type} placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown}/>
    )
}

function Topic ({text})
{
    return(
        <h2 className={`topic`}>{text}</h2>
    )
}

export  {Button, Input, Topic};