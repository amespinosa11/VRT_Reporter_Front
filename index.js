const getData = async() => {
    axios.get('http://localhost:3000')
  .then(function (response) {
    // handle success
    console.log(response);
    paintResults(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

document.querySelector('#createReport').addEventListener('click', async() => {
    console.log('click');
    axios.post('http://localhost:3000')
  .then(function (response) {
    // handle success
    console.log(response);
    getData();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
});

const paintResults = (information) => {
    console.log(information);
    const container = document.querySelector('.row');
    container.innerHTML = '';

    let content = '';
    for(let info of information.data) {
        content = content.concat(`<div class="col-sm-6 col-lg-3">
        <p>Tiempo: ${info[2].analysisTime}</p>
        <p>Procentaje de diferencias: ${info[2].misMatchPercentage} %</p>
        </div>
        <div class="col-sm-6 col-lg-3">
            <img src="http://localhost:4000/${info[0]}" alt='img' class="img-thumbnail">
        </div>
        <div class="col-sm-6 col-lg-3">
            <img src="http://localhost:4000/${info[1]}" alt='img' class="img-thumbnail">
        </div>
        <div class="col-sm-6 col-lg-3">
            <img src="http://localhost:4000/${info[3]}" alt='img' class="img-thumbnail">
        </div>`);
    }
    container.innerHTML = content;
}

getData();