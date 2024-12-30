import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Card from '../../components/CustomCard';
import { LineChart, XAxis, BarChart, Grid, YAxis, StackedBarChart } from 'react-native-svg-charts';
import { Svg, Defs, LinearGradient, Stop, Path, Circle, Line, Rect } from 'react-native-svg';
import * as scale from 'd3-scale';
import StackedBar_Chart from '../../components/Stacked';
import { Colors,FontSize  } from '../../theme';
import SmallCard from '../../components/SmallCard';
import { Styles } from './style';

const OverviewScreen = () => {
    const data = [30, 30, 35, 35, 25, 45];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const contentInset = { top: 10, bottom: 10, left: 10, right: 10 };
    const datas = [50, 10, 40, 95, 85, 35];
    const StackedData = [
        { all: 10, snowUI: 5, dashboard: 8 },
        { all: 15, snowUI: 10, dashboard: 12 },
        { all: 8, snowUI: 3, dashboard: 6 },
        { all: 12, snowUI: 7, dashboard: 10 },
        { all: 18, snowUI: 12, dashboard: 15 },
        { all: 9, snowUI: 4, dashboard: 7 },
    ];
    const itemList = ['all', 'snowUI', 'dashboard'];
    const colors = ['black', 'grey', 'red'];
    const ChartBackgound = ({ x, y, data }) => {
        const linePath = data
            .map((value, index) => `${index === 0 ? 'M' : 'L'}${x(index)},${y(value)}`)
            .join(' ');

        return (
            <Path
                d={`${linePath} L${x(data.length - 1)},${y(0)} L${x(0)},${y(0)} Z`}
                fill="url(#gradient)"
            />
        );
    };

    const Decorator = ({ x, y, data }) => {
        return data.map((value, index) => (
            <Circle
                key={index}
                cx={x(index)}
                cy={y(value)}
                r={4}
                fill={'white'}
                stroke={"black"}
                strokeWidth={2}
            />
        ));
    };

    const VerticalLine = ({ x, y, data }) => {
        if (!data) return null;
        return data.map((value, index) => (
            <Line
                key={index}
                x1={x(index)}
                y1={y(value)}
                x2={x(index)}
                y2={y(0)}
                stroke="rgba(175, 82, 222, 0.6)"
                strokeWidth={0.5}
            />
        ));
    };

    return (
        <ScrollView style={Styles.container}>
            <View
                style={{
                    flexDirection: "row", justifyContent: "space-between",
                    paddingVertical: 16,
                    gap: 16
                }}
            >
                <SmallCard />
                <SmallCard />
                
            </View>
            <Card title={"Users"}
                height={216}
                color={Colors.LINE_CHART}>
                <LineChart
                    style={{ flex: 1, marginLeft: 10 }}
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        strokeWidth: 2,
                        stroke: 'rgba(175, 82, 222, 1)',
                    }}
                >
                    <Defs>
                        <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <Stop offset="0%" stopColor="rgba(175, 82, 222, 1)" />
                            <Stop offset="40%" stopColor="white" />
                        </LinearGradient>
                    </Defs>
                    <ChartBackgound x={d => x(d.index)} y={d => y(d.value)} data={data} />
                    <Decorator x={d => x(d.index)} y={d => y(d.value)} data={data} />
                    <VerticalLine x={d => x(d.index)} y={d => y(d.value)} data={data} />
                </LineChart>
                <XAxis
                    data={data}
                    formatLabel={(value, index) => labels[index]}
                    contentInset={{ left: 20, right: 20 }}
                    svg={{ fontSize: FontSize.font14, fill: 'black' }}
                />
            </Card>

            {/* bar chart */}
            <Card title="Device Traffic"
                color={Colors.DEFAULT_BLUE}
                height={216}
            >
                <BarChart
                    style={{
                        flex: 1, paddingHorizontal: 16,
                    }}
                    data={data.map((value, index) => ({ value, label: labels[index] }))}
                    yAccessor={({ item }) => item.value}
                    xAccessor={({ item }) => item.label}
                    svg={{
                        fill: 'rgba(134, 65, 244, 0.8)',
                        cornerRadius: 50,
                    }}
                    contentInset={{ top: 30, bottom: 30 }}
                    spacingInner={0.3}
                    spacingOuter={0}
                    yMax={Math.max(...data) + Math.max(...data) / 5}
                    xScale={scale.scaleBand}
                    gridMin={0}
                />
            </Card>

            {/* StackedBarChart */}
            <Card title={"Product Traffic"}
                height={216}
                color={Colors.DEFAULT_RED}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginHorizontal: 30 }}>
                    {itemList.map((item, index) => (
                        <View key={item} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                            <View
                                style={{
                                    width: 10, height: 10,
                                    backgroundColor: colors[index],
                                    borderRadius: 90
                                }}
                            />
                            <Text style={{ marginLeft: 5 }}>{item}</Text>
                        </View>
                    ))}
                </View>

                <StackedBarChart
                    style={{ height: 132 }}
                    keys={itemList}
                    colors={colors}
                    data={StackedData}
                    showGrid={false}

                    spacingInner={0.1}
                    spacingOuter={0.5}

                />
            </Card>

            {/* cusstom */}

            {/* kit */}
            <Card title={"Stacked Chart"}
                height={216}
            >
                <StackedBar_Chart />
            </Card>
        </ScrollView>
    );
};

export default OverviewScreen;
