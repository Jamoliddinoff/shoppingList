import './Card.css'

function Card (props){
    console.log('pp',props.className)
    const classes = 'card'+props.className;
     return(
         <div className={classes}>
             {props.children}
         </div>
     )
}

export default  Card;