import React, {PropsWithChildren} from "react"
import {Image} from "react-native"
import {Box, Center, Column, extendTheme, NativeBaseProvider, Text} from "native-base"
import {useFonts} from "expo-font";
import ExpoAppLoading from "expo-app-loading"
import {Outfit_100Thin, Outfit_300Light, Outfit_400Regular, Outfit_500Medium} from "@expo-google-fonts/outfit"
import * as Animatable from "react-native-animatable"
import Svg, {Line} from "react-native-svg"
import {useAssets} from "expo-asset";

export default (props: PropsWithChildren<{}>) => {
    let [fontsLoaded] = useFonts({
        Outfit_100Thin,
        Outfit_300Light,
        Outfit_400Regular,
        Outfit_500Medium,
    })

    // const [assets, error] = useAssets([
    //     require('../resources/Icon.png')
    // ]);

    if (!fontsLoaded) {
        return <ExpoAppLoading/>
    }

    return <NativeBaseProvider
        config={{
            dependencies: {
                "linear-gradient": require("expo-linear-gradient").LinearGradient
            }
        }}
        theme={
            extendTheme({
                fontConfig: {
                    Outfit: {
                        100: {
                            normal: "Outfit_100Thin"
                        },
                        300: {
                            normal: "Outfit_300Light"
                        },
                        400: {
                            normal: "Outfit_400Regular"
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

        {/* Page */}
        <Column>

            {/* Background */}
            <Box width={"100vw"} height={"100vh"} position={"absolute"} background={{
                linearGradient: {
                    colors: ["#02B8F4", "#EA005F"],
                    start: [0, .4],
                    end: [1, 0]
                }
            }}>
                <Image source={require("../resources/Background.png")} style={{width: "100%", height: "100%" }} />
            </Box>

            {/* Foreground */}
            <Column width={"100vw"} height={"100vh"} position={"absolute"}>

                {/* Header */}
                <Column flexGrow={1}
                        alignItems={"flex-start"} justifyContent={"flex-end"}
                        paddingLeft={"30px"}
                        paddingRight={"30px"}
                        paddingBottom={"140px"}>

                    {/* Image */}
                    <Column alignSelf={"stretch"} flexGrow={1} alignItems={"flex-end"} justifyContent={"flex-end"} paddingBottom={"30px"}>
                        <Animatable.View duration={2000} iterationCount={"infinite"} direction={"alternate"}
                                         animation={{
                                             0: {translateY: 0},
                                             1: {translateY: -20}
                                         }}>
                            <Image source={require("../resources/Icon.png")} style={{width: "240px", height: "240px" }} />
                        </Animatable.View>
                    </Column>

                        {/* Logo */}
                        <Column alignSelf={"stretch"} alignItems={"flex-start"} overflow={"hidden"}>
                            <Animatable.View duration={1000}
                                             animation={{
                                                 0: {translateX: -200},
                                                 1: {translateX: 0}
                                             }}>
                                <Text fontWeight={400}
                                      fontStyle={"normal"}
                                      fontSize={"48px"}
                                      lineHeight={"60px"}
                                      letterSpacing={"-0.09em"}
                                      color={"#FFF"}>
                                    Aden
                                </Text>
                            </Animatable.View>
                        </Column>

                        {/* Section */}
                        <Column alignSelf={"stretch"} alignItems={"flex-start"} overflow={"hidden"}>
                            <Animatable.View duration={1000}
                                             animation={{
                                                 0: {translateX: -200},
                                                 1: {translateX: 0}
                                             }}>

                                {/* Separators */}
                                <Column alignSelf={"stretch"} alignItems={"flex-start"} color={"#FFF"}>
                                    <Svg height={"8px"} width={"35px"}>
                                        <Line x1={"0"} y1={"0"} x2={"100%"} y2={"0"} stroke={"#FFF"} strokeWidth={"4"}/>
                                    </Svg>
                                    <Animatable.View delay={800}
                                                     duration={1000}
                                                     animation={{
                                                         0: {translateX: 0},
                                                         1: {translateX: 20}
                                                     }}>
                                        <Svg height={"5px"} width={"35px"}>
                                            <Line x1={"0"} y1={"0"} x2={"100%"} y2={"0"} stroke={"#FFF"} strokeWidth={"4"}/>
                                        </Svg>
                                    </Animatable.View>
                                </Column>

                                {/* Description */}
                                <Text fontWeight={300}
                                      fontStyle={"normal"}
                                      fontSize={"16px"}
                                      lineHeight={"20px"}
                                      textAlign={"left"}
                                      color={"#FFF"}>
                                    A secure place for non-monogamy people.
                                </Text>
                            </Animatable.View>
                        </Column>

                </Column>

            </Column>
        </Column>
    </NativeBaseProvider>
}
