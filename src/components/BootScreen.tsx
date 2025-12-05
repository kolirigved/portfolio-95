import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const scanline = keyframes`
  0% { opacity: 0.15; }
  50% { opacity: 0.3; }
  100% { opacity: 0.15; }
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

//the lines should be left aligned
const BootOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, #000 0%, #020202 65%, #000 100%);
  color: #e9e9e9ff;
  font-family: 'Courier New', monospace;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  z-index: 9999;
  overflow: hidden;
`;

//left align 
const LinesContainer = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
  text-align: left;
  padding-left: 5px;
`;

const ScanlineOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.35) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  animation: ${scanline} 3s linear infinite;
`;

const Footer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #bbbbbbff;
  padding-left: 5px;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 12px;
  animation: ${blink} 1s steps(2, start) infinite;
`;


const lines = [
    'Microsoft (R) Windows 95',
    '',
  'Installing system files:',
  ' - Loading core components... Done.',
  ' - Initializing hardware... Done.',
  ' - Starting services... Done.',
  '',
  '',
  'Welcome to Windows 95!',
  '',
  '',
];

interface BootScreenProps {
  onFinish: () => void;
  durationMs?: number;
}

export const BootScreen = ({ onFinish, durationMs = 6500 }: BootScreenProps) => {
  const [visibleLines, setVisibleLines] = useState(1);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => setVisibleLines((prev) => prev + 1), 400);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  useEffect(() => {
    const completeTimer = setTimeout(onFinish, durationMs);
    return () => clearTimeout(completeTimer);
  }, [durationMs, onFinish]);

  return (
    <BootOverlay>
      <ScanlineOverlay />
      <LinesContainer>
        {lines.slice(0, visibleLines).map((line, index) => (
          <div key={line + index}>{line}</div>
        ))}
        {visibleLines < lines.length && <Cursor>_</Cursor>}
      </LinesContainer>
      <Footer>
        <span>Press DEL to skip SETUP</span>
      </Footer>
    </BootOverlay>
  );
};
