export default class OpenService {

  getAllData = async () => {
      const res = await fetch('https://opentdb.com/api.php?amount=10');
      const data = await res.json();
      return data;
  };
  
};
