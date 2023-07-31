declare module "react-date-object" {
  export type DateType = Date | number | string | DateObject;

  export type Calendar = {
    name: string;
    /**
     * specifies what number the calendar year begins with.
     * some calendars start with year 0
     */
    startYear: number;
    yearLength: number;
    epoch: number;
    century: number;
    weekStartDayIndex: number;
    /**
     *
     * @param isLeap
     *
     * return an array containing the number of days in each month.
     */
    getMonthLengths(isLeap: boolean): number[];
    isLeap(year: number): boolean;
    /**
     *
     * @param currentYear
     *
     * returns all leap years including the current year
     * (if the current year is a leap year).
     */
    getLeaps(currentYear: number): number[] | [];
    getDayOfYear(date: DateObject): number;
    getAllDays(date: DateObject): number;
    /**
     *
     * @param year
     *
     * Returns the number of leap years before the specified year.
     */
    leapsLength?(year: number): number;
    guessYear(days: number, currentYear: number): number;
  };

  export type Locale = {
    name: string;
    months: Array<string[]>;
    weekDays: Array<string[]>;
    digits: string[];
    meridiems: Array<string[]>;
  };

  export type Month = {
    name: string;
    shortName: string;
    number: number;
    index: number;
    /**
     * specifies the number of days in this month.
     */
    length: number;
    valueOf(): number;
    toString(): string;
  };

  export type WeekDay = Omit<Month, "length">;

  export type Meridiem = {
    name: string;
    shortName: string;
  };

  export type ObjectType = {
    year: number | undefined;
    month: Month | undefined;
    day: number | undefined;
    weekDay: WeekDay | undefined;
    hour: number | undefined;
    minute: number | undefined;
    second: number | undefined;
    millisecond: number | undefined;
    weekOfYear: number | undefined;
    dayOfYear: number | undefined;
    daysLeft: number | undefined;
    calendar: Calendar;
    locale: Locale;
    format: string | undefined;
    ignoreList: string[];
  };

  class DateObject {
    constructor();
    constructor(object: {
      year: number;
      month: number;
      day: number;
      hour?: number;
      minute?: number;
      second?: number;
      millisecond?: number;
      calendar?: Calendar;
      locale?: Locale;
      format?: string;
      ignoreList?: string[];
    });
    constructor(object: {
      date?: DateType;
      calendar?: Calendar;
      locale?: Locale;
      format?: string;
      ignoreList?: string[];
    });
    constructor(date: DateType);

    /**
     * Parse string from the given formatting token.
     * Default formatting token: "YYYY MM DD hh mm ss SSS a".
     *
     * If you do not specify a formatting token, The default token is considered.
     * @param date
     * @example
     * var date = new DateObject();
     *
     * date.setFormat("dddd DD MMMM YYYY");
     * date.parse("Monday 24 August 2020");
     */
    parse(date: string): this;

    convert(calendar: Calendar | undefined, locale?: Locale): this;
    /**
     * Formatting current time from given token.
     * Default token is "YYYY/MM/DD".
     *
     * If you do not specify a formatting token, The default token is considered.
     * @param format
     * @param ignoreList
     * @example
     * var date = new DateObject();
     *
     * date.format(); //2020/12/02
     * date.format("MM/DD/YYYY"); //12/02/2020
     *
     * @example
     * Ignoring `Date` & `Time`
     *
     * var date = new DateObject();
     *
     * date.format("Date:MM/DD/YYYY Time:HH:mm:ss", ["Date", "Time"]); //Date:12/02/2020 Time:11:03:12
     */
    format(format?: string, ignoreList?: string[]): string;
    getValue(key: string): number | string;

    setYear(year: number): this;
    /**
     * Use this method if you want to specify the names of the months manually.
     *
     * @param months
     * @example
     *
     * var Date = new DateObject()
     *
     * date.setMonths([
     *  ["jan", "j"],
     *  ["feb", "f"],
     *  ["mar", "m"],
     *  ["apr", "a"],
     *  ["may", "m"],
     *  ["jun", "j"],
     *  ["jul", "j"],
     *  ["aug", "a"],
     *  ["sep", "s"],
     *  ["oct", "o"],
     *  ["nov", "n"],
     *  ["dec", "d"],
     * ])
     *
     * date.format("MMMM MMM") //dec d
     */
    setMonths(months: Array<string[]>): this;
    setMonth(month: number): this;
    /**
     * Use this method if you want to specify the names of week days manually.
     *
     * @param weekDays
     * @example
     *
     * var Date = new DateObject()
     *
     * date.setWeekDays([
     *  ["su", "s"],
     *  ["mo", "m"],
     *  ["tu", "t"],
     *  ["we", "w"],
     *  ["th", "t"],
     *  ["fr", "f"],
     *  ["sa", "s"],
     * ])
     *
     * date.format("dddd ddd") //su s
     */
    setWeekDays(weekDays: Array<string[]>): this;
    setDigits(digits: string[]): this;
    /**
     * @param dayOfMonth
     */
    setDay(day: number): this;
    setHour(hour: number): this;
    setMinute(minute: number): this;
    setSecond(second: number): this;
    setMillisecond(millisecond: number): this;
    /**
     *
     * @param formattingToken
     * @example
     * var date = new DateObject()
     *
     * date.setFormat("dddd MMMM YYYY")
     *
     * date.format() //Sunday December 2020
     */
    setFormat(format?: string): this;
    setLocale(locale: Locale): this;
    setCalendar(calendar: Calendar | undefined): this;
    setDate(date: DateType): this;
    set(key: string, value: any): this;

    set(obj: {
      date?: DateType;
      year?: number;
      month?: number;
      months?: Array<string[]>;
      weekDays?: Array<string[]>;
      day?: number;
      hour?: number;
      minute?: number;
      second?: number;
      millisecond?: number;
      calendar?: Calendar;
      locale?: Locale;
      format?: string;
      ignoreList?: string[];
      digits?: string[];
    }): this;
    /**
     * Availbe Types:
     *  - `years` `year` `y`
     *  - `months` `month` `M`
     *  - `days` `day` `d`
     *  - `hours` `hour` `h`
     *  - `minutes` `minute` `m`
     *  - `seconds` `second` `s`
     *  - `milliseconds` `millisecond` `ms`
     *
     * @param duration
     * @param type
     * @example
     *
     * var tomorrow = new DateObject().add(1, "day")
     */
    add(duration: number | string, type: string): this;
    /**
     * Availbe Types:
     *  - `years` `year` `y`
     *  - `months` `month` `M`
     *  - `days` `day` `d`
     *  - `hours` `hour` `h`
     *  - `minutes` `minute` `m`
     *  - `seconds` `second` `s`
     *  - `milliseconds` `millisecond` `ms`
     *
     * @param duration
     * @param type
     * @example
     *
     * var yesterday = new DateObject().subtract(1, "day")
     */
    subtract(duration: number | string, type: string): this;

    toFirstOfYear(): this;
    toLastOfYear(): this;
    toFirstOfMonth(): this;
    toLastOfMonth(): this;
    toFirstOfWeek(): this;
    toLastOfWeek(): this;
    toFirstWeekOfYear(): this;
    toLastWeekOfYear(): this;

    toString(): string;
    /**
     * convert current calendar to JavaScript Date
     */
    toDate(): Date;
    /**
     * convert current calendar to UTC
     */
    toUTC(): this;
    /**
     * Unix time in seconds
     */
    toUnix(): number;
    toJulianDay(): number;
    toObject(): ObjectType;
    toJSON(): number;
    /**
     * Unix time in milliseconds
     */
    valueOf(): number;

    /**
     * Count number of days passed from 1/1/1 (0/1/1 in indian calendar)
     */
    toDays(): number;
    /**
     * Count number of days passed from current year
     */
    dayOfYear: number;
    /**
     * Count number of weeks passed from current year
     */
    weekOfYear: number;
    /**
     * Number of days remaining from current year
     */
    daysLeft: number;
    /**
     * @get current year
     * @set year
     */
    year: number;
    /**
     * @get object (Month of year in current locale)
     * @example { name: "January", shortName: "Jan", index: 0, number: 1 }
     * @set number 1-12
     */
    get month(): Month;
    // set month(month: number);
    get monthIndex(): number;
    /**
     * Day of month
     * @get number
     * @set number
     */
    day: number;
    /**
     * Day of week in current locale
     * @get object
     * @example { name: "Sunday", shortName: "Sun", index: 0, number: 1  }
     */
    get weekDay(): WeekDay;
    /**
     * @get current hour
     * @set hour
     */
    hour: number;
    /**
     * @get current minute
     * @set minute
     */
    minute: number;
    /**
     * @get current second
     * @set second
     */
    second: number;
    /**
     * @get current millisecond
     * @set millisecond
     */
    millisecond: number;
    /**
     * @get Array of months in current locale
     * @example [{ name: "January", shortName: "Jan", index: 0, number: 1 }, ...]
     * @set custom months
     * @example [["name1" , "shortName1"], ["name2" , "shortName2"] ...]
     * @example
     *
     * var Date = new DateObject()
     *
     * date.months = [
     *  ["jan", "j"],
     *  ["feb", "f"],
     *  ["mar", "m"],
     *  ["apr", "a"],
     *  ["may", "m"],
     *  ["jun", "j"],
     *  ["jul", "j"],
     *  ["aug", "a"],
     *  ["sep", "s"],
     *  ["oct", "o"],
     *  ["nov", "n"],
     *  ["dec", "d"],
     * ]
     *
     * date.format("MMMM MMM") //dec d
     */
    get months(): Month[];
    // set months(months: string[]);
    /**
     * @get Array of week days in current locale
     * @example [{ name: "Sunday", shortName: "Sun", index: 0, number: 1 }, ...]
     * @set custom week days
     * @example [["name1" , "shortName1"], ["name2" , "shortName2"] ...]
     * @example
     *
     * var Date = new DateObject()
     *
     * date.setWeekDays([
     *  ["su", "s"],
     *  ["mo", "m"],
     *  ["tu", "t"],
     *  ["we", "w"],
     *  ["th", "t"],
     *  ["fr", "f"],
     *  ["sa", "s"],
     * ])
     *
     * date.format("dddd ddd") //su s
     */
    get weekDays(): WeekDay[];
    // set weekDays(weekDays: string[]);
    /**
     * Array of leap years until now
     *
     * @example
     *
     * var date = new DateObject()
     *
     * date.leaps //[4, 8, 12, 16, 20, ...]
     */
    leaps: number[];

    get calendar(): Calendar;
    set calendar(calendar: Calendar);

    get locale(): Locale;
    set locale(locale: Locale);
    /**
     * @get meridiems in current locale
     * @example
     *
     * var date = new DateObject()
     *
     * date.meridiems //[{ name: "AM", shortName: "am" }, { name: "PM", shortName: "pm" }]
     */
    get meridiems(): Meridiem[];
    /**
     * Array of locale numbers from 0 to 9
     */
    digits: string[];
    /**
     * @get current formatting token
     * @set formatting token
     * @default "YYYY/MM/DD"
     *
     * var date = new DateObject()
     *
     * date._format = "dddd MMMM YYYY"
     *
     * date.format() //Sunday December 2020
     */
    _format: string;
    /**
     * @get true if current year is leap
     */
    isLeap: boolean;
    /**
     * @get true if the year, month and day are correct
     */
    isValid: boolean;
    isUTC: boolean;
    /**
     * @get Unix time in seconds
     */
    unix: number;
    /**
     * formatting ignore list
     *
     * @example
     * var date = new DateObject()
     *
     * date._format = "Date:MM/DD/YYYY"
     * date.ignoreList = ["Date"]
     *
     * date.format() //Date:12/04/2020
     *
     * @example
     * var date = new DateObject({
     *   format: "Date:MM/DD/YYYY",
     *   ignoreList: ["Date"]
     * })
     *
     * date.format() //Date:12/04/2020
     * date.format("time:hh:mm a", ["time"]) //time:06:50 pm
     */
    ignoreList: string[];
    custom: {
      digits: string[] | undefined;
      months: string[] | undefined;
      weekDays: string[] | undefined;
    };
    set date(date: DateType);
    weekStartDayIndex: number;
  }

  export default DateObject;
}

declare module "react-date-object/calendars/gregorian" {
  import type { Calendar } from "react-date-object";

  const gregorian: Calendar;

  export default gregorian;
}

declare module "react-date-object/calendars/persian" {
  import type { Calendar } from "react-date-object";

  const persian: Omit<Calendar, "leapsLength">;

  export default persian;
}

declare module "react-date-object/calendars/jalali" {
  import type { Calendar } from "react-date-object";

  const jalali: Calendar;

  export default jalali;
}

declare module "react-date-object/calendars/arabic" {
  import type { Calendar } from "react-date-object";

  const arabic: Calendar;

  export default arabic;
}

declare module "react-date-object/calendars/indian" {
  import type { Calendar } from "react-date-object";

  const indian: Calendar;

  export default indian;
}

declare module "react-date-object/locales/gregorian_en" {
  import type { Locale } from "react-date-object";

  const gregorian_en: Locale;

  export default gregorian_en;
}

declare module "react-date-object/locales/gregorian_fa" {
  import type { Locale } from "react-date-object";

  const gregorian_fa: Locale;

  export default gregorian_fa;
}

declare module "react-date-object/locales/gregorian_ar" {
  import type { Locale } from "react-date-object";

  const gregorian_ar: Locale;

  export default gregorian_ar;
}

declare module "react-date-object/locales/gregorian_hi" {
  import type { Locale } from "react-date-object";

  const gregorian_hi: Locale;

  export default gregorian_hi;
}

declare module "react-date-object/locales/persian_en" {
  import type { Locale } from "react-date-object";

  const persian_en: Locale;

  export default persian_en;
}

declare module "react-date-object/locales/persian_fa" {
  import type { Locale } from "react-date-object";

  const persian_fa: Locale;

  export default persian_fa;
}

declare module "react-date-object/locales/persian_ar" {
  import type { Locale } from "react-date-object";

  const persian_ar: Locale;

  export default persian_ar;
}

declare module "react-date-object/locales/persian_hi" {
  import type { Locale } from "react-date-object";

  const persian_hi: Locale;

  export default persian_hi;
}

declare module "react-date-object/locales/arabic_en" {
  import type { Locale } from "react-date-object";

  const arabic_en: Locale;

  export default arabic_en;
}

declare module "react-date-object/locales/arabic_fa" {
  import type { Locale } from "react-date-object";

  const arabic_fa: Locale;

  export default arabic_fa;
}

declare module "react-date-object/locales/arabic_ar" {
  import type { Locale } from "react-date-object";

  const arabic_ar: Locale;

  export default arabic_ar;
}

declare module "react-date-object/locales/arabic_hi" {
  import type { Locale } from "react-date-object";

  const arabic_hi: Locale;

  export default arabic_hi;
}

declare module "react-date-object/locales/indian_en" {
  import type { Locale } from "react-date-object";

  const indian_en: Locale;

  export default indian_en;
}

declare module "react-date-object/locales/indian_fa" {
  import type { Locale } from "react-date-object";

  const indian_fa: Locale;

  export default indian_fa;
}

declare module "react-date-object/locales/indian_ar" {
  import type { Locale } from "react-date-object";

  const indian_ar: Locale;

  export default indian_ar;
}

declare module "react-date-object/locales/indian_hi" {
  import type { Locale } from "react-date-object";

  const indian_hi: Locale;

  export default indian_hi;
}
