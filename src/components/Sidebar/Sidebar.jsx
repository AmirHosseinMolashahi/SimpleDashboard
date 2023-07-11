import React, {useRef, useState } from 'react'
import css from './Sidebar.module.scss';
import * as Unicons from '@iconscout/react-unicons';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const Sidebar = () => {
  const [menuOpend, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 640) {
      if (!menuOpened){
        return { left: "0" };
      }
    }
  };

  const menuRef = useRef()


  useOutsideAlerter(
    {
      menuRef,
      setMenuOpened
    }
  )

  return (
    <>
    <div className={css.menuIcon}
      onClick={() => setMenuOpened((prev) => !prev)}
      >
        <Unicons.UilBars />
    </div>
    <div className={css.wrapper}
      style={getMenuStyles(menuOpend)}>
        <div className={css.container}>
            <div className={css.logo}>Amiwr</div>

            <ul className={css.menu}>
                <li><a><Unicons.UilHome />Home</a></li>
                <li><a><Unicons.UilInvoice />Invoices</a></li>
                <li><a><Unicons.UilUser />Clients</a></li>
                <li><a><Unicons.UilShop />Products</a></li>
                <li><a><Unicons.UilMessage />Messages</a></li>
                <li><a><Unicons.UilSetting />Settings</a></li>
                <li><a><Unicons.UilQuestion />Help</a></li>
            </ul>
            <div className={css.logout}>
            <Unicons.UilSignOutAlt />Log Out
            </div>

            
        </div>
    </div>
    </>
  )
}

export default Sidebar