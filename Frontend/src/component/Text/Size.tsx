import {Dimensions} from "react-native";
const {width,height} = Dimensions.get("window")

export const sizes = {
    //global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    //font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    //app dimensions
    width,
    height

}

export const fonts = {
    largeTitle: {fontFamily:"Lato-Regular", fontSize: sizes.largeTitle, lineHeight:55},
    h1: {fontFamily:"Lato-Bold", fontSize: sizes.h1, lineHeight:36 },
    h2: {fontFamily:"Lato-Bold", fontSize: sizes.h2, lineHeight:30 },
    h3: {fontFamily:"Lato-Bold", fontSize: sizes.h3, lineHeight:22 },
    h4: {fontFamily:"Lato-Bold", fontSize: sizes.h4, lineHeight:22 },
    body1: {fontFamily:"Lato-Regular", fontSize: sizes.body1, lineHeight:36 }, 
    body2: {fontFamily:"Lato-Regular", fontSize: sizes.body2, lineHeight:30 },
    body3: {fontFamily:"Lato-Regular", fontSize: sizes.body3, lineHeight:22 },
    body4: {fontFamily:"Lato-Regular", fontSize: sizes.body4, lineHeight:22 },
    body5: {fontFamily:"Lato-Regular", fontSize: sizes.body5, lineHeight:22 },
}

export const appFonts = {sizes,fonts}

