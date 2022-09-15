import codegen from '@cosmwasm/ts-codegen';

codegen({
  contracts: [
    {
      name: 'SG721',
      dir: './contracts/stargaze-sg721/schema'
    },
    {
      name: 'Minter',
      dir: './contracts/stargaze-minter/schema'
    }
  ],
  outPath: './src/',
  options: {
    bundle: {
      bundleFile: 'index.ts',
      scope: 'contracts'
    }
  }
}).then(() => {
  console.log('✨ all done!');
});
