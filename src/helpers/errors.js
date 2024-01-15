class WrongParamError extends Error {
   constructor(message) {
      super(message)
      this.status = 400;
   }
}

class WrongFavoriteParamError extends Error {
   constructor(message) {
      super(message)
      this.status = 404;
   }
}


module.exports = {
   WrongParamError,
   WrongFavoriteParamError
}