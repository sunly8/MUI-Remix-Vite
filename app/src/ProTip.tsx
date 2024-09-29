import * as React from 'react';
import { styled, keyframes } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@remix-run/react';
import { Box } from '@mui/material';

const AnimationContainer = styled('div')({
  width: '100%',
  height: '400px',
  background: 'black',
  position: 'relative',
  overflow: 'hidden',
});

const Star = styled('div')({
  position: 'absolute',
  background: 'white',
  borderRadius: '50%',
});

const UFO = styled('div')({
  width: '80px',
  height: '40px',
  background: 'linear-gradient(135deg, #00ffff, #0080ff)',
  borderRadius: '50% 50% 0 0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) rotate(-45deg)',
  boxShadow: '0 0 20px #00ffff',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '50%',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '50% 50% 0 0',
    top: '0',
    left: '0',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '20px',
    height: '20px',
    background: '#ffff00',
    borderRadius: '50%',
    bottom: '-5px',
    left: '50%',
    transform: 'translateX(-50%)',
    boxShadow: '0 0 10px #ffff00',
  },
});

// 添加 Logo SVG 组件
const LogoSVG = () => (
  <svg width="80" height="80" viewBox="0 0 141.732 141.732">
    {/* SVG 路径内容 */}
    <polyline style={{ fill: '#D0CCE5' }} points="1.546,19.435 24.656,65.654 47.765,19.435 " />
    <path style={{ fill: 'url(#SVGID_1_)' }} d="M109.377,19.503H63.185L6.559,122.348c0,0,15.542-0.095,30.799,0
    c27.471-53.243,40.038-81.828,59.33-81.733c15.515,0.082,20.379,6.902,20.379,28.082c0,17.336-8.994,28.666-21.737,28.666H56.813
    l-9.062,19.482h61.626c16.303,0,30.799-14.455,30.799-30.813V50.234C140.176,33.876,125.735,19.503,109.377,19.503z" />
    <path style={{ fill: '#D0CCE5' }} d="M109.336,19.503H63.144L6.518,122.348c0,0,15.556-0.095,30.813,0
    c27.457-53.243,36.69-78.328,58.017-83.032c27.429-6.048,44.774,10.918,44.774,10.918C140.149,33.876,125.694,19.503,109.336,19.503
    z" />
    <defs>
      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="111.1986" y1="873.4295" x2="136.9846" y2="828.7727"
        gradientTransform="matrix(1 0 0 1 -19.25 -799.95)">
        <stop offset="0" style={{ stopColor: '#D4CDF4' }} />
        <stop offset="1" style={{ stopColor: '#394283' }} />
      </linearGradient>
    </defs>
  </svg>
);

// 添加动画效果
const pulse = keyframes`
  0% { transform: scale(.5); opacity: .6; }
  50% { transform: scale(2); opacity: 0.3;  }
  100% { transform: scale(1); opacity: .6; }
`;

const rotate = keyframes`
  0% { transform: rotate3d(1, 1, 1, -20deg); }
  50% { transform: rotate3d(.1, .5, .1, 20deg); }
  100% { transform: rotate3d(1, 1, 1, -20deg); }

`;

const Logo = styled('div')({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'translate3d(-10%, -20%, -50%)',
  animation: `${pulse} 1s infinite ease-in-out, ${rotate} 10s infinite linear`,
  '& svg': {
    filter: 'drop-shadow(0 0 10px #00ffff)',
    transformStyle: 'preserve-3d',
    perspective: '1000px',
  },
});

interface StarProps {
  x: number;
  y: number;
  size: number;
  speed: number;
}

export default function ProTip() {
  const [stars, setStars] = React.useState<StarProps[]>([]);
  const [textPosition, setTextPosition] = React.useState({ x: 50, y: 50 });

  React.useEffect(() => {
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.8 + 0.1,
    }));
    setStars(newStars);

    const animateStars = () => {
      setStars(prevStars =>
        prevStars.map(star => ({
          ...star,
          x: star.x > 100 ? 0 : star.x + star.speed,
        }))
      );

      // 添加文字动画
      setTextPosition(prev => ({
        x: Math.sin(Date.now() / 1000) * 10 + 50,
        y: Math.cos(Date.now() / 1000) * 10 + 50,
      }));
    };

    const animationId = setInterval(animateStars, 50);

    return () => clearInterval(animationId);
  }, []);

  return (
    <Box sx={{ borderRadius: 5, overflow: 'hidden' }}>
      {/* <Typography variant="h5" sx={{ mb: 2 }}>
        科幻星空动画
      </Typography> */}
      <Link to="/">
        <AnimationContainer>
          {stars.map((star, index) => (
            <Star
              key={index}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
            />
          ))}
          <Logo>
            <LogoSVG />
          </Logo>
          <Typography
            variant="caption"
            sx={{
              mb: 2,
              position: 'absolute',
              left: `${textPosition.x}%`,
              top: `${textPosition.y}%`,
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textShadow: '0 0 5px #00ffff',
              fontFamily: 'monospace',
              fontSize: '1.2rem',
            }}
          >
            YourData
          </Typography>
        </AnimationContainer>
      </Link>
    </Box>
  );
}
