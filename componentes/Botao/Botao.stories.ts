import { Meta, StoryObj } from "@storybook/react";
import Botao, { BotaoProps } from ".";

const meta: Meta<BotaoProps>= {
    title: 'Moleculas/Botao',
   // tags: ['autodocs'],
    component: Botao,
    argTypes: {}
}

export default meta

export const Primary: StoryObj<BotaoProps> = {
    args: {
        children: 'Botao'
    }
}