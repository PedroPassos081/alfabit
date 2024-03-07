import { Meta, StoryObj } from "@storybook/react";
import Botao, { BotaoProps } from "./index"


const meta: Meta<BotaoProps> = {
    title: 'Molecules/Button',
    component: Botao,
    argTypes: {
        children: {
            type: "string"
        },
        disabled: {
            type: "boolean"
        },
        className: {
            type: "string"
        },
    }

}

export default meta

export const Primary: StoryObj<BotaoProps> = {
    args: {
        children: 'Botão'
    }
}

export const Disabled: StoryObj<BotaoProps> = {
    args: {
        children: 'Botão',
        disabled: true
    }
}

export const Secondary: StoryObj<BotaoProps> = {
    args: {
        children: 'Botão',
        variant: 'secondary'
    }
}

export const Tertiary: StoryObj<BotaoProps> = {
    args: {
        children: 'Botão',
        variant: 'tertiary'
    }
}

export const TertiaryDisabled: StoryObj<BotaoProps> = {
    args: {
        children: 'Botão',
        variant: 'tertiary',
        disabled: true
    }
}


export const Violet: StoryObj<BotaoProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet'
    }
}

export const VioletSecondary: StoryObj<BotaoProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        variant: 'secondary'
    }
}

export const VioletTertiary: StoryObj<BotaoProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        variant: 'tertiary'
    }
}