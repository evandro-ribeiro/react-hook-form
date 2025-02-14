import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}