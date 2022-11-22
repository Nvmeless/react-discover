import MenuBar from "../atoms/MenuBar/MenuBar"
import { MenuButton } from "../atoms/MenuButton/MenuButton"

export const Menu =({action,menus}) => {
    const generateMenu = () => {  
        return menus.map((menu, i) => {
            return <MenuButton key={i} action={action} uri={menu.uri} alt={menu.title}>{menu.icon ? menu.icon : menu.title}</MenuButton>
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