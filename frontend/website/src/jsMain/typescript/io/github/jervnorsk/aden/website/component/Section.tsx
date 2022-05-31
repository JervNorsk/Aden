import * as React from "react";
import {Box, ITextProps, Text, useBreakpointValue, VStack} from "native-base";
import Container, {ContainerProps} from "./Container";

const Title = (props: ITextProps) => {
    let style = useBreakpointValue({
        base: {
            fontSize: "3.8rem",
            lineHeight: "auto"
        },
        sm: {
            fontSize: "7.6rem",
            lineHeight: "auto"
        },
        md: {
            fontSize: "12rem",
            lineHeight: "auto"
        }
    })
    return (
        <Text style={style} color={props.color}>{props.children}</Text>
    )
}

const Separator = () => {
    let style = useBreakpointValue({
        base: {
            width: "44px",
            height: "2px",
            marginBottom: "0.7rem",
            borderRadius: "5px",
            background: "#ff4d5a"
        },
        sm: {
            width: "70px",
            height: "4px",
            marginBottom: "1.4rem",
            borderRadius: "5px",
            background: "#ff4d5a"
        },
        md: {
            width: "80px",
            height: "4px",
            marginBottom: "1.4rem",
            borderRadius: "5px",
            background: "#ff4d5a"
        }
    })
    return (
        <VStack>
            <Box style={style}/>
            <Box style={{
                ...style,
                transform: {
                    translateX: "50%"
                }
            }}/>
        </VStack>
    )
}

const Description = (props: ITextProps) => {
    let style = useBreakpointValue({
        base: {
            fontSize: "1.2rem",
            lineHeight: "1.4",
            letterSpacing: "0.1rem"
        },
        sm: {
            fontSize: "2.4rem",
            lineHeight: "1.4",
            letterSpacing: "0.1rem"
        },
        md: {
            fontSize: "2.8rem",
            lineHeight: "1.5",
            letterSpacing: "0.1rem"
        }
    })
    return (
        <Text style={style} color={props.color}>{props.children}</Text>
    )
}

export type SectionProps =
    ContainerProps<{
        title: string
    }>

export default (props: SectionProps) => {
    let style = useBreakpointValue({
        base: {
            marginLeft: "13%",
            paddingBottom: "8rem",
            justifyContent: "flex-end"
        },
        sm: {
            marginLeft: "11%",
            paddingBottom: "0%",
            justifyContent: "center"
        }
    })
    return (
        <Container style={style} {...props}>
            <Title color={props.color}>
                {props.title}
            </Title>
            <Separator/>
            <Description color={props.color}>
                {props.children}
            </Description>
        </Container>
    )
}
