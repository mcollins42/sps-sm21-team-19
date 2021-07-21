

const DrugPageList = ({title, listItems}) => {

 if (!listItems){
  return null;
 }

 return(
 	 <div>
	  <h1>{title}</h1>
	  <ul>
		{listItems.map(item => <li>{item}</li>)}
	  </ul>
	 </div>
 )



}
export default DrugPageList;