import Counter from "./hook/Counter"
import ClassCounter from "./layout/ClassComponent/ClassCounter"
 
const App = () => {
  return (
      <>
          
          <h1 className="text-center my-5">Function Component</h1>
          <Counter /> 

           <h1 className="text-center my-5">Class Component</h1>
          <ClassCounter/>  

         
        
      </>
  )
}
export default App  