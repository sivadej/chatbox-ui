import React from 'react';
import { dateISOisToday, dateISOwasYesterday } from './dateConversionHelpers';
import styles from './LineBreakWithDate.module.css';

// LineBreakWithDate component
// renders line break with formatted date string overlayed.
// date string should display as 'Today' or 'Yesterday',
// otherwise should be in this format: 'Monday, January 1st'

function LineBreakWithDate({ timestamp }: any): JSX.Element {
  const formattedDate = (isoStr: string) => {
    if (dateISOisToday(isoStr)) return 'Today';
    else if (dateISOwasYesterday(isoStr)) return 'Yesterday';
    else return `format me pls ${isoStr}`;
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

export default LineBreakWithDate;
