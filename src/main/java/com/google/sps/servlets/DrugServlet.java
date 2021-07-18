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
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StringValue;
import com.google.cloud.datastore.StructuredQuery.OrderBy;
import com.google.cloud.datastore.Value;
import com.google.cloud.datastore.ValueType;
import com.google.gson.Gson;
import com.google.sps.data.Drug;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet responsible for getting drug info. */
@WebServlet("/list-drug-info")
public class DrugServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    String drugname = request.getParameter()
    Query<Entity> query =
        Query.newEntityQueryBuilder().setKind("Drug").setOrderBy(OrderBy.asc("Name")).build();
    QueryResults<Entity> results = datastore.run(query);

    List<Drug> drugInfo = new ArrayList<>();
    //Probably can implement a binary search to find the dat 
    while (results.hasNext()) {
      Entity entity = results.next();

      long id = entity.getKey().getId();
      String name = entity.getString("Name");
      List<String> aliases = getStringList(entity.getList("Aliases"));

      Drug drug = new Drug(id, name, aliases);
      drugInfo.add(drug);
    }

    Gson gson = new Gson();

    response.setContentType("application/json;");
    response.getWriter().println(gson.toJson(drugInfo));
  }

  List<String> getStringList(List<StringValue> values) {
    List<String> stringList = new ArrayList<String>(values.size());
    for(StringValue stringValue : values) {
        stringList.add(stringValue.get());
    }
    return stringList;
  }
}
