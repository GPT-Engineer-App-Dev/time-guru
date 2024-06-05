import React, { useState, useEffect } from "react";
import { Container, VStack, Text, Button, HStack, Input } from "@chakra-ui/react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const Index = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputTime, setInputTime] = useState("");

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStart = () => {
    if (inputTime && !isNaN(inputTime)) {
      setTime(parseInt(inputTime, 10));
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setInputTime("");
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl">{formatTime(time)}</Text>
        <HStack spacing={4}>
          <Input placeholder="Enter time in seconds" value={inputTime} onChange={(e) => setInputTime(e.target.value)} />
          <Button onClick={handleStart} colorScheme="green" leftIcon={<FaPlay />}>
            Start
          </Button>
          <Button onClick={handlePause} colorScheme="yellow" leftIcon={<FaPause />}>
            Pause
          </Button>
          <Button onClick={handleReset} colorScheme="red" leftIcon={<FaRedo />}>
            Reset
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
