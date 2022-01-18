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

/* global window */
import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions, LROperation, PaginationCallback, GaxCall} from 'google-gax';

import { Transform } from 'stream';
import { RequestType } from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v3/tag_bindings_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './tag_bindings_client_config.json';
import { operationsProtos } from 'google-gax';
const version = require('../../../package.json').version;

/**
 *  Allow users to create and manage TagBindings between TagValues and
 *  different cloud resources throughout the GCP resource hierarchy.
 * @class
 * @memberof v3
 */
export class TagBindingsClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  operationsClient: gax.OperationsClient;
  tagBindingsStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of TagBindingsClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof TagBindingsClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest' ) {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      folderPathTemplate: new this._gaxModule.PathTemplate(
        'folders/{folder}'
      ),
      organizationPathTemplate: new this._gaxModule.PathTemplate(
        'organizations/{organization}'
      ),
      projectPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}'
      ),
      tagBindingPathTemplate: new this._gaxModule.PathTemplate(
        'tagBindings/{tag_binding}'
      ),
      tagKeyPathTemplate: new this._gaxModule.PathTemplate(
        'tagKeys/{tag_key}'
      ),
      tagValuePathTemplate: new this._gaxModule.PathTemplate(
        'tagValues/{tag_value}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listTagBindings:
          new this._gaxModule.PageDescriptor('pageToken', 'nextPageToken', 'tagBindings')
    };

    const protoFilesRoot = this._gaxModule.protobuf.Root.fromJSON(jsonProtos);

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.

    this.operationsClient = this._gaxModule.lro({
      auth: this.auth,
      grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined
    }).operationsClient(opts);
    const createTagBindingResponse = protoFilesRoot.lookup(
      '.google.cloud.resourcemanager.v3.TagBinding') as gax.protobuf.Type;
    const createTagBindingMetadata = protoFilesRoot.lookup(
      '.google.cloud.resourcemanager.v3.CreateTagBindingMetadata') as gax.protobuf.Type;
    const deleteTagBindingResponse = protoFilesRoot.lookup(
      '.google.protobuf.Empty') as gax.protobuf.Type;
    const deleteTagBindingMetadata = protoFilesRoot.lookup(
      '.google.cloud.resourcemanager.v3.DeleteTagBindingMetadata') as gax.protobuf.Type;

    this.descriptors.longrunning = {
      createTagBinding: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        createTagBindingResponse.decode.bind(createTagBindingResponse),
        createTagBindingMetadata.decode.bind(createTagBindingMetadata)),
      deleteTagBinding: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        deleteTagBindingResponse.decode.bind(deleteTagBindingResponse),
        deleteTagBindingMetadata.decode.bind(deleteTagBindingMetadata))
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.resourcemanager.v3.TagBindings', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = gax.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.tagBindingsStub) {
      return this.tagBindingsStub;
    }

    // Put together the "service stub" for
    // google.cloud.resourcemanager.v3.TagBindings.
    this.tagBindingsStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.resourcemanager.v3.TagBindings') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.resourcemanager.v3.TagBindings,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const tagBindingsStubMethods =
        ['listTagBindings', 'createTagBinding', 'deleteTagBinding'];
    for (const methodName of tagBindingsStubMethods) {
      const callPromise = this.tagBindingsStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        this.descriptors.page[methodName] ||
        this.descriptors.longrunning[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.tagBindingsStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'cloudresourcemanager.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'cloudresourcemanager.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloud-platform.read-only'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------

/**
 * Creates a TagBinding between a TagValue and a cloud resource
 * (currently project, folder, or organization).
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.resourcemanager.v3.TagBinding} request.tagBinding
 *   Required. The TagBinding to be created.
 * @param {boolean} [request.validateOnly]
 *   Optional. Set to true to perform the validations necessary for creating the resource,
 *   but not actually perform the action.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing
 *   a long running operation. Its `promise()` method returns a promise
 *   you can `await` for.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v3/tag_bindings.create_tag_binding.js</caption>
 * region_tag:cloudresourcemanager_v3_generated_TagBindings_CreateTagBinding_async
 */
  createTagBinding(
      request?: protos.google.cloud.resourcemanager.v3.ICreateTagBindingRequest,
      options?: CallOptions):
      Promise<[
        LROperation<protos.google.cloud.resourcemanager.v3.ITagBinding, protos.google.cloud.resourcemanager.v3.ICreateTagBindingMetadata>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  createTagBinding(
      request: protos.google.cloud.resourcemanager.v3.ICreateTagBindingRequest,
      options: CallOptions,
      callback: Callback<
          LROperation<protos.google.cloud.resourcemanager.v3.ITagBinding, protos.google.cloud.resourcemanager.v3.ICreateTagBindingMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  createTagBinding(
      request: protos.google.cloud.resourcemanager.v3.ICreateTagBindingRequest,
      callback: Callback<
          LROperation<protos.google.cloud.resourcemanager.v3.ITagBinding, protos.google.cloud.resourcemanager.v3.ICreateTagBindingMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  createTagBinding(
      request?: protos.google.cloud.resourcemanager.v3.ICreateTagBindingRequest,
      optionsOrCallback?: CallOptions|Callback<
          LROperation<protos.google.cloud.resourcemanager.v3.ITagBinding, protos.google.cloud.resourcemanager.v3.ICreateTagBindingMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          LROperation<protos.google.cloud.resourcemanager.v3.ITagBinding, protos.google.cloud.resourcemanager.v3.ICreateTagBindingMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>):
      Promise<[
        LROperation<protos.google.cloud.resourcemanager.v3.ITagBinding, protos.google.cloud.resourcemanager.v3.ICreateTagBindingMetadata>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.createTagBinding(request, options, callback);
  }
/**
 * Check the status of the long running operation returned by `createTagBinding()`.
 * @param {String} name
 *   The operation name that will be passed.
 * @returns {Promise} - The promise which resolves to an object.
 *   The decoded operation object has result and metadata field to get information from.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v3/tag_bindings.create_tag_binding.js</caption>
 * region_tag:cloudresourcemanager_v3_generated_TagBindings_CreateTagBinding_async
 */
  async checkCreateTagBindingProgress(name: string): Promise<LROperation<protos.google.cloud.resourcemanager.v3.TagBinding, protos.google.cloud.resourcemanager.v3.CreateTagBindingMetadata>>{
    const request = new operationsProtos.google.longrunning.GetOperationRequest({name});
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new gax.Operation(operation, this.descriptors.longrunning.createTagBinding, gax.createDefaultBackoffSettings());
    return decodeOperation as LROperation<protos.google.cloud.resourcemanager.v3.TagBinding, protos.google.cloud.resourcemanager.v3.CreateTagBindingMetadata>;
  }
/**
 * Deletes a TagBinding.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The name of the TagBinding. This is a String of the form:
 *   `tagBindings/{id}` (e.g.
 *   `tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2F123/tagValues/456`).
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing
 *   a long running operation. Its `promise()` method returns a promise
 *   you can `await` for.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v3/tag_bindings.delete_tag_binding.js</caption>
 * region_tag:cloudresourcemanager_v3_generated_TagBindings_DeleteTagBinding_async
 */
  deleteTagBinding(
      request?: protos.google.cloud.resourcemanager.v3.IDeleteTagBindingRequest,
      options?: CallOptions):
      Promise<[
        LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.resourcemanager.v3.IDeleteTagBindingMetadata>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>;
  deleteTagBinding(
      request: protos.google.cloud.resourcemanager.v3.IDeleteTagBindingRequest,
      options: CallOptions,
      callback: Callback<
          LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.resourcemanager.v3.IDeleteTagBindingMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  deleteTagBinding(
      request: protos.google.cloud.resourcemanager.v3.IDeleteTagBindingRequest,
      callback: Callback<
          LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.resourcemanager.v3.IDeleteTagBindingMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>): void;
  deleteTagBinding(
      request?: protos.google.cloud.resourcemanager.v3.IDeleteTagBindingRequest,
      optionsOrCallback?: CallOptions|Callback<
          LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.resourcemanager.v3.IDeleteTagBindingMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.resourcemanager.v3.IDeleteTagBindingMetadata>,
          protos.google.longrunning.IOperation|null|undefined,
          {}|null|undefined>):
      Promise<[
        LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.resourcemanager.v3.IDeleteTagBindingMetadata>,
        protos.google.longrunning.IOperation|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.deleteTagBinding(request, options, callback);
  }
/**
 * Check the status of the long running operation returned by `deleteTagBinding()`.
 * @param {String} name
 *   The operation name that will be passed.
 * @returns {Promise} - The promise which resolves to an object.
 *   The decoded operation object has result and metadata field to get information from.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v3/tag_bindings.delete_tag_binding.js</caption>
 * region_tag:cloudresourcemanager_v3_generated_TagBindings_DeleteTagBinding_async
 */
  async checkDeleteTagBindingProgress(name: string): Promise<LROperation<protos.google.protobuf.Empty, protos.google.cloud.resourcemanager.v3.DeleteTagBindingMetadata>>{
    const request = new operationsProtos.google.longrunning.GetOperationRequest({name});
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new gax.Operation(operation, this.descriptors.longrunning.deleteTagBinding, gax.createDefaultBackoffSettings());
    return decodeOperation as LROperation<protos.google.protobuf.Empty, protos.google.cloud.resourcemanager.v3.DeleteTagBindingMetadata>;
  }
 /**
 * Lists the TagBindings for the given cloud resource, as specified with
 * `parent`.
 *
 * NOTE: The `parent` field is expected to be a full resource name:
 * https://cloud.google.com/apis/design/resource_names#full_resource_name
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The full resource name of a resource for which you want to list existing
 *   TagBindings.
 *   E.g. "//cloudresourcemanager.googleapis.com/projects/123"
 * @param {number} [request.pageSize]
 *   Optional. The maximum number of TagBindings to return in the response. The server
 *   allows a maximum of 300 TagBindings to return. If unspecified, the server
 *   will use 100 as the default.
 * @param {string} [request.pageToken]
 *   Optional. A pagination token returned from a previous call to `ListTagBindings`
 *   that indicates where this listing should continue from.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [TagBinding]{@link google.cloud.resourcemanager.v3.TagBinding}.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed and will merge results from all the pages into this array.
 *   Note that it can affect your quota.
 *   We recommend using `listTagBindingsAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listTagBindings(
      request?: protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.resourcemanager.v3.ITagBinding[],
        protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest|null,
        protos.google.cloud.resourcemanager.v3.IListTagBindingsResponse
      ]>;
  listTagBindings(
      request: protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest,
      options: CallOptions,
      callback: PaginationCallback<
          protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest,
          protos.google.cloud.resourcemanager.v3.IListTagBindingsResponse|null|undefined,
          protos.google.cloud.resourcemanager.v3.ITagBinding>): void;
  listTagBindings(
      request: protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest,
      callback: PaginationCallback<
          protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest,
          protos.google.cloud.resourcemanager.v3.IListTagBindingsResponse|null|undefined,
          protos.google.cloud.resourcemanager.v3.ITagBinding>): void;
  listTagBindings(
      request?: protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest,
      optionsOrCallback?: CallOptions|PaginationCallback<
          protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest,
          protos.google.cloud.resourcemanager.v3.IListTagBindingsResponse|null|undefined,
          protos.google.cloud.resourcemanager.v3.ITagBinding>,
      callback?: PaginationCallback<
          protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest,
          protos.google.cloud.resourcemanager.v3.IListTagBindingsResponse|null|undefined,
          protos.google.cloud.resourcemanager.v3.ITagBinding>):
      Promise<[
        protos.google.cloud.resourcemanager.v3.ITagBinding[],
        protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest|null,
        protos.google.cloud.resourcemanager.v3.IListTagBindingsResponse
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.listTagBindings(request, options, callback);
  }

/**
 * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The full resource name of a resource for which you want to list existing
 *   TagBindings.
 *   E.g. "//cloudresourcemanager.googleapis.com/projects/123"
 * @param {number} [request.pageSize]
 *   Optional. The maximum number of TagBindings to return in the response. The server
 *   allows a maximum of 300 TagBindings to return. If unspecified, the server
 *   will use 100 as the default.
 * @param {string} [request.pageToken]
 *   Optional. A pagination token returned from a previous call to `ListTagBindings`
 *   that indicates where this listing should continue from.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Stream}
 *   An object stream which emits an object representing [TagBinding]{@link google.cloud.resourcemanager.v3.TagBinding} on 'data' event.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed. Note that it can affect your quota.
 *   We recommend using `listTagBindingsAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listTagBindingsStream(
      request?: protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest,
      options?: CallOptions):
    Transform{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    const defaultCallSettings = this._defaults['listTagBindings'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listTagBindings.createStream(
      this.innerApiCalls.listTagBindings as gax.GaxCall,
      request,
      callSettings
    );
  }

/**
 * Equivalent to `listTagBindings`, but returns an iterable object.
 *
 * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The full resource name of a resource for which you want to list existing
 *   TagBindings.
 *   E.g. "//cloudresourcemanager.googleapis.com/projects/123"
 * @param {number} [request.pageSize]
 *   Optional. The maximum number of TagBindings to return in the response. The server
 *   allows a maximum of 300 TagBindings to return. If unspecified, the server
 *   will use 100 as the default.
 * @param {string} [request.pageToken]
 *   Optional. A pagination token returned from a previous call to `ListTagBindings`
 *   that indicates where this listing should continue from.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Object}
 *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
 *   When you iterate the returned iterable, each element will be an object representing
 *   [TagBinding]{@link google.cloud.resourcemanager.v3.TagBinding}. The API will be called under the hood as needed, once per the page,
 *   so you can stop the iteration when you don't need more results.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v3/tag_bindings.list_tag_bindings.js</caption>
 * region_tag:cloudresourcemanager_v3_generated_TagBindings_ListTagBindings_async
 */
  listTagBindingsAsync(
      request?: protos.google.cloud.resourcemanager.v3.IListTagBindingsRequest,
      options?: CallOptions):
    AsyncIterable<protos.google.cloud.resourcemanager.v3.ITagBinding>{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    const defaultCallSettings = this._defaults['listTagBindings'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listTagBindings.asyncIterate(
      this.innerApiCalls['listTagBindings'] as GaxCall,
      request as unknown as RequestType,
      callSettings
    ) as AsyncIterable<protos.google.cloud.resourcemanager.v3.ITagBinding>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified folder resource name string.
   *
   * @param {string} folder
   * @returns {string} Resource name string.
   */
  folderPath(folder:string) {
    return this.pathTemplates.folderPathTemplate.render({
      folder: folder,
    });
  }

  /**
   * Parse the folder from Folder resource.
   *
   * @param {string} folderName
   *   A fully-qualified path representing Folder resource.
   * @returns {string} A string representing the folder.
   */
  matchFolderFromFolderName(folderName: string) {
    return this.pathTemplates.folderPathTemplate.match(folderName).folder;
  }

  /**
   * Return a fully-qualified organization resource name string.
   *
   * @param {string} organization
   * @returns {string} Resource name string.
   */
  organizationPath(organization:string) {
    return this.pathTemplates.organizationPathTemplate.render({
      organization: organization,
    });
  }

  /**
   * Parse the organization from Organization resource.
   *
   * @param {string} organizationName
   *   A fully-qualified path representing Organization resource.
   * @returns {string} A string representing the organization.
   */
  matchOrganizationFromOrganizationName(organizationName: string) {
    return this.pathTemplates.organizationPathTemplate.match(organizationName).organization;
  }

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {string} project
   * @returns {string} Resource name string.
   */
  projectPath(project:string) {
    return this.pathTemplates.projectPathTemplate.render({
      project: project,
    });
  }

  /**
   * Parse the project from Project resource.
   *
   * @param {string} projectName
   *   A fully-qualified path representing Project resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectName(projectName: string) {
    return this.pathTemplates.projectPathTemplate.match(projectName).project;
  }

  /**
   * Return a fully-qualified tagBinding resource name string.
   *
   * @param {string} tag_binding
   * @returns {string} Resource name string.
   */
  tagBindingPath(tagBinding:string) {
    return this.pathTemplates.tagBindingPathTemplate.render({
      tag_binding: tagBinding,
    });
  }

  /**
   * Parse the tag_binding from TagBinding resource.
   *
   * @param {string} tagBindingName
   *   A fully-qualified path representing TagBinding resource.
   * @returns {string} A string representing the tag_binding.
   */
  matchTagBindingFromTagBindingName(tagBindingName: string) {
    return this.pathTemplates.tagBindingPathTemplate.match(tagBindingName).tag_binding;
  }

  /**
   * Return a fully-qualified tagKey resource name string.
   *
   * @param {string} tag_key
   * @returns {string} Resource name string.
   */
  tagKeyPath(tagKey:string) {
    return this.pathTemplates.tagKeyPathTemplate.render({
      tag_key: tagKey,
    });
  }

  /**
   * Parse the tag_key from TagKey resource.
   *
   * @param {string} tagKeyName
   *   A fully-qualified path representing TagKey resource.
   * @returns {string} A string representing the tag_key.
   */
  matchTagKeyFromTagKeyName(tagKeyName: string) {
    return this.pathTemplates.tagKeyPathTemplate.match(tagKeyName).tag_key;
  }

  /**
   * Return a fully-qualified tagValue resource name string.
   *
   * @param {string} tag_value
   * @returns {string} Resource name string.
   */
  tagValuePath(tagValue:string) {
    return this.pathTemplates.tagValuePathTemplate.render({
      tag_value: tagValue,
    });
  }

  /**
   * Parse the tag_value from TagValue resource.
   *
   * @param {string} tagValueName
   *   A fully-qualified path representing TagValue resource.
   * @returns {string} A string representing the tag_value.
   */
  matchTagValueFromTagValueName(tagValueName: string) {
    return this.pathTemplates.tagValuePathTemplate.match(tagValueName).tag_value;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.tagBindingsStub!.then(stub => {
        this._terminated = true;
        stub.close();
        this.operationsClient.close();
      });
    }
    return Promise.resolve();
  }
}
