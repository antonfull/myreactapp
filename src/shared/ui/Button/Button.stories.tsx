import type { Meta, StoryObj } from '@storybook/react';
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import 'app/styles/index.scss';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'text',
        theme:ButtonTheme.CLEAR
    },
};

export const Outline: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE
    },
};


