/* 
 * Accept string containing a date in YYYY-MM-DD format
 * Return date as MM/DD/YYYY string 
 * Assumes UTC (Z) for all dates
 */

export function formatDate(date) {
  const dateFormat = new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"UTC"});
  if (typeof date === "object")
  {
    date = [String(date?.month ?? ''), String(date?.day ?? ''), String(date?.year ?? '')].join('/');
  }
  return date ? dateFormat.format(new Date(date)) : null;
}

