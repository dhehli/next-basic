export const pathnameRemoveLang = (path: string) => {
  return '/' + path.split('/').slice(2).join('/');
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'de-CH',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};
