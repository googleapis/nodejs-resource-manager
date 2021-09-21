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

function main(tagKey) {
  // [START resourcemanager_update_tag_key_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The new definition of the TagKey. Only the `description` and `etag` fields
   *  can be updated by this request. If the `etag` field is not empty, it
   *  must match the `etag` field of the existing tag key. Otherwise,
   *  `FAILED_PRECONDITION` will be returned.
   */
  // const tagKey = ''
  /**
   *  Fields to be updated. The mask may only contain `description` or
   *  `etag`. If omitted entirely, both `description` and `etag` are assumed to
   *  be significant.
   */
  // const updateMask = ''
  /**
   *  Set as true to perform validations necessary for updating the resource, but
   *  not actually perform the action.
   */
  // const validateOnly = true

  // Imports the Resourcemanager library
  const {TagKeysClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new TagKeysClient();

  async function updateTagKey() {
    // Construct request
    const request = {
      tagKey,
    };

    // Run request
    const [operation] = await resourcemanagerClient.updateTagKey(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  updateTagKey();
  // [END resourcemanager_update_tag_key_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
