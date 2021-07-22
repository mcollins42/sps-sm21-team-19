import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import DrugPageList from "./DrugPageList";
import DrugPageDesc from "./DrugPageDesc";
import '../css/DrugPage.css';

const DrugPage = () => {
 let [drugInfo, setDrugInfo] = useState({});
 let {id} = useParams();

 useEffect(() => {
  getDrugInfo(id)
  }, []);

 const getDrugInfo = async (id) => {
  const res = await fetch(`/list-drug-info?id=${id}`);
  const jsonResponse = await res.json()
  setDrugInfo(jsonResponse);
 }

 return (
       <div className="drug-page">
        <h1>{drugInfo["name"]}</h1>
        <p><b>Classification:</b> {drugInfo["classification"]}</p>
        <DrugPageDesc title="Description" desc={drugInfo["description"]}/>
        <DrugPageList title="Aliases" listItems={drugInfo["aliases"]}/>
        <DrugPageList title="Effects" listItems={drugInfo["effects"]}/>
        <DrugPageList title="Signs of Overdose" listItems={drugInfo["overdoseSigns"]}/>
       </div>
   )
};

export default DrugPage;