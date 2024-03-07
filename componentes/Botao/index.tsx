export type BotaoProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(variant: BotaoProps['variant'], disabled: BotaoProps['disabled']) {
  switch (variant) {
    case 'primary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white'
    case 'secondary':
      return disabled ? 'bg-disabled text-disabled' : 'bg-quaternary text-primary'
    case 'tertiary':
    default:
      return disabled ? 'text-disabled' : 'text-primary'
  }
}

const Botao = ({ variant = 'primary', children, className, disabled, ...rest }: BotaoProps) => {
  return <Botao
    className={`rounded-md px-6 py-2 ${getVariant(variant, disabled)} ${className}`}
    disabled={disabled}
    {...rest}
  >
    { children }
  </Botao>
}

export default <Botao></Botao>