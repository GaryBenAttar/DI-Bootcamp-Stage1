const formatDate = function (date) {
  console.log(
    `${date.getFullYear()}${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}${
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    }${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}${
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    }`
  );
};

formatDate(new Date(2020, 6, 4, 8, 0, 0));
formatDate(new Date(2019, 11, 31, 23, 59, 59));
formatDate(new Date(2020, 6, 4));
