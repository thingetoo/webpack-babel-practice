let sortAnswer = function (result) {
  var seller = [];
  var remainder = [];

  for (var i = 0; i < result.length; i++){
    if (result[i].answerer_name === 'seller'){
      seller.push(result[i])
    } else {
      remainder.push(result[i])
    }
  }

  var data = seller.concat(remainder)
  return data
}

module.exports.sortAnswer = sortAnswer;