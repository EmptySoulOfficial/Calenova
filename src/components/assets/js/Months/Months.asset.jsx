import { getLang } from "../ELanguage/ELanguage";

let eLang = getLang();
export const getMonths = () => [eLang.January, eLang.February, eLang.March, eLang.April, eLang.May, eLang.June,
                       eLang.July, eLang.August, eLang.September, eLang.October, eLang.November, eLang.December];