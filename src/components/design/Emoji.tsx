import { Component, ComponentProps } from 'solid-js'

type StrictEmojiTypes = Omit<
  ComponentProps<'span'>,
  'role' | 'aria-label' | 'aria-hidden'
>

interface EmojiProps extends StrictEmojiTypes {
  label: string
  symbol: string
}

export const Emoji: Component<EmojiProps> = ({ label, symbol, ...rest }) => (
  <span
    role='img'
    aria-label={label != null ? label : ''}
    aria-hidden={label == null}
    {...rest}>
    {symbol}
  </span>
)
