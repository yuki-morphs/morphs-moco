const version = () => {
  const [major, minor, patch] = [0, 0, 1];

  return {
    major,
    minor,
    patch,
    toString() {
      return `version: ${major}.${minor}.${patch}`;
    },
  };
};

export default version;
