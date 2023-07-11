import React from 'react'
import css from './Table.module.scss';

const Tabel = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.table_wrapper}>
        <table class={css.fl_table}>
          <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
                <th>Header 4</th>
                <th>Header 5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
            </tr>
            <tr>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
            </tr>
            <tr>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
            </tr>
            <tr>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
            </tr>
            <tr>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Tabel