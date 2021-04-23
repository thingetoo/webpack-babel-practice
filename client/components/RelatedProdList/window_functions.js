const $ = require('jquery');
var noScroll = () => {
  var y_axis = window.scrollY;
  var component = document.getElementById('lists');
  var documentY = document.getBoundingClientRect();
  var componentY = component.getBoundingClientRect();
  console.log(componentY.top);
  // if (y_axis > y_axis - 200 && y_axis < y_axis + 200) {
  //   y_axis
  // }
  return () => {
    window.scrollTo(0, componentY.top);
  }
}

exports.module = noScroll;