import React, { useState } from "react";
import { Container, VStack, Text, Button, HStack, Input } from "@chakra-ui/react";

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSetAlarm = () => {
    const alarmDate = new Date(alarmTime);
    const now = new Date();

    if (alarmDate > now) {
      const timeout = alarmDate.getTime() - now.getTime();
      setTimeout(() => {
        setMessage("Alarm ringing!");
      }, timeout);
      setMessage("Alarm set!");
    } else {
      setMessage("Please set a future time.");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl">Alarm Clock</Text>
        <HStack spacing={4}>
          <Input type="datetime-local" value={alarmTime} onChange={(e) => setAlarmTime(e.target.value)} />
          <Button onClick={handleSetAlarm} colorScheme="green">
            Set Alarm
          </Button>
        </HStack>
        {message && <Text>{message}</Text>}
      </VStack>
    </Container>
  );
};

export default Alarm;
