import { ImageSourcePropType } from "react-native/Libraries/Image/Image";

export interface CardProps {
    id: number;
    accountNo: string;
    balance: number;
    alias?: string;
    logo: ImageSourcePropType;
}

export interface CardSectionProps {
    data: Array<CardProps>;
}