import { useContext } from 'react';
import { RootContextApi } from '../RootContextApi'

function DropDownList({ about, setDropDownValue, setDropDownShow }) {

    const { area, category } = useContext(RootContextApi)

    return (

        <div className='dropdown' onClick={(e) => {
            setDropDownValue(e.target.textContent)
            setDropDownShow(false)

        }}>


            {/* create area elements if it is area section */}
            {
                about === 'Area' && area.map(a => (
                    <div key={a} className='size'>{a}</div>
                ))
            }

            {/* create category elements if it is category section */}
            {
                about === 'Category' && category.map(a => (
                    <div key={a} className='size'>{a}</div>
                ))
            }

        </div>

    );
}

export default DropDownList;