
const { WrongParamError } = require("./errors")


const asyncWrapper = (controller) => {
   return (req, res, next) => {
      controller(req, res).catch(next)
   }
}

const errorHandler = (error, req, res, next) => {
   if (
      error instanceof WrongParamError ||
      error instanceof WrongFavoriteParamError) {
      return res.status(error.status)
   }
   res.status(500).json({ message: error.message })
}

module.exports = {
   asyncWrapper,
   errorHandler
}