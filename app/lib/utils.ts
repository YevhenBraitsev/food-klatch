// export const converToArray = <T,>(value: T): T[] => {
//   return [value];
// };
// export function converToArray<T>(value: T): T[] {
//   return [value];
// }
export const fetchData = async (path: string) => {
  const localEndpoint = process.env.API_ENDPOINT_LOCAL + path;
  const endpoint = process.env.API_ENDPOINT + path;

  return process.env.IS_LOCAL
    ? await fetch(localEndpoint)
    : await fetch(endpoint);
};
