import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchJson } from '../js/fetchJson'
import DrugPageList from "./DrugPageList";

const DrugPage = () => {

 let {id} = useParams();

 // const [drugInfo, setDrugInfo] = useEffect(
 //     await fetchJson(`/list-drug-info?id=${id}`)
 //     , []);

 const drugInfo = {"id":1,"name":"Methadone",
  "classification":"Opioid",
  "aliases":["Fizzies","Amidone","Chocolate Chip Cookies"],
  "safetyDescription":"Methadone is safe and effective, when taken as prescribed. Methadone medication is specifically tailored for the individual patient (and doses are often adjusted and readjusted) and is never to be shared with or given to others. ",
  "drugWarningSigns":["sdasd","asd","sample","asdasdas"],
  "description":"sample desc",
  "effects":["Low heart rate","Slow breathing rate","Cooler skin temperature","Constricted pupils","Relaxed muscles","Sweating","Sleepy","Respiratory or Cardiac arrest."],
  "overdoseSigns":["sample","Sample","sample","Constricted pupils"],
  "legalLocations":["sda","Sample","sample","Constricted pupils"],
  "decriminalizedLocations":["sample","sadasd","sample","asdasda"]
 };




 return (
     <div className="drug-page">
      <h1>{drugInfo["name"]}</h1>
      <DrugPageList title="Aliases:" listItems={drugInfo["aliases"]}/>
      <p>Classification: {drugInfo["classification"]}</p>
      {drugInfo["safetyDescription"] ? <p><strong>Safety Description</strong> {drugInfo["safetyDescription"]}</p> : null}
      <DrugPageList title="Signs of Overdose:" listItems={drugInfo["overdoseSigns"]}/>

     </div>
 )
}

export default DrugPage;