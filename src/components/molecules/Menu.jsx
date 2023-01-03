import MenuBar from "../atoms/MenuBar/MenuBar"
import { MenuButton } from "../atoms/MenuButton/MenuButton"
import { useState, useEffect} from "react"

export const Menu =({changeContent,menus}) => {
    const generateMenu = () => {  
        return menus.map((menu, i) => {
            return <MenuButton key={i} action={changeContent} content={menu.content} uri={menu.uri} alt={menu.title}>{menu.icon ? menu.icon : menu.title}</MenuButton>
        })
    }
    let interval
    // useEffect(() => {
    //     console.log('Toot')
    // })

    // useEffect(() => {
    //     console.log("Component did mount")

    //     intervale = setInterval(console.log(menus), 1000)
    //     return () => {
    //         console.log("Component will unmount")
    //         clearInterval(interval)
    //     }
    // }, [])
    
    // useEffect(() => {
    //     console.log('Compoonent did update on Menus ?')
    // }, [menus])
    




    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (

        <MenuBar>
            {openMenu ? (<><p onClick={handleOpenMenu}>X</p>{
                generateMenu()
            }</>) : (<p onClick={handleOpenMenu}>O</p>)}
            
        </MenuBar>
    )
}