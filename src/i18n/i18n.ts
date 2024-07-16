import {I18n} from 'i18n-js';
import ru, {Translations} from './ru';
import uz from './uz';
import {useStorage} from '@/utils';
import {StorageKeys} from '@/constants';

export const i18n = new I18n({
  ru,
  uz,
});

// to use regional locales use { "en-US": enUS } etc
i18n.translations = {
  ru,
  uz,
};

const savedLocale = useStorage.getItem(StorageKeys.LANGUAGE) as string;
i18n.locale = savedLocale || 'uz'; // set your default locale here

/**
 * Builds up valid keypaths for translations.
 */
export type TxKeyPath = RecursiveKeyOf<Translations>;

export type TextType = TxKeyPath | undefined;
// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string,
> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text;
