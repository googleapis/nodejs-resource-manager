/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// sample-metadata:
//   title: List Projects
//   description: List all current projects.
//   usage: node listProjects.js

async function main() {
  // [START resource_list_projects]
  // Imports the Google Cloud client library
  const {Resource} = require('@google-cloud/resource');

  // Creates a client
  const resource = new Resource();

  async function listProjects() {
    // Lists all current projects
    const [projects] = await resource.getProjects();
    console.log('Projects:');
    projects.forEach(project => console.log(project.id));
  }
  listProjects();
  // [END resource_list_projects]
}

main().catch(console.error);
