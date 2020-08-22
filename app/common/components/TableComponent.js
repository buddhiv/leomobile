import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, View, Text, Image, FlatList} from 'react-native';
import {DrawerItemList, DrawerItem} from '@react-navigation/drawer';

const TableComponent: () => React$Node = (props) => {

    let tableRowRenderer = (item, key) => {
        return <View style={{flexDirection: 'row'}} key={key}>
            {
                props.columnRatio.map((ratio, index) => {
                    return <View style={{flex: ratio, paddingVertical: 2}} key={index}>
                        <Text>{item[index]}</Text>
                    </View>;
                })
            }
        </View>;
    };

    return (
        <>
            <View>
                {
                    props.data.map((datum, key) => {
                        return tableRowRenderer(datum, key);
                    })
                }
            </View>
        </>
    );
};

TableComponent.propTypes = {
    data: PropTypes.array.isRequired,
    columnRatio: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TableComponent;

