# A multi-repo for @lawcket/websocket, plugins and middleware

Related blog [AWS Lambda Websockets](https://medium.com/@chrissullivan.dev/aws-lambda-websockets-9f10f667154f)

### packages

[@lawcket/websocket](https://github.com/icarus-sullivan/lawcket/tree/master/packages/websocket) - A pluggable API Gateway Lambda wrapper that mimics server websockets

[@lawcket/body-parser](https://github.com/icarus-sullivan/lawcket/tree/master/packages/body-parser) - Automatically parse incoming base64 or stringified json

[@lawcket/dynamo](https://github.com/icarus-sullivan/lawcket/tree/master/packages/dynamo) - Hooks into connect and close events to sync connections to Dynamo

[@lawcket/publisher](https://github.com/icarus-sullivan/lawcket/tree/master/packages/publisher) - Injects a send method during the message event. Used to send data to the client

