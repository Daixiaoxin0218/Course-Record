// 转换当地时间
export function unixTimestampToLocalTime(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000); // 将秒转换为毫秒
  return date.toLocaleString(); // 使用toLocaleString方法转换为当地时间的字符串
}

// 时间转换时间戳
export function convertDateToTimestamp(dateStr: string): number {
  const date = new Date(dateStr);
  return date.getTime();
}
