
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Router/Router';
import 'react-photo-view/dist/react-photo-view.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="">
       <RouterProvider router={router}>
        <ToastContainer />      
       </RouterProvider>
    </div>
  );
}

export default App;
