import * as React from "react";
import {PropsWithChildren, useState} from "react";
import {NativeBaseProvider, VStack} from "native-base";
import {Text, View} from "react-native";
import LoadScreen from "../screen/LoadScreen";

const load = () => {
    const [isLoading, setLoading] = useState(true)

    setTimeout(()=> setLoading(false), 4000)

    return isLoading
}

export type ThemeManagerProps = PropsWithChildren<any>

export default (props: ThemeManagerProps) => {
    const isLoading = load()

    return (
        <NativeBaseProvider>
            <VStack flex={1}>
                {props.children}
                <LoadScreen loading={isLoading} />
            </VStack>
        </NativeBaseProvider>
    )
}
