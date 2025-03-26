import { useEffect, useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Container, Typography } from "@mui/material";
import { supabase } from "../utils/supabaseClient";
import useColorStore from "../store/color";

function Calendar() {
  interface Event {
    id: string;
    summary: string;
    start: {
      dateTime?: string;
      date?: string;
    };
  }

  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { theme } = useColorStore();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data: session } = await supabase.auth.getSession();
        const accessToken = session?.session?.access_token;

        if (accessToken) {
          const response = await fetch("/api/google-calendar-events", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!response.ok) {
            console.error("Failed to fetch events:", response.status, response.statusText);
            return;
          }

          const responseBody = await response.text();
          try {
            const eventsData = JSON.parse(responseBody);
            if (eventsData?.items) {
              setEvents(eventsData.items);
            } else {
              console.warn("No events found in the response.");
              setEvents([]);
            }
          } catch (jsonError) {
            console.error("Failed to parse JSON response:", jsonError);
            console.error("Response body:", responseBody);
          }
        } else {
          console.warn("No session found. User might not be logged in.");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const renderEventsForDate = (date: Date) => {
    const filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.start?.dateTime || event.start?.date || 0);
      return eventDate.toDateString() === date.toDateString();
    });

    if (filteredEvents.length === 0) {
      return <Typography>No events for this date.</Typography>;
    }

    return filteredEvents.map((event) => (
      <Typography key={event.id} variant="body2">
        {event.summary} -{" "}
        {event.start?.dateTime
          ? new Date(event.start.dateTime).toLocaleTimeString()
          : "All Day"}
      </Typography>
    ));
  };

  return (
    <Container
      sx={{
        padding: 2,
        backgroundColor: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Calendar
      </Typography>
      <DateCalendar
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
        sx={{
          backgroundColor: theme === "light" ? "#f9f9f9" : "#333333",
          color: theme === "light" ? "#000000" : "#ffffff",
          borderRadius: 2,
          padding: 1,
          maxWidth: "100%",
          colorScheme: "revert"
        }}
      />
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">
          Events for {selectedDate?.toDateString() || "Selected Date"}:
        </Typography>
        {selectedDate ? (
          renderEventsForDate(selectedDate)
        ) : (
          <Typography>No date selected</Typography>
        )}
      </Box>
    </Container>
  );
}

export default Calendar;