// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as tagbindingsModule from '../src';

import {PassThrough} from 'stream';

import {protobuf, LROperation, operationsProtos} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

function stubLongRunningCall<ResponseType>(response?: ResponseType, callError?: Error, lroError?: Error) {
    const innerStub = lroError ? sinon.stub().rejects(lroError) : sinon.stub().resolves([response]);
    const mockOperation = {
        promise: innerStub,
    };
    return callError ? sinon.stub().rejects(callError) : sinon.stub().resolves([mockOperation]);
}

function stubLongRunningCallWithCallback<ResponseType>(response?: ResponseType, callError?: Error, lroError?: Error) {
    const innerStub = lroError ? sinon.stub().rejects(lroError) : sinon.stub().resolves([response]);
    const mockOperation = {
        promise: innerStub,
    };
    return callError ? sinon.stub().callsArgWith(2, callError) : sinon.stub().callsArgWith(2, null, mockOperation);
}

function stubPageStreamingCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    const pagingStub = sinon.stub();
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
        }
    }
    const transformStub = error ? sinon.stub().callsArgWith(2, error) : pagingStub;
    const mockStream = new PassThrough({
        objectMode: true,
        transform: transformStub,
    });
    // trigger as many responses as needed
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            setImmediate(() => { mockStream.write({}); });
        }
        setImmediate(() => { mockStream.end(); });
    } else {
        setImmediate(() => { mockStream.write({}); });
        setImmediate(() => { mockStream.end(); });
    }
    return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    let counter = 0;
    const asyncIterable = {
        [Symbol.asyncIterator]() {
            return {
                async next() {
                    if (error) {
                        return Promise.reject(error);
                    }
                    if (counter >= responses!.length) {
                        return Promise.resolve({done: true, value: undefined});
                    }
                    return Promise.resolve({done: false, value: responses![counter++]});
                }
            };
        }
    };
    return sinon.stub().returns(asyncIterable);
}

describe('v3.TagBindingsClient', () => {
    describe('Common methods', () => {
        it('has servicePath', () => {
            const servicePath = tagbindingsModule.v3.TagBindingsClient.servicePath;
            assert(servicePath);
        });

        it('has apiEndpoint', () => {
            const apiEndpoint = tagbindingsModule.v3.TagBindingsClient.apiEndpoint;
            assert(apiEndpoint);
        });

        it('has port', () => {
            const port = tagbindingsModule.v3.TagBindingsClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new tagbindingsModule.v3.TagBindingsClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.tagBindingsStub, undefined);
            await client.initialize();
            assert(client.tagBindingsStub);
        });

        it('has close method for the initialized client', done => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            assert(client.tagBindingsStub);
            client.close().then(() => {
                done();
            });
        });

        it('has close method for the non-initialized client', done => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.tagBindingsStub, undefined);
            client.close().then(() => {
                done();
            });
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
            const result = await client.getProjectId();
            assert.strictEqual(result, fakeProjectId);
            assert((client.auth.getProjectId as SinonStub).calledWithExactly());
        });

        it('has getProjectId method with callback', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
            const promise = new Promise((resolve, reject) => {
                client.getProjectId((err?: Error|null, projectId?: string|null) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(projectId);
                    }
                });
            });
            const result = await promise;
            assert.strictEqual(result, fakeProjectId);
        });
    });

    describe('createTagBinding', () => {
        it('invokes createTagBinding without error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.CreateTagBindingRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.createTagBinding = stubLongRunningCall(expectedResponse);
            const [operation] = await client.createTagBinding(request);
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createTagBinding as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes createTagBinding without error using callback', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.CreateTagBindingRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.createTagBinding = stubLongRunningCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.createTagBinding(
                    request,
                    (err?: Error|null,
                     result?: LROperation<protos.google.cloud.resourcemanager.v3.ITagBinding, protos.google.cloud.resourcemanager.v3.ICreateTagBindingMetadata>|null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const operation = await promise as LROperation<protos.google.cloud.resourcemanager.v3.ITagBinding, protos.google.cloud.resourcemanager.v3.ICreateTagBindingMetadata>;
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.createTagBinding as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes createTagBinding with call error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.CreateTagBindingRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.createTagBinding = stubLongRunningCall(undefined, expectedError);
            await assert.rejects(client.createTagBinding(request), expectedError);
            assert((client.innerApiCalls.createTagBinding as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes createTagBinding with LRO error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.CreateTagBindingRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.createTagBinding = stubLongRunningCall(undefined, undefined, expectedError);
            const [operation] = await client.createTagBinding(request);
            await assert.rejects(operation.promise(), expectedError);
            assert((client.innerApiCalls.createTagBinding as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes checkCreateTagBindingProgress without error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const expectedResponse = generateSampleMessage(new operationsProtos.google.longrunning.Operation());
            expectedResponse.name = 'test';
            expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
            expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')}

            client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
            const decodedOperation = await client.checkCreateTagBindingProgress(expectedResponse.name);
            assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
            assert(decodedOperation.metadata);
            assert((client.operationsClient.getOperation as SinonStub).getCall(0));
        });

        it('invokes checkCreateTagBindingProgress with error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const expectedError = new Error('expected');

            client.operationsClient.getOperation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.checkCreateTagBindingProgress(''), expectedError);
            assert((client.operationsClient.getOperation as SinonStub)
                .getCall(0));
        });
    });

    describe('deleteTagBinding', () => {
        it('invokes deleteTagBinding without error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.DeleteTagBindingRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.deleteTagBinding = stubLongRunningCall(expectedResponse);
            const [operation] = await client.deleteTagBinding(request);
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteTagBinding as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteTagBinding without error using callback', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.DeleteTagBindingRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.longrunning.Operation());
            client.innerApiCalls.deleteTagBinding = stubLongRunningCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteTagBinding(
                    request,
                    (err?: Error|null,
                     result?: LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.resourcemanager.v3.IDeleteTagBindingMetadata>|null
                    ) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const operation = await promise as LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.resourcemanager.v3.IDeleteTagBindingMetadata>;
            const [response] = await operation.promise();
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteTagBinding as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deleteTagBinding with call error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.DeleteTagBindingRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteTagBinding = stubLongRunningCall(undefined, expectedError);
            await assert.rejects(client.deleteTagBinding(request), expectedError);
            assert((client.innerApiCalls.deleteTagBinding as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteTagBinding with LRO error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.DeleteTagBindingRequest());
            request.name = '';
            const expectedHeaderRequestParams = "name=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteTagBinding = stubLongRunningCall(undefined, undefined, expectedError);
            const [operation] = await client.deleteTagBinding(request);
            await assert.rejects(operation.promise(), expectedError);
            assert((client.innerApiCalls.deleteTagBinding as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes checkDeleteTagBindingProgress without error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const expectedResponse = generateSampleMessage(new operationsProtos.google.longrunning.Operation());
            expectedResponse.name = 'test';
            expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
            expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')}

            client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
            const decodedOperation = await client.checkDeleteTagBindingProgress(expectedResponse.name);
            assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
            assert(decodedOperation.metadata);
            assert((client.operationsClient.getOperation as SinonStub).getCall(0));
        });

        it('invokes checkDeleteTagBindingProgress with error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const expectedError = new Error('expected');

            client.operationsClient.getOperation = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.checkDeleteTagBindingProgress(''), expectedError);
            assert((client.operationsClient.getOperation as SinonStub)
                .getCall(0));
        });
    });

    describe('listTagBindings', () => {
        it('invokes listTagBindings without error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.ListTagBindingsRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = [
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
            ];
            client.innerApiCalls.listTagBindings = stubSimpleCall(expectedResponse);
            const [response] = await client.listTagBindings(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listTagBindings as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listTagBindings without error using callback', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.ListTagBindingsRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = [
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
            ];
            client.innerApiCalls.listTagBindings = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.listTagBindings(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.resourcemanager.v3.ITagBinding[]|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listTagBindings as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes listTagBindings with error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.ListTagBindingsRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.listTagBindings = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.listTagBindings(request), expectedError);
            assert((client.innerApiCalls.listTagBindings as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listTagBindingsStream without error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.ListTagBindingsRequest());
            const expectedResponse = [
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
            ];
            client.descriptors.page.listTagBindings.createStream = stubPageStreamingCall(expectedResponse);
            const stream = client.listTagBindingsStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.cloud.resourcemanager.v3.TagBinding[] = [];
                stream.on('data', (response: protos.google.cloud.resourcemanager.v3.TagBinding) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            const responses = await promise;
            assert.deepStrictEqual(responses, expectedResponse);
            assert((client.descriptors.page.listTagBindings.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listTagBindings, request));
        });

        it('invokes listTagBindingsStream with error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.ListTagBindingsRequest());
            const expectedError = new Error('expected');
            client.descriptors.page.listTagBindings.createStream = stubPageStreamingCall(undefined, expectedError);
            const stream = client.listTagBindingsStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.cloud.resourcemanager.v3.TagBinding[] = [];
                stream.on('data', (response: protos.google.cloud.resourcemanager.v3.TagBinding) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            await assert.rejects(promise, expectedError);
            assert((client.descriptors.page.listTagBindings.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listTagBindings, request));
        });

        it('uses async iteration with listTagBindings without error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.ListTagBindingsRequest());
            const expectedResponse = [
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
              generateSampleMessage(new protos.google.cloud.resourcemanager.v3.TagBinding()),
            ];
            client.descriptors.page.listTagBindings.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: protos.google.cloud.resourcemanager.v3.ITagBinding[] = [];
            const iterable = client.listTagBindingsAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.descriptors.page.listTagBindings.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
        });

        it('uses async iteration with listTagBindings with error', async () => {
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.resourcemanager.v3.ListTagBindingsRequest());const expectedError = new Error('expected');
            client.descriptors.page.listTagBindings.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.listTagBindingsAsync(request);
            await assert.rejects(async () => {
                const responses: protos.google.cloud.resourcemanager.v3.ITagBinding[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.descriptors.page.listTagBindings.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
        });
    });

    describe('Path templates', () => {

        describe('folder', () => {
            const fakePath = "/rendered/path/folder";
            const expectedParameters = {
                folder: "folderValue",
            };
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.folderPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.folderPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('folderPath', () => {
                const result = client.folderPath("folderValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.folderPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchFolderFromFolderName', () => {
                const result = client.matchFolderFromFolderName(fakePath);
                assert.strictEqual(result, "folderValue");
                assert((client.pathTemplates.folderPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('organization', () => {
            const fakePath = "/rendered/path/organization";
            const expectedParameters = {
                organization: "organizationValue",
            };
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.organizationPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.organizationPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('organizationPath', () => {
                const result = client.organizationPath("organizationValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.organizationPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchOrganizationFromOrganizationName', () => {
                const result = client.matchOrganizationFromOrganizationName(fakePath);
                assert.strictEqual(result, "organizationValue");
                assert((client.pathTemplates.organizationPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('project', () => {
            const fakePath = "/rendered/path/project";
            const expectedParameters = {
                project: "projectValue",
            };
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.projectPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.projectPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('projectPath', () => {
                const result = client.projectPath("projectValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.projectPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchProjectFromProjectName', () => {
                const result = client.matchProjectFromProjectName(fakePath);
                assert.strictEqual(result, "projectValue");
                assert((client.pathTemplates.projectPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('tagBinding', () => {
            const fakePath = "/rendered/path/tagBinding";
            const expectedParameters = {
                tag_binding: "tagBindingValue",
            };
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.tagBindingPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.tagBindingPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('tagBindingPath', () => {
                const result = client.tagBindingPath("tagBindingValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.tagBindingPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchTagBindingFromTagBindingName', () => {
                const result = client.matchTagBindingFromTagBindingName(fakePath);
                assert.strictEqual(result, "tagBindingValue");
                assert((client.pathTemplates.tagBindingPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('tagKey', () => {
            const fakePath = "/rendered/path/tagKey";
            const expectedParameters = {
                tag_key: "tagKeyValue",
            };
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.tagKeyPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.tagKeyPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('tagKeyPath', () => {
                const result = client.tagKeyPath("tagKeyValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.tagKeyPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchTagKeyFromTagKeyName', () => {
                const result = client.matchTagKeyFromTagKeyName(fakePath);
                assert.strictEqual(result, "tagKeyValue");
                assert((client.pathTemplates.tagKeyPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('tagValue', () => {
            const fakePath = "/rendered/path/tagValue";
            const expectedParameters = {
                tag_value: "tagValueValue",
            };
            const client = new tagbindingsModule.v3.TagBindingsClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            client.pathTemplates.tagValuePathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.tagValuePathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('tagValuePath', () => {
                const result = client.tagValuePath("tagValueValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.tagValuePathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchTagValueFromTagValueName', () => {
                const result = client.matchTagValueFromTagValueName(fakePath);
                assert.strictEqual(result, "tagValueValue");
                assert((client.pathTemplates.tagValuePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });
    });
});
