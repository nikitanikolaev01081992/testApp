import * as React from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import { setScreenData } from "../actions/actions";

const ImageScreen = ({ data, navigation, setCurrentScreenData }) => {
    setCurrentScreenData("screen 2", navigation);
    return <Image style={{ width: "100%", height: "100%" }} source={{ uri: data.urls.full }} />;
};

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.dataState.find((item) => {
            return item.id == state.idState;
        }),
        navigation: ownProps.navigation,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentScreenData: (screen, navigation) => dispatch(setScreenData(screen, navigation)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageScreen);
