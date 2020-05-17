let first = document.querySelector("#first");
let second = document.querySelector("#second");
let divResult = document.querySelector("#result");

function getGit() {
  axios({
    method: "GET",
    url: "https://love-calculator.p.rapidapi.com/getPercentage",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      "x-rapidapi-key": "222839ddf8mshd148d9fa7aba062p16c798jsndc21a6cc765b",
      useQueryString: true,
    },
    params: {
      fname: `${first.value}`,
      sname: `${second.value}`,
    },
  })
    .then((response) => {
      divResult.innerHTML = "";
      console.log(response.data);
      let percent = response.data.percentage;
      let message = response.data.result;

      let span = document.createElement("span");

      let spanContent = document.createTextNode(`${percent}% of compatibility`);
      span.appendChild(spanContent);

      let result = document.createElement("p");
      let resultContent = document.createTextNode(`${message}`);
      result.appendChild(resultContent);

      if (percent < 50) {
        span.setAttribute("class", "badge badge-danger");
      } else {
        span.setAttribute("class", "badge badge-success");
      }

      divResult.appendChild(span);
      divResult.appendChild(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
