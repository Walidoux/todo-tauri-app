import type { Variant } from '@motionone/solid'

const fadeInOut = (variant?: Variant): Record<string, Variant> => {
  const getVariantAtPosition = (pos: 0 | 1 | 2): Record<string, number | undefined> | null => {
    if (variant == null) return null

    const variantAtPos: Record<string, number | undefined> = {}

    for (const [key, value] of Object.entries(variant)) {
      variantAtPos[key] = value?.[pos as keyof typeof value]
    }

    return variantAtPos
  }

  return {
    initial: { opacity: 0, ...getVariantAtPosition(0) },
    animate: { opacity: 1, ...getVariantAtPosition(1) },
    exit: { opacity: 0, ...getVariantAtPosition(2) }
  }
}

export const Animations = { fadeInOut }
