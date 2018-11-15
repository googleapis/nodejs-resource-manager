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

const proxyquire = require(`proxyquire`).noPreserveCache();
const Resource = proxyquire(`@google-cloud/resource`, {});
const sinon = require(`sinon`);
const assert = require(`assert`);
const tools = require(`@google-cloud/nodejs-repo-tools`);

const resource = new Resource();

before(tools.stubConsole);
after(tools.restoreConsole);

it(`should list projects`, () => {
  const resourceMock = {
    getProjects: async () => {
      return await resource.getProjects().then(async ([projects]) => {
        assert.ok(Array.isArray(projects));
        await new Promise(r => setTimeout(r, 200));
        assert.ok(console.log.called);
        assert.deepStrictEqual(console.log.firstCall.args, [`Projects:`]);
        projects.map((project, i) =>
          assert.deepStrictEqual(console.log.getCall(i + 1).args, [project.id])
        );

        return [projects];
      });
    },
  };

  proxyquire(`../quickstart`, {
    '@google-cloud/resource': {
      Resource: sinon.stub().returns(resourceMock),
    },
  });
});
