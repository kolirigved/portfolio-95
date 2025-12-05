import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { Chess, Move } from 'chess.js';
import type { Square } from 'chess.js';

const AppShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  height: 100%;
  background: #d4d0c8;
  color: #000;
`;

const BoardWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 52px);
  grid-template-rows: repeat(8, 52px);
  border: 2px solid #000;
  box-shadow: inset 0 0 0 2px #808080;
`;

const SquareButton = styled.button<{
  $isLight: boolean;
  $isSelected: boolean;
  $isTarget: boolean;
  $isLastMove: boolean;
}>`
  width: 52px;
  height: 52px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 36px;
  background: ${(props) => (props.$isLight ? '#f0d9b5' : '#b58863')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #111;

  ${(props) => props.$isLastMove && 'box-shadow: inset 0 0 0 3px rgba(255, 214, 0, 0.7);'}
  ${(props) => props.$isSelected && 'box-shadow: inset 0 0 0 3px #1a73e8;'}

  &:hover {
    filter: brightness(1.1);
  }

  &:disabled {
    cursor: default;
    filter: grayscale(0.1);
  }
`;

const TargetDot = styled.span`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(60, 156, 251, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StatusPanel = styled.div`
  background: #fff;
  border: 2px solid #808080;
  padding: 10px;
  flex: 1;
  min-width: 180px;
`;

const Controls = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const ControlButton = styled.button`
  border: 2px solid #000;
  background: #c0c0c0;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  &:active {
    transform: translateY(1px);
  }
`;

const pieceSymbols: Record<string, string> = {
  wp: '♙',
  wr: '♖',
  wn: '♘',
  wb: '♗',
  wq: '♕',
  wk: '♔',
  bp: '♟',
  br: '♜',
  bn: '♞',
  bb: '♝',
  bq: '♛',
  bk: '♚',
};

const centerSquares = new Set(['d4', 'e4', 'd5', 'e5']);
const pieceScores: Record<string, number> = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const pickAiMove = (moves: Move[]) => {
  if (!moves.length) return null;
  const scored = moves.map((move) => {
    let score = 0;
    if (move.captured) {
      const key = move.captured.toLowerCase();
      score += pieceScores[key] ?? 0;
    }
    if (move.promotion) score += 8;
    if (move.san.includes('+')) score += 0.3;
    if (centerSquares.has(move.to)) score += 0.15;
    score += Math.random() * 0.05; // Slight randomness to keep it fresh
    return { move, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored[0].move;
};

const ChessApp = () => {
  const [fen, setFen] = useState(() => new Chess().fen());
  const [selected, setSelected] = useState<Square | null>(null);
  const [legalTargets, setLegalTargets] = useState<Square[]>([]);
  const [lastMove, setLastMove] = useState<{ from: Square; to: Square } | null>(null);
  const [aiThinking, setAiThinking] = useState(false);
  const aiTimerRef = useRef<number | null>(null);

  const game = useMemo(() => new Chess(fen), [fen]);
  const board = useMemo(() => game.board(), [game]);

  useEffect(() => {
    return () => {
      if (aiTimerRef.current) {
        clearTimeout(aiTimerRef.current);
      }
    };
  }, []);

  const statusMessage = useMemo(() => {
    if (game.isGameOver()) {
      if (game.isCheckmate()) {
        return game.turn() === 'w' ? 'Checkmate! Computer wins.' : 'Checkmate! You win!';
      }
      if (game.isDraw()) {
        if (game.isStalemate()) return 'Stalemate. Nobody wins.';
        if (game.isThreefoldRepetition()) return 'Draw by repetition.';
        if (game.isInsufficientMaterial()) return 'Draw: insufficient material.';
        return 'Draw.';
      }
    }
    if (aiThinking) return 'Computer is thinking...';
    if (game.inCheck()) return 'Check! Make your move.';
    return 'Your move';
  }, [game, aiThinking]);

  const scheduleAiMove = (startFen: string) => {
    if (aiTimerRef.current) {
      clearTimeout(aiTimerRef.current);
    }
    setAiThinking(true);
    aiTimerRef.current = window.setTimeout(() => {
      const aiGame = new Chess(startFen);
      if (aiGame.isGameOver()) {
        setAiThinking(false);
        return;
      }
      const moves = aiGame.moves({ verbose: true });
      const aiMove = pickAiMove(moves);
      if (aiMove) {
        aiGame.move(aiMove);
        setFen(aiGame.fen());
        setLastMove({ from: aiMove.from as Square, to: aiMove.to as Square });
      }
      setSelected(null);
      setLegalTargets([]);
      setAiThinking(false);
    }, 600);
  };

  const handleSquareClick = (square: Square) => {
    if (aiThinking || game.isGameOver()) return;

    if (selected && legalTargets.includes(square)) {
      const nextPosition = new Chess(fen);
      const move = nextPosition.move({ from: selected, to: square, promotion: 'q' });
      if (move) {
        setFen(nextPosition.fen());
        setLastMove({ from: move.from as Square, to: move.to as Square });
        setSelected(null);
        setLegalTargets([]);
        if (!nextPosition.isGameOver()) {
          scheduleAiMove(nextPosition.fen());
        }
      }
      return;
    }

    const piece = game.get(square);
    if (piece && piece.color === 'w') {
      const moves = game.moves({ square, verbose: true });
      setSelected(square);
      setLegalTargets(moves.map((m) => m.to as Square));
    } else {
      setSelected(null);
      setLegalTargets([]);
    }
  };

  const resetGame = () => {
    if (aiTimerRef.current) {
      clearTimeout(aiTimerRef.current);
      aiTimerRef.current = null;
    }
    const fresh = new Chess();
    setFen(fresh.fen());
    setSelected(null);
    setLegalTargets([]);
    setLastMove(null);
    setAiThinking(false);
  };

  const renderSquare = (rankIndex: number, fileIndex: number) => {
    const rank = 8 - rankIndex;
    const file = files[fileIndex];
    const square = `${file}${rank}` as Square;
    const piece = game.get(square);
    const key = piece ? `${piece.color}${piece.type}` : '';
    const isLight = (rankIndex + fileIndex) % 2 === 0;
    const isSelected = selected === square;
    const isTarget = legalTargets.includes(square);
    const isLastMove = lastMove ? lastMove.from === square || lastMove.to === square : false;

    return (
      <SquareButton
        key={square}
        $isLight={isLight}
        $isSelected={isSelected}
        $isTarget={isTarget}
        $isLastMove={isLastMove}
        onClick={() => handleSquareClick(square)}
      >
        {piece && pieceSymbols[key]}
        {isTarget && <TargetDot />}
      </SquareButton>
    );
  };

  return (
    <AppShell>
      <BoardWrapper>
        <BoardGrid>
          {board.map((row, rankIndex) =>
            row.map((_, fileIndex) => renderSquare(rankIndex, fileIndex))
          )}
        </BoardGrid>
        <StatusPanel>
          <strong>Status:</strong>
          <div style={{ margin: '6px 0 12px' }}>{statusMessage}</div>
          <div style={{ fontSize: 13, lineHeight: 1.4 }}>
            <div>You play as white against a nostalgic Win95 AI.</div>
            <div>Click a piece to highlight its legal moves.</div>
            <div>The AI prefers captures and center control.</div>
          </div>
        </StatusPanel>
      </BoardWrapper>
      <Controls>
        <ControlButton onClick={resetGame}>New Game</ControlButton>
        <ControlButton onClick={() => setSelected(null)}>Deselect</ControlButton>
      </Controls>
    </AppShell>
  );
};

export default ChessApp;
