import { ChoiceType, FormField, MultiSelectOption } from '@/app/lib/contants';

interface ChoiceProps extends FormField {
  type: ChoiceType;
  items: MultiSelectOption[];
}

export default function CustomChoice({
  name,
  label,
  placeholder,
  disabled = false,
  initialValue,
  items,
  type,
  ...props
}: ChoiceProps) {
  const id = `${name}-${type}`;

  return (
    <>
      <fieldset>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>

        <div className="mt-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <input
                id={id}
                name="notification-method"
                type={type}
                defaultChecked={item.value === initialValue}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={id}
                className="ml-3 block text-sm  leading-6 text-gray-900"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </>
  );
}
