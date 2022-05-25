import React from "react"
import * as NativeBase from "native-base"
import {NativeBaseProvider} from "native-base"
import ExpoAppLoading from "expo-app-loading"
import {useFonts} from "expo-font"
import {MaterialCommunityIcons, Ionicons, AntDesign, Entypo} from '@expo/vector-icons';
import {Outfit_100Thin, Outfit_500Medium} from "@expo-google-fonts/outfit";


const Icon: React.FC = (props) =>
    <NativeBase.Box bg="primary.500">
        {props.children}
    </NativeBase.Box>

const Logo: React.FC = (props) =>
    <NativeBase.Text fontWeight={100} fontSize="50px" letterSpacing="-0.09em">
        Aden
    </NativeBase.Text>

const SupportButton: React.FC<NativeBase.IButtonProps> = (props) =>
    <NativeBase.Button
        leftIcon={
            <NativeBase.Icon as={MaterialCommunityIcons} name="patreon" size="31px"/>
        }
        width="200px"
        height="50px"
        borderRadius="38px"
        backgroundColor="black"
    >
        <NativeBase.Text
            fontWeight={500}
            fontSize={"34px"}
            color={"white"}
            alignItems={"center"}
            textAlign={"center"}
        >
            Support
        </NativeBase.Text>
    </NativeBase.Button>

const Separator: React.FC = (props) =>
    <NativeBase.Row space={"5px"} justifyContent={"center"} padding={"3px"}>
        <NativeBase.Box width={"4px"} height={"4px"} borderRadius={"10px"} backgroundColor={"black"}/>
        <NativeBase.Box width={"4px"} height={"4px"} borderRadius={"10px"} backgroundColor={"black"}/>
        <NativeBase.Box width={"4px"} height={"4px"} borderRadius={"10px"} backgroundColor={"black"}/>
    </NativeBase.Row>

const Extension: React.FC = (props) =>
    <NativeBase.Center width={"100px"} height={"70px"}>
        {props.children}
    </NativeBase.Center>

const ServiceBar: React.FC = (props) =>
    <NativeBase.Column width={"100px"} borderRightWidth={1}>
        <NativeBase.Column flex={1}>
            <Extension>
                <NativeBase.Icon as={Entypo} name={"magnifying-glass"} size={"50px"} color={"black"}/>
            </Extension>
            <Separator />
            <Extension>
                <NativeBase.Icon as={MaterialCommunityIcons} name={"cards"} size={"50px"} color={"black"}/>
            </Extension>
            <Separator />
            <Extension>
                <NativeBase.Icon as={AntDesign} name={"plus"} size={"50px"} color={"black"}/>
            </Extension>
        </NativeBase.Column>
        <NativeBase.Column>
            <Extension>
                <NativeBase.Icon as={AntDesign} name={"message1"} size={"50px"} color={"black"}/>
            </Extension>
            <Separator />
            <Extension>
                <NativeBase.Icon as={Ionicons} name={"person-outline"} size={"50px"} color={"black"}/>
            </Extension>
        </NativeBase.Column>
    </NativeBase.Column>

const Header: React.FC = (props) =>
    <NativeBase.ZStack height="80px" borderBottomWidth={1} justifyContent={"center"}>
        <NativeBase.Row width={"100vw"} justifyContent={"center"}>
            <Logo/>
        </NativeBase.Row>
        <NativeBase.Row width={"100vw"} justifyContent={"right"} right={"35px"}>
            <SupportButton/>
        </NativeBase.Row>
    </NativeBase.ZStack>

const Main: React.FC<NativeBase.IFlexProps> = (props) =>
    <NativeBase.Row flex={props.flex}>
        <ServiceBar/>
    </NativeBase.Row>

const Footer: React.FC = (props) =>
    <NativeBase.ZStack height={"30px"} borderTopWidth={1} justifyContent={"center"}>
        <NativeBase.Text justifyContent={"right"} right={"35px"}>
            by JervNorsk
        </NativeBase.Text>
    </NativeBase.ZStack>

const App: React.FC = (props) =>
    <NativeBaseProvider theme={
        NativeBase.extendTheme({
            fontConfig: {
                Outfit: {
                    100: {
                        normal: "Outfit_100Thin"
                    },
                    500: {
                        normal: "Outfit_500Medium"
                    }
                }
            },
            fonts: {
                heading: "Outfit",
                body: "Outfit",
                mono: "Outfit"
            }
        })
    }>
        <NativeBase.Column backgroundColor={"#E5E5E5"} height={"100vh"} display={"flex"}>
            <Header/>
            <Main flex={1}/>
            <Footer/>
        </NativeBase.Column>
    </NativeBaseProvider>

export default () => {
    let [fontsLoaded] = useFonts({
        Outfit_100Thin,
        Outfit_500Medium,
    })

    if (!fontsLoaded) {
        return <ExpoAppLoading/>
    }

    return <App/>
}

