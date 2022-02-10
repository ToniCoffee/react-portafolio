export const getUser = async () => {
  const query = await fetch('https://randomuser.me/api/?results=1&seed=b&gender=male');
  const response = await query.json();
  return response.results[0].picture.large;  
}