import '../css/DrugPage.css'

const DrugPageList = ({title, listItems}) => {

 if (!listItems){
  return null;
 }

 return(
 	 <div className="drug-page-list">
	  <strong>{title}</strong>
	  <ul>
		{listItems.map(item => <li>{item}</li>)}
	  </ul>
	 </div>
 )



}
export default DrugPageList;