const SearchResultsItem = ({name, email}) => {

    return ( 
        <div  className='info-user' style={{ 
            backgroundColor: '#E8E7E7', 
            marginTop: 5, 
            marginBottom: 5, 
            padding: 10, 
            width:'100%'}}>
            <p>{name}</p>
            <p>{email}</p>
        </div>
     );
}
 
export default SearchResultsItem;