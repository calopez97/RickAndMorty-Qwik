export const getDataApi = async (id? : String) => {
  const api = 'https://rickandmortyapi.com/api/character';
  const endPoint = id ? `${api}/${id}` : api;

  const data = await fetch(endPoint, {
    method:'GET',
  });

  return data.json()
}