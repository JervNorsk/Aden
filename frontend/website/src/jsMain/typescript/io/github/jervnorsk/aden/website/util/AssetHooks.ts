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
        async: {
            isCompleted: boolean,
            percentage: number
        }
    }
    & AssetProps

export const useAssets = (assets: AssetProps): AsyncAssetProps => {
    const [isCompleted, setCompleted] = useState(false)
    const [percentage, setPercentage] = useState(0)

    const computedFonts = computeFonts(assets.fonts)

    const incrementPercentage = (percentage: number, setPercentage: (value: number) => void, increment: number): void => {
        setPercentage(percentage + increment)
    }

    loadAsync(computedFonts)
        .then(() => {
            setPercentage(100)
            setCompleted(true)
        })

    return {async: {isCompleted, percentage}, ...assets}
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
