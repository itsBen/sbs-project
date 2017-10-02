# Courier App


## Requirements
* `react-native-cli`
* `npm or yarn`

## Development

1. Install dependencies: `yarn` or `npm install`
2. Start simulator: `react-native run-ios`

### Directories

* `Scenes`: Orchestrate separate `Screens`
* `Screens`: Orchestrate several `Components` and provide them with `props`
* `Components`: Dump components which shouldn't have any state

### Tests

```sh
// Run all tests
yarn test
// or
npm test
```

#### `Components` are tested with jest snapshots

```sh
// Update snapshots
yarn test -- --u
// or
npm test -- --u
```

#### `Reducers` are tested with jest