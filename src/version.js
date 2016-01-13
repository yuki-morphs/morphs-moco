const version = () => {
  const [major, minor, patch] = [0, 0, 3];

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
