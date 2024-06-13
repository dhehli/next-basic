export const pathnameRemoveLang = (path: string) => {
  return '/' + path.split('/').slice(2).join('/');
};
