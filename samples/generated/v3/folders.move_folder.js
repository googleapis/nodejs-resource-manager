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
  // [START resourcemanager_move_folder_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Folder to move.
   *  Must be of the form folders/{folder_id}
   */
  // const name = 'abc123'
  /**
   *  Required. The resource name of the folder or organization which should be the
   *  folder's new parent.
   *  Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
   */
  // const destinationParent = 'abc123'

  // Imports the Resourcemanager library
  const {FoldersClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new FoldersClient();

  async function moveFolder() {
    // Construct request
    const request = {
      name,
      destinationParent,
    };

    // Run request
    const [operation] = await resourcemanagerClient.moveFolder(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  moveFolder();
  // [END resourcemanager_move_folder_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
