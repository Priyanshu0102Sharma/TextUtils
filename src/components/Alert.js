import React from 'react'

function Alert(props) {

const capitalise=(word)=>{
const lower=word.toLowerCase();
return lower.charAt(0).toUpperCase() + lower.slice(1);
}

  return (
    //cummulative layout shift rokne ke liye kyoki jb bhi alert ata hai site neeche ho jati hai usko htane ke liye hm alert ko size daal denge

    <div style={{height:'3.5rem'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
     
     </div>
    } 
</div>
   
  )
}

export default Alert
