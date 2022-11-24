export const MenuButton = (props) =>  {
    
    const contentHandler = () => {
        return props.action(props.content)
    }
    
    return (
        <button onClick={contentHandler}>{props.children}</button>
    )
}