### transform
Did not use through module, instead use stream2 api to create a transform stream class UpperCaseStream to solve the problem

### lines
Did not use through module, instead use custom stream based on stream2 api to transform 

### concat

Did not use concat-stream module, instead use custom stream based on stream2 api to transform

### http_server

Did not use through module, instead use custom stream based on stream2 api to transform 

### http_stream
Did not use through module, instead use stream2 api to create a transform stream class UpperCaseStream to solve the solution

### duplexer
Did not use duplexer module, instead use stream2 api to create a custom duplex stream class DuplexStream to solve the problem

### duplexer_redux
Did not use through module, use event-stream's through instead

### combiner
The pipeline done up here is different from nodeschool's, use highland, event-stream modules

### secretz 
Use tar-stream instead of through and tar modules
