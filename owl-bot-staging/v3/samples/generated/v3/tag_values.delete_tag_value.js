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

function main(name) {
  // [START cloudresourcemanager_v3_generated_TagValues_DeleteTagValue_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name for TagValue to be deleted in the format tagValues/456.
   */
  // const name = 'abc123'
  /**
   *  Optional. Set as true to perform the validations necessary for deletion, but not
   *  actually perform the action.
   */
  // const validateOnly = true
  /**
   *  Optional. The etag known to the client for the expected state of the TagValue. This
   *  is to be used for optimistic concurrency.
   */
  // const etag = 'abc123'

  // Imports the Resourcemanager library
  const {TagValuesClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new TagValuesClient();

  async function callDeleteTagValue() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await resourcemanagerClient.deleteTagValue(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteTagValue();
  // [END cloudresourcemanager_v3_generated_TagValues_DeleteTagValue_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
