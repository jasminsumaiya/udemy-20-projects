window.addEventListener('load', init);
let ticketPrice;

function init(){
  const container = document.querySelector('.container'); 
  const movieSelect = document.getElementById('movie');

  container.addEventListener('click', onSeatClick);
  movieSelect.addEventListener('change', onChangeMovie);

  populateUI();
  updateSelectedCount();
}

function onSeatClick(e){
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
      }
}

function onChangeMovie(e){
  clearAllSeatSelection();
  ticketPrice = +e.target.value;
  console.log(e.target.selectedIndex);
  setMovieData(e.target.selectedIndex, +e.target.value);
  updateSelectedCount();
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seats = document.querySelectorAll('.row .seat:not(.occupied)');
  const count = document.getElementById('count');
  const total = document.getElementById('total');
  const movieSelect = document.getElementById('movie');
  ticketPrice = +movieSelect.value;

  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });
  
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    const seats = document.querySelectorAll('.row .seat:not(.occupied)');
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
    const movieSelect = document.getElementById('movie');
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

function clearAllSeatSelection(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  [...selectedSeats].forEach((item) => {
    item.classList.remove('selected');
  });
}

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

