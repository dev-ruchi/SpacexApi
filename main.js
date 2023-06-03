function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}



function getData() {
  fetch("https://api.spacexdata.com/v3/missions")
    .then(function (response) {
      return response.json();
    })
    .then((missions) => {
      document.querySelector('#loader').style.display = 'none';
      let output = '';
      missions.forEach(function (mission) {
        output += `
                <div class="card shadow-lg rounded mx-auto">
                    <div class="card-body">
                        <h3 class="card-title mb-3">${mission.mission_name}</h3>
                        <p class="card-text mt-3">${truncateString(mission.description, 150)}</p>
                        <p class="fw-bold mb-2">Manufacturers: ${mission.manufacturers}</p>
                        <div>
                            <a target="_blank" href="${mission.wikipedia}" class="btn btn-link"><i data-feather="globe"></i> Wikipedia</a>
                            <a target="_blank" href="${mission.website}" class="btn btn-link"><i data-feather="link"></i> Website</a>
                            <a target="_blank" href="${mission.twitter || 'N/A'}" class="btn btn-link"><i data-feather="twitter"></i> Twitter</a>
                        </div>
                    </div>
                </div>
           `;
      });

      document.getElementById('output').innerHTML = output;
      feather.replace()
    })
}
getData();