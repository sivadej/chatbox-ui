// date conversion: ISO8601 string -> Hh:MM 12hr format
// "2020-01-01T13:00:00-00:00" -> "1:00 PM"
export const dateConversionISOtoShortTime = (isoStr: string): string =>
    new Date(isoStr).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });