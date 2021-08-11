const base = window.location.origin;
const url = `${base}/schedule/events`;

const deleteEvent = function(id) {
  $.ajax({
    url,
    method : 'DELETE',
    dataType: 'json',
    data : {
      id
    }
  }).then(() => {
    alert('Success');
    location.reload();
  }).catch((e) => alert(e.message));
}

const addEvent = function() {
  const time = $('#time').val();
  const message = $('#message').val();
  console.log(time, message);
  if (!time) return alert('Please input a time!');
  if (!message) return alert('Please input a message!');
  const splitTime = time.split(':');
  let offset = 5;
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  if (
    (month > 3 || (month === 3 && day > 14)) &&
    (month < 10 || (month === 10 && day < 7))
  ) {
    offset = 4;
  }
  const payload = {
    hour : (parseInt(splitTime[0]) + offset) % 24,
    minute : parseInt(splitTime[1]),
    text : message
  };
  $.ajax({
    url,
    method : 'POST',
    dataType : 'json',
    data : {
      events : [ payload ]
    }
  }).then(() => {
    $('#time').val('');
    $('#message').val('');
    alert('success');
    location.reload();
  }).catch((e) => alert(e.message));
};

const bindInputs = function() {
  $('.remove-event-button').on('click', function() {
    const { id } = $(this).data();
    deleteEvent(id);
  });
  $('#new-event').on('submit', (e) => {
    e.preventDefault();
    addEvent();
  })
}


// $(function() {
$(document).ready(function(){
  bindInputs();
});
