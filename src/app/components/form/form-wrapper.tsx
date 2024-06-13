import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import CustomInput from './custom-input';
import { InputType } from '@/app/lib/contants';
import { useTranslations } from 'next-intl';

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
    </form>
  );
}
