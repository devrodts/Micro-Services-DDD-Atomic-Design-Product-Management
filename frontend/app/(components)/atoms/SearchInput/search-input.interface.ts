export interface SearchInputInterface{
    divClassName?: string;
    inputClassName?: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    children?: React.ReactNode;
    icon?: boolean;
    iconPosition?: "left" | "right";
}