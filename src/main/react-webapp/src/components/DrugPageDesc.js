import '../css/DrugPage.css'


// reusable component to display basic info
const DrugPageDesc = ({title, desc}) => {

 if(!desc){
  return null;
 }

 return(
 	 <div className="drug-page-desc">
		  <strong>{title}</strong>
		  <p>{desc}</p>
 	 </div>
 )
};

export default DrugPageDesc;