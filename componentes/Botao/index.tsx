export type BotaoProps = {
    children: React.ReactNode;
}& React.ButtonHTMLAttributes<HTMLButtonElement>

const Botao = ({ children, className}: BotaoProps) => {
    return <button 
    className={`
        bg-primary bg-opacity-50 rounded-[8px] px-[32px] py-[12px] text-white
        ${className}
    `}
    >
        {children}
     </button>
}

export default Botao