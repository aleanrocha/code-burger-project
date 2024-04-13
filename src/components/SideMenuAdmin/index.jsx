import menuList from './menu-list'
import { SideMenuContainer, ItemContainer, ListLink } from './styles'

const SideMenuAdmin = () => {
  return (
    <SideMenuContainer>
      <hr />
      {menuList.map((item) => (
        <ItemContainer key={item.id}>
          {item.icon}
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr />
    </SideMenuContainer>
  )
}

export default SideMenuAdmin
