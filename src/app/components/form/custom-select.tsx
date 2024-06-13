import { FormField, MultiSelectOption } from '@/app/lib/contants';

interface SelectProps extends FormField {
  items: MultiSelectOption[];
}

export default function CustomSelect({
  name,
  label,
  placeholder,
  disabled = false,
  initialValue,
  items,
  ...props
}: SelectProps) {
  const id = `${name}-select`;

  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={initialValue}
        {...props}
      >
        {items.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
