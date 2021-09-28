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

function main(name, destinationParent) {
  // [START cloudresourcemanager_v3_generated_Projects_MoveProject_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the project to move.
   */
  // const name = 'abc123'
  /**
   *  Required. The new parent to move the Project under.
   */
  // const destinationParent = 'abc123'

  // Imports the Resourcemanager library
  const {ProjectsClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new ProjectsClient();

  async function moveProject() {
    // Construct request
    const request = {
      name,
      destinationParent,
    };

    // Run request
    const [operation] = await resourcemanagerClient.moveProject(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  moveProject();
  // [END cloudresourcemanager_v3_generated_Projects_MoveProject_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
