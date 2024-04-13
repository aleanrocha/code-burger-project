import { IoIosAddCircle } from 'react-icons/io'
import { TbPaperBag, TbBurger } from 'react-icons/tb'

const menuList = [
  {
    id: 1,
    label: 'Pedidos',
    link: '/pedidos',
    icon: <TbPaperBag />
  },
  {
    id: 2,
    label: 'Produtos',
    link: '/produtos',
    icon: <TbBurger />
  },
  {
    id: 3,
    label: 'Adicionar produto',
    link: '/adicionar',
    icon: <IoIosAddCircle />
  }
]

export default menuList
