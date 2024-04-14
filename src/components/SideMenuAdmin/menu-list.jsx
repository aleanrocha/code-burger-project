import { IoIosAddCircle } from 'react-icons/io'
import { TbPaperBag, TbBurger } from 'react-icons/tb'

import paths from '../../constants/paths'

const menuList = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.AdPanel,
    icon: <TbPaperBag />
  },
  {
    id: 2,
    label: 'Produtos',
    link: paths.ListProducts,
    icon: <TbBurger />
  },
  {
    id: 3,
    label: 'Adicionar produto',
    link: paths.NewProduct,
    icon: <IoIosAddCircle />
  }
]

export default menuList
