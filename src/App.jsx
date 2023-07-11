import React from 'react'
import css from './styles/App.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Chart from './components/Chart/Chart';
import Tabel from './components/Table/Tabel';

const App = () => {
  return (
    <div className={css.container}>
      <Sidebar />
      <Header />
      <Info />
      <Chart />
      <Tabel />
    </div>
  )
}

export default App