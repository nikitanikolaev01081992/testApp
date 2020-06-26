import * as React from "react";
import { StyleSheet, Text } from "react-native";

import { Provider } from "react-redux";
import store from "./store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListOfImages from "./components/image-list";
import ImageScreen from "./components/image-screen";

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="ListImages"
                        component={ListOfImages}
                        options={{ title: "Images" }}
                    />
                    <Stack.Screen
                        name="ImageScreen"
                        component={ImageScreen}
                        options={{ title: "Image Screen" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

const styles = StyleSheet.create({});

export default App;
