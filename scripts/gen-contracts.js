import codegen from '@cosmwasm/ts-codegen';

codegen({
  contracts: [
    {
      name: 'SG721',
      dir: './path/to/sg721/schema'
    },
    {
      name: 'Minter',
      dir: './path/to/Minter/schema'
    }
  ],
  outPath: './path/to/code/src/',
  options: {
    bundle: {
      bundleFile: 'index.ts',
      scope: 'contracts'
    },
    types: {
      enabled: true
    },
    client: {
      enabled: true
    },
    reactQuery: {
      enabled: true,
      optionalClient: true,
      version: 'v4',
      mutations: true
    },
    recoil: {
      enabled: false
    },
    messageComposer: {
      enabled: false
    }
  }
}).then(() => {
  console.log('✨ all done!');
});
