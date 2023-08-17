import classNames from 'clsx'
import { FiCheck } from 'solid-icons/fi'
import type { Component } from 'solid-js'

import { AnimatedWrapper } from '../system'
import type { ITodo } from '../../tools'
import { Animations } from '../../tools'

interface CheckboxProps {
  completed: ITodo['completed']
  initialHandler: () => void
}

export const Checkbox: Component<CheckboxProps> = (props) => (
  <div
    onClick={props.initialHandler}
    class={classNames(
      { 'border-none !bg-left': props.completed },
      'mr-5 grid h-[30px] min-w-[30px] cursor-pointer place-items-center rounded-full border bg-right',
      'border-dark-hard-grayish-dark-blue bg-checkbox-gradient bg-[length:400%]',
      'transition-all duration-300 hover:opacity-80 active:scale-95'
    )}>
    <AnimatedWrapper when={props.completed} {...Animations.fadeInOut()}>
      <FiCheck class='pointer-events-none stroke-2 text-light-default' />
    </AnimatedWrapper>
  </div>
)
