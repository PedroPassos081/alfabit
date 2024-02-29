export type BotaoProps = {
    children: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;
  
  const Botao = ({ children, className }: BotaoProps) => {
    return <button
      className={`
        bg-primary rounded-md px-6 py-2 text-white
        ${className}
      `}
    >
      { children }
    </button>
  }

export default Botao