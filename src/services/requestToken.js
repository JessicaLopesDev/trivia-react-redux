const requestToken = async () => {
  const response = await (await fetch('https://opentdb.com/api_token.php?command=request')).json();
  return response;
};

export default requestToken;
