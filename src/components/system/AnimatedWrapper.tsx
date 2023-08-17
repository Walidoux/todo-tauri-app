import { Show } from 'solid-js'
import type { Component } from 'solid-js'
import type { MotionComponentProps } from '@motionone/solid'
import { Motion, Presence } from '@motionone/solid'

export interface AnimatedWrapperProps extends MotionComponentProps {
  when: boolean
  class?: string
}

export const AnimatedWrapper: Component<AnimatedWrapperProps> = (props) => (
  <Presence exitBeforeEnter>
    <Show when={props.when}>
      <Motion.div {...props} class={props.class}>
        {props.children}
      </Motion.div>
    </Show>
  </Presence>
)
