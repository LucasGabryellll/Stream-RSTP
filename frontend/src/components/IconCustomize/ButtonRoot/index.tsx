import { ReactNode } from "react";

interface ButtonRootProps {
    children: ReactNode;
    onPress: () => void;
}

export function ButtonRoot({ children, onPress }: ButtonRootProps) {
    return (
        <button onClick={onPress}>
            {children}
        </button>
    )
}