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

package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.IncompleteKey;
import com.google.cloud.datastore.KeyFactory;
import com.google.cloud.datastore.StringValue;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

/** Servlet responsible for creating new tasks. */
@WebServlet("/new-drug")
public class NewDrugServlet extends HttpServlet {

  private static final String LIST_DELIMITER = "\\|";

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Sanitize user input to remove HTML tags and JavaScript.
    String name = getCleanParameter(request, "name");
    String classification = getCleanParameter(request, "classification");
    List<StringValue> aliases = splitString(getCleanParameter(request, "aliases"));
    String safetyDescription = getCleanParameter(request, "safetyDescription");
    List<StringValue> drugWarningSigns = splitString(getCleanParameter(request, "drugWarningSigns"));
    String description = getCleanParameter(request, "description");
    List<StringValue> effects = splitString(getCleanParameter(request,"effects"));
    List<StringValue> overdoseSigns = splitString(getCleanParameter(request, "overdoseSigns"));
    List<StringValue> legalLocations = splitString(getCleanParameter(request, "legalLocations"));
    List<StringValue> decriminalizedLocations = splitString(getCleanParameter(request, "decriminalizedLocations"));


    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Drug");
    FullEntity drugEntity = 
        Entity.newBuilder(keyFactory.newKey())
            .set("Name", name)
            .set("Classification", classification)
            .set("Aliases", aliases)
            .set("SafetyDescription", safetyDescription)
            .set("DrugWarningSigns", drugWarningSigns)
            .set("Description", description)
            .set("Effects", effects)
            .set("OverdoseSigns", overdoseSigns)
            .set("LegalLocations", legalLocations)
            .set("DecriminalizedLocations", decriminalizedLocations)
            .build();

    datastore.put(drugEntity);

    response.sendRedirect("/list-drugs.html");
  }

  private String getCleanParameter(HttpServletRequest request, String parameterName) {
    return Jsoup.clean(request.getParameter(parameterName), Whitelist.none());
  }

  private List<StringValue> splitString(String input) {
      List<StringValue> list = new ArrayList<StringValue>();
      String[] strings = input.split(LIST_DELIMITER);
      for (String s : strings) {
          list.add(StringValue.of(s.trim()));
      }
      return list;
  }
}
