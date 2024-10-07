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
  return result;
}