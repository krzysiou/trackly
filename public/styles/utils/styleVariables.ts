type Colors = {
  main: string;
  light: string;
};

type StyleVariables = {
  fontFamily: string;
  colors: Colors;
};

const styleVariables: StyleVariables = {
  fontFamily: 'Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
  colors: {
    main: '#000000',
    light: '#ffffff',
  },
};

export { styleVariables };
