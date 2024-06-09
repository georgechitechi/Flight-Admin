export const getFlightData = (count = 10) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    const id = `id${i}`;
    const title = `QR00${i}`;
    const date = new Date().toDateString();
    const content = `DOH-DEST${i}`;
    data.push({ id, title, date, content });
  }
  return data;
};
