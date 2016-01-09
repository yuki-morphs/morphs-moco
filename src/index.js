// Test destructuring
const [major, minor, patch] = [0, 0, 1];

const logger = () => {
  console.log(`version: ${major}.${minor}.${patch}`);
};

logger();
