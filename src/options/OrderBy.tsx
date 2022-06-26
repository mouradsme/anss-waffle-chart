import React, { useEffect }                    from 'react';
import {  Select }              from '@grafana/ui';
import {  StandardEditorProps } from '@grafana/data';

export const OrderBy: React.FC<StandardEditorProps<number>> = ({  value, onChange, context }) => {
    var options = [];
    const Data = context.data
    useEffect(( ) => {
      if(Data.length > 0) {
          Data[0].fields.forEach((item) => {
            options.push({label: item.name, value: item.name})
          })
      }
    })
   
    return <Select options={options} value={value} onChange={(selectableValue) => { onChange(selectableValue.value) ; }} />;
};