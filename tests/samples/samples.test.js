const {runner} = require('./testRunner');

runner({
  dir: 'cyclejs',
  name: 'Cyclejs',
});

runner({
  dir: 'react-and-favicon',
  name: 'React and favicon',
});

runner({
  dir: 'react-and-graphql',
  name: 'React and GraphQL',
});

runner({
  dir: 'react-and-scss',
  name: 'React and SCSS',
});
