import {useState} from "react";
import {FontAssetMap} from "./FontHooks";
import {loadAsync} from "expo-font";

export type AssetProps =
    {
        fonts: FontAssetMap
        fontDefault: string
    }

export type AsyncAssetProps =
    {
        isReady: boolean
    }
    & AssetProps

export const useAssets = (assets: AssetProps): AsyncAssetProps => {
    const [isReady, setReady] = useState(false)

    const computedFonts = computeFonts(assets.fonts)

    loadAsync(computedFonts)
        .then(() => {
            setReady(true)
        })

    return {isReady, ...assets}
}

export function computeFonts(fonts: FontAssetMap): any {
    const result: { [p: string]: any } = {}

    Object.entries(fonts).forEach(([fontId, font]) => {
        Object.entries(font).forEach(([fontWeightId, fontWeight]) => {
            Object.entries(fontWeight).forEach(([fontTypeId, fontType]) => {
                let loadId = `${fontId}-${fontWeightId}`

                switch (fontTypeId) {
                    case "normal":
                        break
                    default:
                        loadId += fontTypeId.charAt(0) + fontTypeId.substring(1)
                        break
                }

                result[loadId] = fontType
                switch (fontTypeId) {
                    case "normal":
                        fontWeight["normal"] = loadId
                        break
                }
            })
        })
    })

    return result
}
