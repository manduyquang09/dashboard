import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Svg, { G, Rect } from 'react-native-svg';
import Line from './line';
import { scale, verticalScale } from 'react-native-size-matters';

const StackedBar_Chart = () => {
  const data = [
    { label: 'A', group1: 3, group2: 2, group3: 1 },
    { label: 'B', group1: 4, group2: 3, group3: 2 },
    { label: 'C', group1: 2, group2: 4, group3: 3 },
    { label: 'D', group1: 5, group2: 6, group3: 4 },
  ];

  const barWidth =scale(66); 
  const spacing =scale(1); 
  const maxHeight =verticalScale(150); 

  return (
    <View
    style={{flex:1,
        justifyContent: 'center', 
        alignItems: 'center', 
    }}
    >
      <Svg width="100%" height={verticalScale(200)}

      >
        {data.map((item, index) => {
          const xPosition = index * (barWidth + spacing);
          const group1Height = (item.group1 / 10) * maxHeight;
          const group2Height = (item.group2 / 10) * maxHeight;
          const group3Height = (item.group3 / 10) * maxHeight;

          return (
            <G key={index}>
              <Rect
                x={xPosition+50}
                y={maxHeight - group1Height+1}
                width={2}
                height={group1Height}
                fill="blue"
            
              />
              <Rect
                x={xPosition+50}
                y={maxHeight - group2Height - group1Height}
                width={2}
                height={group2Height}
                fill="green"
              />
              <Rect
                x={xPosition+50}
                y={maxHeight - group3Height - group2Height - group1Height-2}
                width={2}
                height={group3Height}
                fill="red"
              />
            </G>
          );
        })}
      </Svg>

      
    </View>
  );
};

export default memo(StackedBar_Chart);
