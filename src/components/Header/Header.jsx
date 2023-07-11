import React from 'react'
import css from './Header.module.scss';
import * as Unicons from '@iconscout/react-unicons';
import user from '../../assets/user-circle.svg'

const Header = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.left}>
              <form>
                <input className='search' type="search" placeholder="Tap to search..." />
              </form>
            </div>

            <div className={css.right}>
              <div className={css.notification}>
                <Unicons.UilBell />
              </div>
              <div className={css.user}>
                <img src={user} alt="" />
                <div className={css.info}>
                  <span>Amiwr mls</span>
                  <span>Superuser</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header