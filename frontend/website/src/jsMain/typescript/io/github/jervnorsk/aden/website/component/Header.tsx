import {PropsWithChildren} from "react";
import {HStack, ITextProps, Link, Text} from "native-base";
import {StyleSheet} from "react-native";

export type HeaderProps = PropsWithChildren<{}>

export default (props: HeaderProps) => {
    // const []

    const style: any = {
        container: {
            paddingLeft: `10%`,
            paddingRight: `10%`,
            backgroundColor: "#000"
        },
        brand: {
            transition: "all 1s linear 0s",
            transform: "translateX(-110%)"
        }
    }
    return (
        <HStack style={style.container}>
            <Brand style={style.brand} fontSize={"4xl"} color={"#FFF"}/>
        </HStack>
    )
}

export type HeaderLinkProps = PropsWithChildren<ITextProps>

const HeaderLink = (props: HeaderLinkProps) => {
    const style = StyleSheet.create({
        container: {
            overflow: "hidden"
        }
    })
    return (
        <Link style={style.container}>
            <Text {...props} />
        </Link>
    )
}

const Brand = (props: HeaderLinkProps) => {
    return (
        <HeaderLink
            fontWeight={"100"}
            letterSpacing={"-0.09em"}
            {...props}
        >
            Aden
        </HeaderLink>
    )
}
