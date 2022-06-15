import { useEffect, useState } from "react";
import '../App.css'
import Dates from "../Components/Dates/Dates";
import MainDropDown from '../Components/DropDown/MainDropDown'
import verifyData from "../Helper/VerifyData";
import shopNameVerify from "../Helper/ShopNameVerify";

import { useNavigate } from 'react-router-dom'

const RegisterShopDetails = () => {

    //////////// list of specificaions ////////
    const ShopDetails = ['Area', 'Category']

    // /// shop name states ////////
    const [shopNameVerification, setShopNameVerification] = useState({ shopName: null, empty: false, number: false })

    // //// area states /////////
    const [area, setArea] = useState({ didAreaSelect: null, selectedArea: null })

    /////////category states /////////
    const [category, setCategory] = useState({ didCategorySelect: null, categorySelected: null })

    ///////// openingdate states ///////
    const [openingDate, setOpeningDate] = useState({ didDateSelected: null, selectedDate: null })

    /////// closingdata states ////////
    const [closingDate, setClosingDate] = useState({ didDateSelected: null, selectedData: null })

    //////// check dates are valid ////////
    const [checkDates, setCheckDates] = useState(null)
    //////////set states array/////////
    const setStatesArray = [setShopNameVerification, setArea, setCategory, setOpeningDate, setClosingDate, setCheckDates]

    //////// states values ///////////
    const statesValues = [shopNameVerification, area, category, openingDate, closingDate, checkDates]

    const navigate = useNavigate()
    const [submittedData, setSubmittedData] = useState(null)

    useEffect(() => {
        if (shopNameVerification.shopName !== null) {
            shopNameVerify(shopNameVerification.shopName, setShopNameVerification)
        }
        setSubmittedData(false)
    }, [shopNameVerification.shopName, area, category, openingDate, closingDate])


    return (
        <>
            <form >

                <div className=" head">Add Shop Details</div>
                <label >Shop Name</label>

                {/* Taking shopName as input.  */}
                <input type='text'
                    className="inputText"
                    placeholder="Shop name"
                    value={shopNameVerification.shopName ? shopNameVerification.shopName : ''}
                    onChange={(e) => setShopNameVerification((prev) => {
                        return {
                            ...prev,
                            shopName: e.target.value
                        }
                    })}
                />

                {/* Show this message if it is empty input. */}

                {
                    shopNameVerification.empty && <p className="required">Please fill out this field</p>
                }
                {/* Show this message if it is the input contains numbers. */}
                {
                    shopNameVerification.number && <p className="required">Name should not contain NUMBERS</p>
                }

                {/* Loading area and categroy sections. */}

                {
                    ShopDetails.map((shopDetail) =>
                        <MainDropDown
                            key={shopDetail}
                            about={shopDetail}
                            setArea={setArea}
                            area={area}
                            category={category}
                            setCategory={setCategory}
                        />)
                }


                {/* opening date of the shop */}

                <Dates
                    setDate={setOpeningDate}
                    dateValue={openingDate}
                    checkDates={checkDates}

                >Openig Date
                </Dates>

                {/* closing date of the shop */}
                <Dates
                    setDate={setClosingDate}
                    dateValue={closingDate}

                >Closing Date
                </Dates>

                <button className="size btn" onClick={(e) => {
                    e.preventDefault()
                    const data = {
                        shopNameVerification,
                        area,
                        category,
                        openingDate,
                        closingDate
                    }
                    setSubmittedData(verifyData(data, setStatesArray, statesValues))

                }}>{submittedData ? "Details Added..." : "Add Shop Details"}</button>

                <button className="size btn" onClick={() => {
                    navigate('/filter')
                }}> Search by filter </button>



            </form>
        </>


    )
}

export default RegisterShopDetails;