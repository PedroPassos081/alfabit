import { Meta, StoryObj } from "@storybook/react";
import Botao, { BotaoProps } from ".";


const meta: Meta<BotaoProps> = {
    title: 'Molecules/Button',
    component: Botao,
    argTypes: {}
}

export default meta

export const Primary: StoryObj<BotaoProps> = {
    args: {
        children: 'Botão'
    }
}

export const Violet: StoryObj<BotaoProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet'
    }
}