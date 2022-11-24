import MenuBar from "../atoms/MenuBar/MenuBar"
import { MenuButton } from "../atoms/MenuButton/MenuButton"

export const Menu =({changeContent,menus}) => {
    const generateMenu = () => {  
        return menus.map((menu, i) => {
            return <MenuButton key={i} action={changeContent} content={menu.content} uri={menu.uri} alt={menu.title}>{menu.icon ? menu.icon : menu.title}</MenuButton>
        })
    }
    return (

        <MenuBar>

            {
                generateMenu()
            }
        </MenuBar>
    )
}