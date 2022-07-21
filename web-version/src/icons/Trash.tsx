import { Component, createSignal } from 'solid-js'

interface TrashIconProps {
  classList?: string
  clickHandler: () => void
}

export const Trash: Component<TrashIconProps> = ({
  clickHandler,
  classList
}) => {
  const [hovered, setHovered] = createSignal(false)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 28 40'
      width='40'
      height='40'
      onclick={clickHandler}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      class={classList}>
      <path
        fill-rule='evenodd'
        fill='currentColor'
        d='M6 15l4 0 0-3 8 0 0 3 4 0 0 2 -16 0zM12 14l4 0 0 1 -4 0z'
        style={{
          transform: hovered() ? 'translateY(-2px) rotate(10deg)' : 'unset',
          'transform-origin': 'right bottom',
          transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
        }}
      />
      <path
        fill='currentColor'
        d='M8 17h2v9h8v-9h2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z'
      />
    </svg>
  )
}
