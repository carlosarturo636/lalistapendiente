import { cn } from "@/lib/utils";

interface FieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea" | "select";
  placeholder?: string;
  options?: readonly string[];
  rows?: number;
  className?: string;
  /** Los formularios del sitio aún no están habilitados. */
  disabled?: boolean;
}

const controlClasses =
  "w-full rounded-xl border border-forest-700/18 bg-ivory-50 px-4 py-3 text-[0.9375rem] text-ink-800 placeholder:text-ink-400 disabled:cursor-not-allowed disabled:bg-ivory-200/60 disabled:text-ink-400";

export function Field({
  id,
  label,
  type = "text",
  placeholder,
  options,
  rows = 4,
  className,
  disabled = true,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium text-forest-700">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(controlClasses, "resize-y")}
        />
      ) : type === "select" ? (
        <select id={id} name={id} disabled={disabled} defaultValue="" className={controlClasses}>
          <option value="" disabled>
            {placeholder ?? "Selecciona una opción"}
          </option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={controlClasses}
        />
      )}
    </div>
  );
}
