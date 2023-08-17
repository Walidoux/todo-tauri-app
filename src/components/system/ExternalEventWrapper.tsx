import type { Component, ComponentProps } from 'solid-js'
import { useEventListener } from 'solidjs-use'

interface ExternalEventWrapperProps extends ComponentProps<'div'> {
  onOutsideClick: () => void
}

export const ExternalEventWrapper: Component<ExternalEventWrapperProps> = (props) => {
  let ref: HTMLDivElement | undefined

  const handleClickOutside = (event: MouseEvent | KeyboardEvent): void => {
    if (ref == null) return
    if (event instanceof KeyboardEvent && event.key !== 'Escape') return
    if (event instanceof MouseEvent && ref.contains(event.target as Node)) return

    return props.onOutsideClick()
  }

  useEventListener(window, ['keydown', 'click'], handleClickOutside, { capture: true })

  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  )
}
