import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import CustomInput from './custom-input';
import { ChoiceType, InputType, MultiSelectOption } from '@/app/lib/contants';
import { useTranslations } from 'next-intl';
import CustomSelect from './custom-select';
import CustomChoice from './custom-choice';
import CustomButton from './custom-button';

const selectItems: MultiSelectOption[] = [
  {
    value: 1,
    label: 'United States',
  },
  {
    value: 2,
    label: 'Canada',
  },
  {
    value: 3,
    label: 'Mexico',
  },
];

export default function FormWrapper() {
  const t = useTranslations('Form');

  return (
    <form>
      <CustomInput
        name="firstname"
        label={t('firstname')}
        placeholder={t('firstnamePlaceholder')}
        initialValue={'dominic'}
        type={InputType.Text}
      />
      <CustomInput
        name="number"
        label={t('number')}
        placeholder={t('numberPlaceholder')}
        initialValue={1}
        type={InputType.Number}
      />
      <CustomInput
        name="text"
        label={t('text')}
        placeholder={t('textPlaceholder')}
        initialValue={'asdf'}
        type={InputType.TextArea}
      />
      <CustomInput
        name="email"
        label={t('email')}
        placeholder={t('emailPlaceholder')}
        initialValue={'dh@netlive.ch'}
        type={InputType.Email}
      />
      <CustomInput
        name="password"
        label={t('password')}
        placeholder={t('passwordPlaceholder')}
        initialValue={'123'}
        type={InputType.Password}
      />
      <CustomSelect
        items={selectItems}
        name="select"
        label={t('select')}
        initialValue={3}
      />
      <CustomChoice
        items={selectItems}
        name="radio"
        label={t('radio')}
        initialValue={3}
        type={ChoiceType.Radio}
      />
      <CustomChoice
        items={selectItems}
        name="checkbox"
        label={t('checkbox')}
        initialValue={2}
        type={ChoiceType.Checkbox}
      />
      <CustomButton buttonText={t('submit')} />
    </form>
  );
}
