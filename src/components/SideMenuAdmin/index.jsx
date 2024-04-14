import { useState } from 'react'
import { TbLogout } from 'react-icons/tb'

import paths from '../../constants/paths'
import useUser from '../../hooks/useUser'
import menuList from './menu-list'
import { SideMenuContainer, ItemContainer, ListLink } from './styles'

const SideMenuAdmin = () => {
  const { logout } = useUser()
  const [active, setActive] = useState(1)

  return (
    <SideMenuContainer>
      <hr />
      {menuList.map((item) => (
        <ItemContainer
          key={item.id}
          $isActive={active === item.id}
          onClick={() => setActive(item.id)}
        >
          {item.icon}
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr />
      <ItemContainer
        style={{ position: 'absolute', bottom: '45px', left: '20px' }}
      >
        <TbLogout />
        <ListLink to={paths.Login} onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </SideMenuContainer>
  )
}

export default SideMenuAdmin
