export const Container =  ({children}: {children: React.ReactNode}) => {
    return (
        <div style={{border: "1px solid lightblue", padding: "10px"}}>
            {children}
        </div>
    )
}
