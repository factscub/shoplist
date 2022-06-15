import '../../App.css'
import { savedData } from "../../Helper/saveData";

function List({ searchedWord }) {

    let con = (savedData.length > 0 && (searchedWord.area))
    let byArea = savedData.filter(data => data.area.selectedArea.toLowerCase() === searchedWord.area.toLowerCase())
    let byCategory = savedData.filter(data => data.category.categorySelected.toLowerCase() === searchedWord.category.toLowerCase())

    const deleteList = (e) => {
        e.target.parentNode.className = " box active"
    }

    return (

        <div className="form" >

            {
                con ? byArea.map((data, index) => {
                    return (<div className='box ' key={index} >
                        <div className='details'><strong>ShopName : </strong>{data.shopNameVerification.shopName}</div>

                        <div className='details'><strong>Area : </strong>{data.area.selectedArea}</div>
                        <div className='details'><strong>Category : </strong>{data.category.categorySelected}</div>
                        <div className='details'><strong>Opening Date : </strong>{data.openingDate.selectedDate}</div>
                        <div className='details'><strong>Closing Date : </strong>{data.closingDate.selectedDate}</div>
                        <button className='size' data-type={index} onClick={(e) => {
                            deleteList(e)
                        }}>Delete</button>



                    </div>
                    )
                }) :
                    byCategory.map((data, index) => {
                        return (<div className='box ' key={index} >
                            <div className='details'><strong>ShopName : </strong>{data.shopNameVerification.shopName}</div>

                            <div className='details'><strong>Area : </strong>{data.area.selectedArea}</div>
                            <div className='details'><strong>Category : </strong>{data.category.categorySelected}</div>
                            <div className='details'><strong>Opening Date : </strong>{data.openingDate.selectedDate}</div>
                            <div className='details'><strong>Closing Date : </strong>{data.closingDate.selectedDate}</div>

                            <button className='size' datatype={index} onClick={(e) => {
                                deleteList(e)

                            }}>Delete</button>



                        </div>
                        )
                    })

            }

        </div>
    );
}

export default List;