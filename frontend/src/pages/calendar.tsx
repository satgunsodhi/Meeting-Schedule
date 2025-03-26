import { useEffect, useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Typography } from "@mui/material";
import { supabase } from "../utils/supabaseClient";
import useColorStore from '../store/color';

function Calendar() {
  const [events, setEvents] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { theme } = useColorStore();

  useEffect(() => {
    const fetchEvents = async () => {
      const { data: session } = await supabase.auth.getSession();
      if (session?.session?.access_token) {
        const response = await fetch("/api/google-calendar-events", {
          headers: {
            Authorization: `Bearer ${session.session.access_token}`,
          },
        });
        const eventsData = await response.json();
        setEvents(eventsData.items || []);
      }
    };

    fetchEvents();
  }, []);

  const renderEventsForDate = (date: Date) => {
    const filteredEvents = events.filter((event) =>
      new Date(event.start.dateTime || event.start.date).toDateString() ===
      date.toDateString()
    );
    return filteredEvents.map((event) => (
      <Typography key={event.id} variant="body2">
        {event.summary} - {new Date(event.start.dateTime).toLocaleTimeString()}
      </Typography>
    ));
  };

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Calendar
      </Typography>
      <DateCalendar
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
      />
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">
          Events for {selectedDate?.toDateString() || 'Selected Date'}:
        </Typography>
        {selectedDate ? renderEventsForDate(selectedDate) : <Typography>No date selected</Typography>}
      </Box>
    </Box>
  );
}

export default Calendar;