import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";

import { connect } from "react-redux";
import { getDataFromApi, setScreenData } from "../actions/actions";

import ImageButton from "./image-button";

const urlToApi =
    "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0";

function ListOfImages({ data, navigation, setCurrentScreenData, getDataFromApi }) {
    setCurrentScreenData("screen 1", navigation);

    if (data.length == 0) {
        getDataFromApi();
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => <ImageButton id={item.id} />}
            />
        </View>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.dataState,
        navigation: ownProps.navigation,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDataFromApi: () => dispatch(getDataFromApi(urlToApi)),
        setCurrentScreenData: (screen, navigation) => dispatch(setScreenData(screen, navigation)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOfImages);
