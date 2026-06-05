export function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b pb-4">
      <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  )
}
