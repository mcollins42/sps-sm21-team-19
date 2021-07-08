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

package main.java.com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

/** Servlet responsible for creating new tasks. */
@WebServlet("/new-Drug")
public class NewDrugServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Sanitize user input to remove HTML tags and JavaScript.
    String name = Jsoup.clean(request.getParameter("name"), Whitelist.none());
    String whatIs = Jsoup.clean(request.getParameter("whatIs"), Whitelist.none());
    String uses = Jsoup.clean(request.getParameter("uses"), Whitelist.none());
    String sideEffects = Jsoup.clean(request.getParameter("sideEffects"), Whitelist.none());
    String risks = Jsoup.clean(request.getParameter("risks"), Whitelist.none());  

    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Drug");
    FullEntity drugEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("name", name)
            .set("whatIs", whatIs)
            .set("uses", uses)
            .set("sideEffects", sideEffects)
            .set("risks", risks)
            .build();
    datastore.put(drugEntity);

    response.sendRedirect("/list-drugs.html");
  }
}
