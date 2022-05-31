import * as React from "react";
import {ScreenProps} from "../component/Screen";
import {ZStack} from "native-base";
import Container from "../component/Container";
import Section from "../component/Section";

export default (props: ScreenProps) => {
    return (
        <ZStack>
            <Container id={"Background"} fillScreen backgroundColor={"#000"}/>
            <Container id={"Navigation"} fillScreen>
                <Section id={"Introduction"} title={"Brand"} color={"#FFF"}>
                    Description
                </Section>
            </Container>
        </ZStack>
    )
}
