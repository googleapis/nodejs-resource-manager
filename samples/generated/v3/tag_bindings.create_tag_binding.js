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

function main(tagBinding) {
  // [START resourcemanager_create_tag_binding_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The TagBinding to be created.
   */
  // const tagBinding = ''
  /**
   *  Optional. Set to true to perform the validations necessary for creating the resource,
   *  but not actually perform the action.
   */
  // const validateOnly = true

  // Imports the Resourcemanager library
  const {TagBindingsClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new TagBindingsClient();

  async function createTagBinding() {
    // Construct request
    const request = {
      tagBinding,
    };

    // Run request
    const [operation] = await resourcemanagerClient.createTagBinding(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createTagBinding();
  // [END resourcemanager_create_tag_binding_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
