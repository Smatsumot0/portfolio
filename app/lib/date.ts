export function formatYM(date: string) {
  const [year, month] = date.split("-")
  return `${year}/${Number(month)}`
}
