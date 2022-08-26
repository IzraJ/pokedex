document.getElementById('poki').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.getElementById('pokiname').innerText = data.name
        document.getElementById('pokisprite').src = data.sprites.front_default
        document.getElementById('img1').src = data.sprites.front_default
        document.getElementById('img2').src = data.sprites.back_default
        document.getElementById('img3').src = data.sprites.front_shiny
        document.getElementById('img4').src = data.sprites.back_shiny
        document.getElementById('hp').innerText = data.stats[0].base_stat
        document.getElementById('attack').innerText = data.stats[1].base_stat
        document.getElementById('defense').innerText = data.stats[2].base_stat
        document.getElementById('location').src = data.location_area_encounters
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
