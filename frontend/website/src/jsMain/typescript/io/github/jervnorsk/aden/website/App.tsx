import ScreenContainer from "./component/ScreenContainer";
import Screen from "./component/Screen";
import IndexScreen from "./screen/IndexScreen";
import UIFramework from "./component/UIFramework";
import LoadScreen from "./screen/LoadScreen";

export default () => {
    return (
        <UIFramework>
            <ScreenContainer>
                <Screen name={"Index"} component={IndexScreen}/>
            </ScreenContainer>
        </UIFramework>
    )
}
