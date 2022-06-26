import React, {useEffect} from 'react';
import { PanelProps } from '@grafana/data';
import { ChartOptions } from 'types';
import { Utils  } from 'js/Utils';
import * as d3 from "d3";
import './css/main.css'
import { d3waffle } from './chart/init'
import $ from 'jquery'

interface Props extends PanelProps<ChartOptions> {}

export const ANSSChartsPanel: React.FC<Props> = (A) => {
    var   { data, options } = A,  
            ChartID       = `Chart-${A.id}`,
	    	    Series 			  = data.series, 		// Get series from Data Panel data object. Data fetched from a Database/Data Source is stored in the Series Object as a constant
	 		      Fields 			  = Series[0].fields,	// Fetch Fields (classes), from the series Object
            Data          = Utils.Populate(Fields, A.options.OrderBy, A.options.OrderDirection === 'desc' )    
  
          
          useEffect(() => {
            $(function() {
              var chart = d3waffle()
              chart.scale(options.scale)
              chart.rows(options.rowsNumber)
              chart.textColor(options.textColor)
              chart.textSize(options.fontSize)
              chart.autoColor(options.autoColoring)
              chart.height(options.height)
               if (!options.autoColoring) {
                let colors = Utils.Colors([options.gradientColor1, options.gradientColor2], Data.length)
                let Colors = {}
                var i = 0;
                Data.forEach( item => {
                  Colors[Utils.slugify(item.name)] = colors[i]
                  i++
                })
               chart.colors( Colors )
              }
              chart.appearancetimes(function(d, i){
                let mod = 10;
                let  val = i % mod;
                return val / mod * 1500;
              })
              d3.select(`#${ChartID}`)
                    .datum(Data)
                    .call(chart); 
            })
          }, [options])
 return (<>
 <div className='tooltip' id={ChartID+'-tooltip'}></div>
    <div className='WaffleChartContainer' id={ChartID}  style={{backgroundColor: options.BackgroundColor}}></div>
 </>) 

};
