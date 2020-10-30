import React from 'react';
import { dateISOisToday, dateISOwasYesterday } from './dateConversionHelpers';

// LineBreakWithDate component
// renders line break with formatted date string overlayed.
// date string should display as 'Today' or 'Yesterday',
// otherwise should be in this format: 'Monday, January 1st'

function LineBreakWithDate({ timestamp }: any): JSX.Element {
  const formattedDate = `format ${timestamp} plz`;

  return <div>------{formattedDate}-------</div>;
}

export default LineBreakWithDate;
