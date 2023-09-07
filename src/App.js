
import { useState } from "react";
const orders = [100,200,300];
function App() {
  
  //sử dụng fuction làm initial
  const [counter, setCounter] = useState(()=>{
    const sum = orders.reduce((prev,curr) => prev + curr);
    console.log(sum);
    return sum 
  })
  // hàm giảm giá trị
  const handleDecrease = () =>{
    setCounter(prevState => prevState-1)
 
  } 
  //viết hàm thay đổi thông tin của sinh viên
  const [modifier,setModifier] = useState({
    name : 'Nguyễn Thị Huyền',
    email: 'huyen@gmail.com',
    address: 'Nghệ An'
  })
  const handleModifier = () => {
    setModifier(prev => {
      return {
        ...prev,
        phone : 749459498474
      }  
      
    })
  }
  return (
    <div className="App" style={{paddingLeft : 20 + 'px'} }>
      <h1>{JSON.stringify(modifier)}</h1>
      <button onClick={handleModifier}>Thay đổi</button>
    </div>
  )
}

//BÀI TẬP RANDOM LẤY THƯỞNG----------------------------------------------------------------
// const gifts = [
//   'MacBook Pro',
//   'Vòng lắc bạc',
//   'Áo switter',
//   'Máy tính xách tay nhẹ gọn '
// ]
// function App() {
//   const [gift,setGift] = useState('Chưa có phần thưởng') 
//   const  handleGiveGift = () => {
//     const index = Math.floor(Math.random() * 4)
//     setGift(gifts[index])
    
//   }
//   return(
//     <div className="App" style={{paddingLeft : 20}}>
//       <h1>{gift}</h1>
//       <button onClick={handleGiveGift}>Lấy thưởng</button>
//     </div>
//   )
// }

//TWO-WAY BINDING : ràng buộc 2 chiều ----------------------------------------------------------------
//1. SỬ DỤNG TRONG THẺ INPUT

// function App(){
//   const [info, setInfo] = useState('')
//   const [email, setEmail] = useState('')

//   const handleSubmit = () => {
//     console.log({
//       info,email
//     })
//   }
//   return(
//     <div className="App" style={{paddingLeft: 30}}>
//       <input 
//       value={info}
//       onChange={e => setInfo(e.target.value)}
//       />
//       <input 
//       value={email}
//       onChange={e => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit} >Register</button>
//     </div>
//   )
// }

//2. SỬ DỤNG TRONG RADIO

//response từ API
// const courses = [
//   {
//     id : 1,
//     name : 'Javascript'
//   },
//   {
//     id : 2,
//     name : 'Java'
//   },
//   {
//     id : 3,
//     name : 'Html css'
//   },
//   {
//     id : 4,
//     name : 'SQL Server'
//   }
// ]
// function App(){
 
//  const [checked, setChecked] = useState(3)
//  console.log(checked)
//   const handleSubmit = () => {
//    //call API
//    console.log({id : checked})
//   }
//   return(
//     <div className="App" style={{padding: 50}}>
//       {
//         courses.map(course => (
//           <div key={course.id}>
//             <input type="radio" 
//             checked = {checked === course.id}
//             onChange={() => setChecked(course.id)}
//             /> 
//             {course.name}
//           </div>
//         ))
//       }
//       <button onClick={handleSubmit} >Register</button>
//     </div>
//   )
// }
//3. SỬ DỤNG TRONG CHECKBOX
// const courses = [
//     {
//       id : 1,
//       name : 'Javascript'
//     },
//     {
//       id : 2,
//       name : 'Java'
//     },
//     {
//       id : 3,
//       name : 'Html css'
//     },
//     {
//       id : 4,
//       name : 'SQL Server'
//     }
//   ] 
// function App(){
 
//   const [checked, setChecked] = useState([])
//   const handleSubmit = () => {
//     console.log({ids: checked})
//   }
//   const handleCheck = (id) => {
    
//     setChecked(prev => {
//       console.log('prev',prev)
//       console.log('checked',checked)
//       const isChecked = checked.includes(id);
//       if(isChecked){
//         return checked.filter(item => item !== id)
//       }else{
//         return [...prev, id];
//       }
//     })
//   }
//   return(
//     <div className="App" style={{padding: 50}}>
//       {
//         courses.map(course => (
//           <div key={course.id}>
//             <input type="checkbox" 
//             checked = {checked.includes(course.id)}
//             onChange={() => (handleCheck(course.id))}
//             /> 
//             {course.name}
//           </div>
//         ))
//       }
//       <button onClick={handleSubmit} >Register</button>
//     </div>
//   )
// }




export default App;
