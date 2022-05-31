import * as React from "react";
import {useEffect, useState} from "react";
import Container from "../component/Container";

export type LoadScreenProps = {
    loading: boolean
}

export default (props: LoadScreenProps) => {
    const [transform, setTransform] = useState("")

    const style = {
        transition: "all 0.5s linear 0s",
        backgroundColor: "#000",
        transform
    }

    useEffect(() => {
        if (props.loading) {
            setTransform("translateY(0%)")
        } else {
            setTransform("translateY(-100%)")
        }
    }, [props.loading])

    return (
        <Container style={style}/>
    )
}
