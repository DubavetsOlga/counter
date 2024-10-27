type ButtonType = {
    onClick: () => void
    children: React.ReactNode
    disabled? : boolean
}

export const Button = ({children, onClick, disabled}: ButtonType) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{color:"black", background:"lightblue"}}
        >
            {children}
        </button>
    )
}
