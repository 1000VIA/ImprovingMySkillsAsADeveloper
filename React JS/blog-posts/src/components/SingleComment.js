const SingleComment = (props) => {
    return(
        <div className='comment'>
            <a href='/' className='avatar'>
                <img src={props.image} alt="profile avatar"/>
            </a>
            <div className='content'>
                <a href='/' className='author' key='name'>
                    {props.name}
                </a>
                <div className='metadata'>
                    <span className='date'>
                        {props.date}
                    </span>
                </div>
                <div className='text'>
                    {props.text}
                </div>
            </div>
        </div> 
    )
} 

export default SingleComment;