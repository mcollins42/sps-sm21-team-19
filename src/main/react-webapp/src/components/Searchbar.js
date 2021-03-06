import {ReactSearchAutocomplete} from 'react-search-autocomplete';
import {useHistory} from 'react-router-dom';
import {useEffect, useState} from "react";

const Searchbar = () => {

 const [drugs, setDrugs] = useState([])

 useEffect(() => {
  const getData = async () => {
	const data = await fetch('/list-drugs')
	const allDrugs = await data.json()
	setDrugs(allDrugs)
  }
  getData()
 }, [])

 let history = useHistory();

 const handleOnSelect = (item) => {
  // redirect the user to the selected site
  history.push(`/drug/${item.id}`);
 }

 const formatResult = (item) => {
  return item;
 }

 return (
	  <div className="search-bar-wrapper">
		<ReactSearchAutocomplete
			 items={drugs}
			 fuseOptions={{keys: ["name", "aliases"]}}
			 resultStringKeyName="name"
			 onSelect={handleOnSelect}
			 autoFocus
			 formatResult={formatResult}
		/>
	  </div>
 )
}

export default Searchbar;