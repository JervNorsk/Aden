export type FontAssetMap = {
    [p: string]: FontAsset
}

export type FontAsset =
    {
        100?: FontWeight,
        200?: FontWeight,
        300?: FontWeight,
        400?: FontWeight,
        500?: FontWeight,
        600?: FontWeight,
        700?: FontWeight,
        800?: FontWeight,
        900?: FontWeight
    }

export type FontWeight = {
    normal: any
}

