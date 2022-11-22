export const MenuButton = (props) =>  {
    return (
        <button onClick={props.action}>{props.children}</button>
    )
}