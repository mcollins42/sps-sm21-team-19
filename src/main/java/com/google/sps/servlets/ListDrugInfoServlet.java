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

import com.google.cloud.datastore.*;
import com.google.gson.Gson;
import com.google.sps.data.DrugDetails;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


//Servlet responsible for getting drug info.

@WebServlet("/list-drug-info")
public class ListDrugInfoServlet extends HttpServlet {

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    String Name = request.getParameter("Name");
    Query<Entity> query = Query.newEntityQueryBuilder()
            .setKind("Drug")
            .setFilter(StructuredQuery.PropertyFilter.gt("Name", Name))
            .setLimit(1)
            .build();
    QueryResults<Entity> results = datastore.run(query);

		Entity entity = results.next();
		long id = entity.getKey().getId();
		String name = entity.getString("Name");
		String classification = entity.getString("Classification");
		List<String> aliases = getStringList(entity.getList("Aliases"));
		String safetyDescription = entity.getString("SafetyDescription");
		List<String> drugWarningSigns = getStringList(entity.getList("DrugWarningSigns"));
		String description = entity.getString("Description");
		List<String> effects = getStringList(entity.getList("Effects"));
		List<String> overdoseSigns = getStringList(entity.getList("OverdoseSigns"));
		List<String> legalLocations = getStringList(entity.getList("LegalLocations"));
		List<String> decriminalizedLocations = getStringList(entity.getList("DecriminalizedLocations"));

		DrugDetails drugDetails = new DrugDetails(id, name, classification, aliases, safetyDescription, drugWarningSigns, description, effects, overdoseSigns, legalLocations, decriminalizedLocations);

		Gson gson = new Gson();

		response.setContentType("application/json;");
		response.getWriter().println(gson.toJson(drugDetails));
	}

	List<String> getStringList(List<StringValue> values) {
		List<String> stringList = new ArrayList<>(values.size());
		for (StringValue stringValue : values) {
			stringList.add(stringValue.get());
		}
		return stringList;
	}
}
