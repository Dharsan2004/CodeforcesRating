
let n;
let rate;
function fuck() {
    console.clear();
    fetch('https://codeforces.com/api/user.status?handle=' + n + '&from=1&count=100000000')
        .then(response => response.json())
        .then(data => {

            let cnt = 0;

            for (let i = 0; i < data.result.length; i++) {
                if (data.result[i].problem.rating === rate && data.result[i].verdict === "OK") {
                    console.log(data.result[i].problem.index + " " + data.result[i].problem.name);
                    cnt++;
                }
            }
            console.log(cnt);

        }
        );

}




function ok() {
    n = document.getElementById("handle").value;
    rate = document.getElementById("rating").value;

    rate = parseInt(rate);
    fuck();

}

