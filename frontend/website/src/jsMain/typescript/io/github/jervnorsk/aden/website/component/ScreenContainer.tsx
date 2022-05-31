import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {PropsWithChildren, ReactElement} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {ScreenProps} from "./Screen";

export type ScreenContainerProps = PropsWithChildren<any>

export default (props: ScreenContainerProps) => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {
                    React.Children.map(props.children, child => {
                        return <Stack.Screen {...child.props} />
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
