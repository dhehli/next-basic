export interface NavItem {
  name: string;
  href: string;
}

export interface FormField {
  name: string;
  label?: string;
  value?: string | number;
  initialValue?: string | number | readonly string[] | undefined;
  placeholder?: string;
  toggle?: boolean;
  disabled?: boolean;
}

export enum InputType {
  Text = 'text',
  TextArea = 'textarea',
  Email = 'email',
  Password = 'password',
  Number = 'number',
}

export enum ChoiceType {
  Radio = 'radio',
  Checkbox = 'checkbox',
}

export type MultiSelectOption = {
  value: number;
  label: string;
};
