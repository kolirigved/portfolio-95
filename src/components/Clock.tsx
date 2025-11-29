// src/components/Clock.tsx
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ClockContainer = styled.div`
  padding: 0 6px;
  font-size: 14px;
`;

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format: 3:12 PM
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  return <ClockContainer>{formatTime(time)}</ClockContainer>;
};