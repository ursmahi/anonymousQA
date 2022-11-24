const handleDateAndTimeFormat = (date) => {
    let befoeForamt = new Date(date).toString();
    let afterFormat = befoeForamt.split('GMT')[0];
    let time12 = afterFormat.split(' ')[4];
    let time12Hour = time12.split(':')[0];
    let time12Minute = time12.split(':')[1];
    let time12AMPM = 'AM';
    if (time12Hour > 12) {
      time12Hour = time12Hour - 12;
      time12AMPM = 'PM';
    }
    let finalTime = time12Hour + ':' + time12Minute + ' ' + time12AMPM;
    return finalTime + ' ' + afterFormat.split(' ')[1] + ' ' + afterFormat.split(' ')[2] + ',' + afterFormat.split(' ')[3];
  }
export const handelTime = (TimeUTC) => {
    try {
      let time = (TimeUTC + 'Z').replace(' ', 'T');
      return handleDateAndTimeFormat(time);
    } catch (e) {
      const date = new Date();
      return handleDateAndTimeFormat(date);
    }
  }

  export const handleStringTime = (time) => {
    // time = Thu, 24 Nov 2022 08:31:30 GMT
    return handleDateAndTimeFormat(time);
  }
