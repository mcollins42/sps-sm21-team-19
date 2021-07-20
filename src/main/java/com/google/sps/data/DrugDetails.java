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

/** The full details for a drug. This will be displayed on the single drug page. */
public final class DrugDetails {

  private final long id;
  private final String name;
  private final String classification;
  private final List<String> aliases;
  private final String safetyDescription;
  private final List<String> drugWarningSigns;
  private final String description;
  private final List<String> effects;
  private final List<String> overdoseSigns;
  private final List<String> legalLocations;
  private final List<String> decriminalizedLocations;

  public DrugDetails(long id, String name, String classification, List<String> aliases, String safetyDescription, List<String> drugWarningSigns, String description, List<String> effects, List<String> overdoseSigns, List<String> legalLocations, List<String> decriminalizedLocations) {
    this.id = id;
    this.name = name;
    this.classification = classification;
    this.aliases = aliases;
    this.safetyDescription = safetyDescription;
    this.drugWarningSigns = drugWarningSigns;
    this.description = description;
    this.effects = effects;
    this.overdoseSigns = overdoseSigns;
    this.legalLocations = legalLocations;
    this.decriminalizedLocations = decriminalizedLocations;
  }

}