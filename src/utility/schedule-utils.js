

const sort = (array) => {
  return array.sort((a, b) => {
    if (parseInt(a.hour) === parseInt(b.hour)) {
      if (parseInt(a.minute) > parseInt(b.minute)) return 1;
      else if (parseInt(a.minute) < parseInt(b.minute)) return -1;
      else return 0;
    }
    else {
      if (parseInt(a.hour) > parseInt(b.hour)) return 1;
      else if (parseInt(a.hour) < parseInt(b.hour)) return -1;
      else return 0;
    }
  });
};

module.exports = {
  sort
}
