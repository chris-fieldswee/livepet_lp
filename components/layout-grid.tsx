"use client"

const GAP_CLASSES: Record<"keyline-1" | "keyline-2" | "keyline-3" | "keyline-4", string> = {
  "keyline-1": "gap-keyline-1",
  "keyline-2": "gap-keyline-2",
  "keyline-3": "gap-keyline-3",
  "keyline-4": "gap-keyline-4",
}

/**
 * M3-style 12-column layout grid for future complex layouts.
 * Use for multi-column sections, dashboards, or content that should align to a 12-col grid.
 *
 * Spacing uses keyline tokens (8dp baseline): gap-keyline-2 (16px) default, override with gapKeyline.
 * Children can span columns with col-span-1 through col-span-12.
 *
 * @example
 * <LayoutGrid gapKeyline="keyline-3">
 *   <div className="col-span-12 md:col-span-8">Main</div>
 *   <div className="col-span-12 md:col-span-4">Sidebar</div>
 * </LayoutGrid>
 */
export default function LayoutGrid({
  children,
  className = "",
  gapKeyline = "keyline-2",
  as: Component = "div",
}: {
  children: React.ReactNode
  className?: string
  /** Keyline token for gap (keyline-1 | keyline-2 | keyline-3 | keyline-4) */
  gapKeyline?: "keyline-1" | "keyline-2" | "keyline-3" | "keyline-4"
  as?: "div" | "section" | "main"
}) {
  return (
    <Component className={`grid grid-cols-12 ${GAP_CLASSES[gapKeyline]} ${className}`.trim()}>
      {children}
    </Component>
  )
}
