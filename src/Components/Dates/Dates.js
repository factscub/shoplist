
import '../../App.css'


function Dates({ children, setDate, dateValue , checkDates }) {
    return (
        <>
            <label>{children}</label>
            <input type="date" className="size" value={dateValue.selectedDate ? dateValue.selectedDate : ''} onChange={(e) => {
                setDate(() => {
                    return {
                        didDateSelected: true,
                        selectedDate: e.target.value
                    };
                });
            }} />


            {
                (children === 'Openig Date' && dateValue.didDateSelected === false && dateValue.selectedData === false) && <p className="required">Please fill out this field.</p>
            }


            {
                (children === 'Closing Date' && dateValue.didDateSelected === false && dateValue.selectedData === false) && <p className="required">Please fill out this field.</p>
            }

            {
               checkDates && <p className='required'>Please select valid dates</p>
            }



        </>

    );
}

export default Dates;