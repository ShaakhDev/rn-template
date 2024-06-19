import {TranslateOptions} from 'i18n-js';
import {TxKeyPath, i18n} from './i18n';

export function translate(key: TxKeyPath, options?: TranslateOptions): string {
  return i18n.t(key, options);
}
