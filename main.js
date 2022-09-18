fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  .then(function (result) {
    return result.json();
  })
  .then(function (data) {
    console.log(data);
  });
