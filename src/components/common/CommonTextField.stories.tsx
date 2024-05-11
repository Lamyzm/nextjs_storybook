import type { Meta, StoryObj } from '@storybook/react';
import CommonTextField from './CommonTextField';

const meta = {
  title: 'TextField/CommonTextFieldessage',
  component: CommonTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    Value: { control: 'text', description: '텍스트 필드 value 메세지' },
    errorMessage: { control: 'text', description: '에러 메세지' },
    IsError: { control: 'boolean', description: '에러 상태 여부' },
    placeholder: { control: 'text', description: '텍스트 필드의 placeholder' },
    onIconClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    onChange: { action: 'changed', description: '텍스트 필드 값 변경 이벤트' },
  },
} satisfies Meta<typeof CommonTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Value: '안녕하세용',
    errorMessage: 'Hi',
    placeholder: '텍스트를 입력해 주세요',
    IsError: false,
    onChange: () => {},
    onIconClick: () => {},
  },
};
