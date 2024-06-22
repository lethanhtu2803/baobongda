// import React, { useState } from 'react';
// import useSWR from 'swr';
// import { baoBongDaAPI, fetcher } from '../../helper/config';
// import { useParams } from 'react-router-dom';
// const TestAPI = () => {
//   // const [username, setUsername] = useState('acc3');
//   // const [password, setPassword] = useState('123');
//     const account = {
//       username: 'acc3',
//       fullName: 'doducthien',
//       password: '321',
//       email:  "acc@gmail.com",
//       status: 1,
//       created: '2024-05-06'
//     };
//     // const { data, error, isLoading } = useSWR(
//     //   baoBongDaAPI.login(account) , fetcher
//     // )
//     const [response, setResponse] = useState(null);
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       try {
//         const response = await fetch('http://localhost:8087/api/account/create', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(account)
//         });
    
//         const data = await response.json();
//         if (response.ok) {
//           console.log('Form submitted successfully!', data.status);
//         } else {
//           console.error('Error submitting form:', data.status);
//         }
//       } catch (error) {
//         console.error('Error submitting form:', error);
//       }
//     };
//   // render data
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={account.username}
         
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="password"
//           id="email"
//           name="email"
//           value={account.password}
          
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default TestAPI;