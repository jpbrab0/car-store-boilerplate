import * as React from "react"

export function ContactInfo({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center border">
        {React.isValidElement<{ className?: string }>(icon)
          ? React.cloneElement(icon, { className: "size-4" })
          : icon}
      </div>
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
      </div>
    </div>
  )
}
