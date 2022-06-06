import {NavigationContainer} from "@react-navigation/native";
import {extendTheme, NativeBaseProvider, Stack} from "native-base";
import {PropsWithChildren, useEffect, useState} from "react";
import {View} from "react-native";
import {AsyncAssetProps} from "../util/AssetHooks";

export const LoadScreen = (props: AsyncAssetProps) => {
    const [transform, setTransform] = useState("")

    useEffect(() => {
        if (!props.async.isCompleted) {
            setTransform("translateY(-0%)")
        } else {
            setTransform("translateY(-100%)")
        }
    }, [props.async.isCompleted])

    const style: any = {
        container: {
            position: "absolute",
            width: "100vw",
            height: "100vh",

            backgroundColor: "#000",
            transition: "all 1s cubic-bezier(0.3, 0.06, 0.78, 0.33) 0s",
            transform
        },
        barContainer: {
            width: "100%",
            height: "0.5rem",
        },
        bar: {
            flex: 1,
            backgroundColor: "#FFF",
            width: `${props.async.percentage}%`
        }
    }
    return (
        <View style={style.container}>
            <View style={style.barContainer}>
                <View style={style.bar} />
            </View>
        </View>
    )
}

export const MainScreen = (props: PropsWithChildren<AsyncAssetProps>) => {
    if (!props.async.isCompleted) {
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
            <Stack position={"absolute"} width={"100vw"} height={"100vh"}>
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
