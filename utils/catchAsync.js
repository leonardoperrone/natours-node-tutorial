module.exports = fn => {
  // NOTE: Important
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
