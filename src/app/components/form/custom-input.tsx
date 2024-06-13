import { FormField, InputType } from '@/app/lib/contants';
export interface InputProp extends FormField {
  type: InputType;
}

export default function CustomInput({
  name,
  label,
  placeholder,
  disabled = false,
  initialValue,
  type,
  ...props
}: InputProp) {
  const id = `${name}-${type}`;

  const getInput = () => {
    switch (type) {
      case InputType.TextArea:
        return (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={initialValue}
            className="block h-40 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...props}
          />
        );
      default:
        return (
          <input
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={initialValue}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...props}
          />
        );
    }
  };

  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">{getInput()}</div>
    </>
  );
}
