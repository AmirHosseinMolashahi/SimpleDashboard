import React from 'react'
import css from './Info.module.scss';
import * as Unicons from '@iconscout/react-unicons';

const Info = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.box}>
                <div className={css.top}>
                    <Unicons.UilBrightnessEmpty />
                    <span>Total Revenue</span>
                </div>
                <div className={css.bottom}>
                    <span>$216K</span>
                    <span className={css.success}>$241</span>
                </div>
            </div>
            <div className={css.box}>
                <div className={css.top}>
                    <Unicons.UilInvoice />
                    <span>Invoices</span>
                </div>
                <div className={css.bottom}>
                    <span>2,221</span>
                    <span className={css.success}>125</span>
                </div>
            </div>
            <div className={css.box}>
                <div className={css.top}>
                    <Unicons.UilUser />
                    <span>Clients</span>
                </div>
                <div className={css.bottom}>
                    <span>1,423</span>
                    <span className={css.success}>91</span>
                </div>
            </div>
            <div className={css.box}>
                <div className={css.top}>
                    <Unicons.UilHeart />
                    <span>Loyalty</span>
                </div>
                <div className={css.bottom}>
                    <span>78%</span>
                    <span className={css.fail}>9%</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info