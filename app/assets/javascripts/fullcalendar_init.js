$(document).on('ready page:load', function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        header: {
        	left: 'prev',
        	center: 'title',
        	right: 'next'
        },
        events: 'https://www.google.com/calendar/feeds/epipg7tms366vrmm2t2l69i7lk%40group.calendar.google.com/public/basic'
    })

});