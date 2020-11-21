const core = require('@actions/core');

const testGetVariable = () => {

  return new Promise((resolve, reject) => {

    console.log('process.env');
    console.log(process.env);

    console.log('process.env["GITHUB_ENV"]');
    console.log(process.env['GITHUB_ENV']);

    core.exportVariable('TEST_VARIABLE', '100');

  });

};

testGetVariable().catch((err) => {
  console.log(err);
});
