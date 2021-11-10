// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(parent) {
  // [START cloudresourcemanager_v3_generated_TagKeys_ListTagKeys_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the new TagKey's parent.
   *  Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of TagKeys to return in the response. The server allows
   *  a maximum of 300 TagKeys to return. If unspecified, the server will use 100
   *  as the default.
   */
  // const pageSize = 1234
  /**
   *  Optional. A pagination token returned from a previous call to `ListTagKey`
   *  that indicates where this listing should continue from.
   */
  // const pageToken = 'abc123'

  // Imports the Resourcemanager library
  const {TagKeysClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new TagKeysClient();

  async function callListTagKeys() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await resourcemanagerClient.listTagKeysAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListTagKeys();
  // [END cloudresourcemanager_v3_generated_TagKeys_ListTagKeys_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));