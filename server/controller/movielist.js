const { movieListModel } = require("../model/movieModel");

const MovieController = async (req, res) => {
  console.log("this is body", req.body);

  const data = await movieListModel.find().exec();
  const currentPage = req.body.currentPage;

  if (currentPage * 10 > data[0][`${req.body.type}`].length) {
    // console.log("Length of the data", data[0][`${req.body.type}`].length);

    const result = data[0][`${req.body.type}`].splice(0, 10);
    res.send({ data: result, success: true, pageEnd: true });
    return;
  }
  const result = data[0][`${req.body.type}`].splice(
    currentPage * 10 - 10,
    currentPage * 10
  );

  res.send({ data: result, success: true, pageEnd: false });
};

module.exports = MovieController;
