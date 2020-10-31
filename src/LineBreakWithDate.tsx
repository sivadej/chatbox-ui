import React from 'react';
import {
  dateISOisToday,
  dateISOwasYesterday,
  dateISOtoFormattedStr,
} from './dateConversionHelpers';
import styles from './LineBreakWithDate.module.css';

// LineBreakWithDate component
// renders line break with formatted date string overlayed.
// date string should display as 'Today' or 'Yesterday',
// otherwise should be in this format: 'Monday, January 1st'

function LineBreakWithDate({ timestamp }: LineBreakWithDateProps): JSX.Element {
  const formattedDate = (isoStr: string) => {
    if (dateISOisToday(isoStr)) return 'Today';
    else if (dateISOwasYesterday(isoStr)) return 'Yesterday';
    else return dateISOtoFormattedStr(isoStr);
  };

  return (
    <div className={styles.lineBreakSection}>
      <div className={styles.wrap}>
        <div className={styles.links}>
          <div className={styles.dot}>
            <div className={styles.pill}>{formattedDate(timestamp)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LineBreakWithDateProps {
  timestamp: string;
}

export default LineBreakWithDate;
