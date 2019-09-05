import axios from "axios";

export default (req, res) => {
  const {
    query: { tag }
  } = req;


  
  res.setHeader("Content-Type", "application/json");
  axios.get(`https://www.reddit.com/r/${tag}.json`).then(({ data }) => {
    res.send(JSON.stringify(data));
  });
};
