import * as React from "react";
import { TouchableHighlight, Text, View, Image, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { setCurrentId } from "../actions/actions";

const ImageButton = ({ state, data, navigation, saveImageId }) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPress={() => {
                    saveImageId(data.id);
                    navigation.navigate("ImageScreen");
                }}
                underlayColor="white"
            >
                <Image style={{ width: 200, height: 200 }} source={{ uri: data.urls.thumb }} />
            </TouchableHighlight>
            <Text style={styles.text}>{data.user.name}</Text>
        </View>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        state: state.idState,
        data: state.dataState.find((item) => {
            return item.id == ownProps.id;
        }),
        navigation: state.screenState.navObj,
    };
};

const mapDispatchToProps = (dispatch) => {
    return { saveImageId: (id) => dispatch(setCurrentId(id)) };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageButton);

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        width: 200,
        marginLeft: "auto",
        marginRight: "auto",
    },

    text: {
        fontSize: 18,
        fontWeight: "bold",
    },

    imageSmall: {
        width: 300,
        height: 300,
    },
});
