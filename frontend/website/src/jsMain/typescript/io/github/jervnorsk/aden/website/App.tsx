import {Text} from "native-base";
import Root from "./component/Root";
import {useAssets} from "./util/AssetHooks";
import {Outfit} from "./asset/FontManager";

export default () => {
    const assets = useAssets({
        fonts: {
            Outfit
        },
        fontDefault: "Outfit"
    })
    return (
        <Root assets={assets}>
            <Text fontSize={"24px"}>Hello from React/JSX - TypeScript</Text>
        </Root>
    )
}
