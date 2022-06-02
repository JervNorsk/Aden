import {NavigationContainer} from "@react-navigation/native";
import {extendTheme, NativeBaseProvider, Stack} from "native-base";
import {PropsWithChildren, useEffect, useState} from "react";
import {View} from "react-native";
import {AsyncAssetProps} from "../util/AssetHooks";

export const LoadScreen = (props: AsyncAssetProps) => {
    const [transform, setTransform] = useState("")

    useEffect(() => {
        if (!props.isReady) {
            setTransform("translateY(0%)")
        } else {
            setTransform("translateY(-100%)")
        }
    }, [props.isReady])

    return (
        <View
            style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                backgroundColor: "#000",
                transition: "all 0.5s linear 0s",
                transform
            } as any}
        />
    )
}

export const MainScreen = (props: PropsWithChildren<AsyncAssetProps>) => {
    if (!props.isReady) {
        return null
    }
    const theme = extendTheme({
        fontConfig: props.fonts,
        fonts: {
            heading: props.fontDefault,
            body: props.fontDefault,
            mono: props.fontDefault
        }
    })
    return (
        <NativeBaseProvider theme={theme}>
            <Stack
                style={{
                    position: "absolute",
                    width: "100vw",
                    height: "100vh"
                }}
            >
                {props.children}
            </Stack>
        </NativeBaseProvider>
    )
}


export type RootProps = PropsWithChildren<{
    assets: AsyncAssetProps
}>
export const Root = (props: RootProps) => {
    return (
        <NavigationContainer>
            <MainScreen {...props.assets} children={props.children}/>
            <LoadScreen {...props.assets} />
        </NavigationContainer>
    )
}
export default Root
