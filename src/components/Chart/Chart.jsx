import React from 'react'
import {XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    RadialChart} from 'react-vis';
import css from './Chart.module.scss'

const Chart = () => {
  const myData = [{angle: 1, radius: 10},
                  {angle: 5, radius: 8},
                  {angle: 2, radius: 12},
                  {angle: 3, radius: 11},
                  {angle:6, radius: 9,labe: "label1"}]
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.left}>
            <XYPlot margin={{bottom: 70}} xType="ordinal" width={400} height={200}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis tickLabelAngle={-45} />
            <YAxis />
            <VerticalBarSeries
                data={[
                {x: 'Apples', y: 10},
                {x: 'Bananas', y: 5},
                {x: 'Cranberries', y: 15},
                {x: 'Orange', y: 20},
                {x: 'Peach', y: 13},
                {x: 'Chery', y: 6},
                {x: 'Watermelone', y: 4},
                {x: 'Pearl', y: 9},
                ]}
            />
            </XYPlot>
            </div>
            <div className={css.right}>
                <RadialChart
                    data={myData}
                    width={300}
                    height={200} />
            </div>
        </div>
    </div>
    
  )
}

export default Chart