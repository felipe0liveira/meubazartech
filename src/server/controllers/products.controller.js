const retriveAllProducts = (req, res, next) => {
  res.json({ message: 'retrieving all products' })
}

module.exports = {
  retriveAllProducts,
}
