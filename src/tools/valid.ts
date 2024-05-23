import type { FormItemRule } from 'naive-ui';

const validatorNotEmpty = (rule: FormItemRule, value: string) => {
  return !value ? new Error('Can not be empty') : true;
};
const validatorPortNumber = (rule: FormItemRule, value: string) => {
  // match 0 ~ 65535
  const portRegex = /^(6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|[1-5]\d{4}|[1-9]\d{0,3}|0)$/;
  return !portRegex.test(value) ? new Error('Not a valid port number') : true;
};
const validatorNotEmptyForArray = (rule: FormItemRule, value: any[]) => {
  return !value.length ? new Error('Can not be empty') : true;
};

const validatorStrLength =
  (min: number = 0, max: number = 200) =>
  (rule: FormItemRule, value: string) => {
    if (value.length < min) {
      return new Error('Minimum exceeded');
    }
    if (value.length > max) {
      return new Error('Maximum exceeded');
    }
    return true;
  };

export { validatorNotEmpty, validatorPortNumber, validatorNotEmptyForArray, validatorStrLength };
