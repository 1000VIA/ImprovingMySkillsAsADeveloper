import SingleComment from "./components/SingleComment";
import UserCard from "./components/UserCard";
import Profile1 from './image/pic-1.jpg'
import Profile2 from './image/pic-2.jpg'
import Profile3 from './image/pic-3.jpg'


const App = () =>{
    return(
        <div className='ui comments'>
         <UserCard>
            <SingleComment 
                name='Dayana' 
                date='Today at 17:00 PM' 
                text={`it's amazing`}
                image={Profile1}/>  
         </UserCard>
        
        <UserCard> 
            <SingleComment 
                name='Pily' 
                date='Today at 18:00 PM' 
                text='Great job'
                image={Profile2}/>
        </UserCard>
            
        <UserCard>
            <SingleComment 
                name='Milvia' 
                date='Today at 19:00 PM' 
                text='Thanks...'
                image={Profile3}/>
        </UserCard> 
                  
        </div>
    )

}

export default App;