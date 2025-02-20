import React from 'react'

const NAvbar = () => {
    return (
        <nav className='flex justify-between p-2 bg-gray-500  '>
            <div className=" flex justify-start">
                Thug-TODO
            </div>
            <div className="flex justify-end ">

                <ul className='flex gap-10 hover:cursor-pointer'>
                    <li className=' hover:font-medium '>Home</li>
                    <li className=' hover:font-medium '>To-do List</li>
                </ul>
            </div>

        </nav>
    )
}

export default NAvbar
