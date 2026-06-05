export function SpecGrid({
  className,
  items,
}: {
  className?: string
  items: Array<[string, string]>
}) {
  return (
    <div className={["grid gap-4 sm:grid-cols-2", className].join(" ")}>
      {items.map(([label, value]) => (
        <div key={label} className="border px-4 py-3">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {label}
          </p>
          <p className="mt-2 font-medium">{value}</p>
        </div>
      ))}
    </div>
  )
}
