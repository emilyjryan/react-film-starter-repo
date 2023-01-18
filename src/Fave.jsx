function Fave () {

  const handleClick = e => {
    e.stopPropagation()
     console.log("handling fave click")
    
     // call the fxn passed through props:
     props.onFaveToggle()
   }

    const action = props.isFave ? 'remove_from_queue' : 'add_to_queue'


    return (
      <div className={`film-row-fave ${action}`} onClick={this.handleClick}>

      <p className='material-icons'>add_to_queue</p>

    </div>
        
    );
}