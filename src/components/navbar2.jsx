import React, {useState} from 'react'

function Navbar2() {
  const [open,setopen] = useState(false);



  return (
    <div>
 <nav className="flex items-center justify-between px-4 py-3 bg-gray-800">
      <div className="flex items-center">
        <img
        onClick={()=>{setopen(!open)}}
          className="h-8 w-8"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
        />
        <div >
          <div className="ml-10 flex items-baseline space-x-4">
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Team
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Projects
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Calendar
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <div as="div">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
            />
          </div>
          <div align="end" className={`${open? 'active' : 'hidden'}  md:block ` }>
            <div href="#/action-1">Your Profile</div>
            <div href="#/action-2">Settings</div>
            <div href="#/action-3">Sign out</div>
          </div>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar2;