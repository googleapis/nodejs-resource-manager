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
  // [START cloudresourcemanager_v3_generated_Folders_ListFolders_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the organization or folder whose folders are
   *  being listed.
   *  Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
   *  Access to this method is controlled by checking the
   *  `resourcemanager.folders.list` permission on the `parent`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of folders to return in the response.
   *  If unspecified, server picks an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  Optional. A pagination token returned from a previous call to `ListFolders`
   *  that indicates where this listing should continue from.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Controls whether folders in the
   *  DELETE_REQUESTED google.cloud.resourcemanager.v3.Folder.State.DELETE_REQUESTED
   *  state should be returned. Defaults to false.
   */
  // const showDeleted = true

  // Imports the Resourcemanager library
  const {FoldersClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new FoldersClient();

  async function callListFolders() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await resourcemanagerClient.listFoldersAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListFolders();
  // [END cloudresourcemanager_v3_generated_Folders_ListFolders_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));