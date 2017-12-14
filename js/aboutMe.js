$(document).ready(function(){
  var timesheetArray = [];
  
  new Timesheet('timesheet', 2017, 2017,[
  ['08/2017','08/2017', '9:00a.m - Woke up to the lovely sounds of the birds chirping in the morning', 'lorem'],
  ['08/2017','08/2017', '9:30a.m - Had a massive bowl of Captain Crunch and finished the entire box. "This is going to be a great day I thought"', 'ipsum'],
  ['08/2017','08/2017', '10:00a.m - Began marathoning Stranger Things', 'lorem'],
  ['08/2017', '08/2017', '10:15a.m - Looked outside at the beautiful weather and thought to myself "this is the life" as I sat nice and cool in the nice A/C', 'dolor'],
  ['08/2017', '08/2017', '10:45a.m - Decided to take a random selfie because I was feeling good', 'default'],
  ['08/2017', '08/2017', '12:00p.m - Got a phone call to come in to work....Why did I pick up the phone?', 'sit'],
  ['08/2017', '08/2017', '2:00p.m - Driving to work wondering what I am doing with my life', 'ipsum'],
  ['08/2017', '08/2017', '4:00p.m - Watching people have fun outside', 'sit'],
  ['08/2017', '08/2017', '6:00p.m - Lunch time...The best part of work', 'lorem'],
  ['08/2017', '08/2017', '9:45p.m - Glaring at the clock..Move faster!!!', 'dolor'],
  ['08/2017', '08/2017', '11:00p.m - Slept my sorrows away', 'sit']
  ]);

  $('.addEvent').on('click', function() {
    timesheetArray.push(['12/2017','12/2017', $('#timesheetMessage').val(), 'lorem']);

    new Timesheet('userTimesheet', 2017, 2020, timesheetArray);
  });
});
