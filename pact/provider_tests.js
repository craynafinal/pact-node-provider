// ./pact/provider_tests.js
const { Verifier } = require('@pact-foundation/pact');
const packageJson = require('../package.json');
const path = require('path');

let opts = {
    providerBaseUrl: 'http://localhost:3000',
    // pactBrokerUrl: 'https://adesso.pact.dius.com.au',
    // pactBrokerUsername: process.env.PACT_USERNAME,
    // pactBrokerPassword: process.env.PACT_PASSWORD,
    pactUrls: [
      path.resolve(
        process.cwd(),
        "pacts",
        "hero-consumer-hero-provider.json"
      ),
    ],
    provider: 'hero-provider',
    publishVerificationResult: true,
    providerVersion: packageJson.version,
    providerStatesSetupUrl: 'http://localhost:3000/provider_state'
};

new Verifier().verifyProvider(opts).then(function () {
    console.log("Pacts successfully verified!");
});