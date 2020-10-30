// ISO8601 string -> Hh:MM AM/PM 12hr format
// "2020-01-01T13:00:00-00:00" -> "1:00 PM"
export const dateConversionISOtoTime = (isoStr: string): string =>
    new Date(isoStr).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });

// ISO8601 string -> Hh:MM 12hr format without AM/PM text
// "2020-01-01T13:00:00-00:00" -> "1:00"
export const dateConversionISOtoShortTime = (isoStr: string): string =>
  dateConversionISOtoTime(isoStr).slice(0,-3);

// check if given date string is current date
// ISO8601 string -> boolean
export const dateISOisToday = (isoStr: string): boolean => {
  return (isoStr.slice(0,10) === (new Date()).toISOString().slice(0,10)); // slice hours, minutes, seconds out of time string
};

// check if given date is one day before current date
// ISO8601 string -> boolean
export const dateISOwasYesterday = (isoStr: string): boolean => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate()-1);
  return (yesterday.toISOString().slice(0,10) === isoStr.slice(0,10)); // slice hours, minutes, seconds out of time string
};

// check if two dates are the same. ignore time
// ISO8601 strings -> boolean
export const isSameDate = (isoStr1: string, isoStr2: string): boolean => {
  
  return true;
}