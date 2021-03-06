// Copyright 2019 Google LLC
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

package com.google.sps.data;

import java.util.List;

/** Just enough information about a drug to populate a searchable drug list. */
public final class Drug {

  private final long id;
  private final String name;
  private final List<String> aliases;

  public Drug(long id, String name, List<String> aliases) {
    this.id = id;
    this.name = name;
    this.aliases = aliases;
  }
}