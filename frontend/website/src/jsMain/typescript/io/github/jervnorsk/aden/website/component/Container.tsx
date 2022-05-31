import React, {PropsWithChildren} from "react";
import {IStackProps, Stack} from "native-base";

export type ContainerProps<P> =
    PropsWithChildren<{
        id: string,
        fillScreen?: boolean
    }>
    & IStackProps
    & P

export default (props: ContainerProps<any>) => {
    let width, height = "100%"

    if (props.fillScreen) {
        width = "100vw"
        height = "100vh"
    }

    return (
        <Stack nativeID={props.id} width={width} height={height} {...props} />
    )
}
