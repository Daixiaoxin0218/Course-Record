// 转换当地时间
export function unixTimestampToLocalTime(unixTimestamp: number): string {
  const date = new Date(unixTimestamp);
  return date.toLocaleString();
}

/**
 *  判断对象中的每个值是否为日期字符串，并转换为时间戳
 * @param obj 需要处理对象
 * @returns result 返回处理完成对象
 */
export function convertDateStringsToTimestamps(obj: any): any {
  const result = { ...obj };
  const timestampKeys = ['resume_classes', 'deadline_date', 'start_date', 'stop_card'];
  const regex = /(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat) (?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{2} \d{4} \d{2}:\d{2}:\d{2} GMT\+0800 \(中国标准时间\)$/;

  for (const key in result) {
    const value = result[key];
    if (regex.test(value)) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        result[key] = date.getTime().toString();
      }
    }
  }
  for (const key of timestampKeys) {
    if (result.hasOwnProperty(key) && typeof result[key] === 'number' && !isNaN(result[key])) {
      result[key] = result[key].toString();
    }
  }
  return result;
}

/**
 * 时间回显
 * @param obj 处理时间为number类型
 * @returns 处理完成
 */
export function convertPropertiesToNumber(obj: any) {
  const keys = ['resume_classes','deadline_date','start_date','stop_card']
  const newObj = { ...obj };
  keys.forEach((key: string | number) => {
    if (
      typeof newObj[key] === 'string' &&
      newObj[key].trim() !== '' &&
      !isNaN(Number(newObj[key]))
    ) {
      newObj[key] = Number(newObj[key]);
    }
  });
  return newObj;
}