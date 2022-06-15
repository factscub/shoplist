
import saveData from "./saveData"
/////////// verify data and show if any field is empty or wrong /////////

const verifyData = (data, setStatesArray, statesValues) => {
    const [setShopNameVerification, setArea, setCategory, setOpeningDate, setClosingDate, setCheckDates] = setStatesArray
    const [shopNameVerification, area, category, openingDate, closingDate, checkDates] = statesValues



    //////////// shopname filed checking //////////////
    if (shopNameVerification.shopName === '' || shopNameVerification.shopName == null) {
        setShopNameVerification((prev) => {
            return {
                ...prev,
                empty: true
            }
        })
    }


    ////////// area field chekcing /////////////////
    if (area.selectedArea === null && area.didAreaSelect === null) {

        setArea((prev) => {
            return {
                ...prev,
                selectedArea: false,
                didAreaSelect: false,
            }
        })
    }

    //////////////category field checking //////////
    if (category.didCategorySelect === null && category.categorySelected === null) {
        setCategory((prev) => {
            return {
                ...prev,
                didCategorySelect: false,
                categorySelected: false
            }
        })
    }


    ///////// opening date field chekcing /////////

    if (openingDate.didDateSelected === null && openingDate.selectedDate === null) {
        setOpeningDate((prev) => {
            return {
                ...prev,
                didDateSelected: false,
                selectedData: false
            }
        })
    }

    /// closing date checking ///////

    if (closingDate.didDateSelected == null && closingDate.selectedData === null) {
        setClosingDate((prev) => {
            return {
                ...prev,
                didDateSelected: false,
                selectedData: false

            }
        })
    }

    const openedDate = data.openingDate.selectedDate
    const closedDate = data.closingDate.selectedDate

    if (openedDate !== null && closedDate !== null) {
        let flag = false

        let opd = new Date(openedDate.split('-').join('/'))
        let cld = new Date(closedDate.split('-').join('/'))
        opd = opd.getTime()
        cld = cld.getTime()
        const diff = cld - opd

        ////////// check if dates are valid ////////////
        if (diff < 0) {
            setCheckDates(true)

        }
        if (diff >= 0) {
            setCheckDates(false)
            if (data.area.selectedArea.length > 0 && data.category.categorySelected.length > 0 && (data.shopNameVerification.shopName !== null || data.shopNameVerification.shopName !== '')) {
                saveData(data)
                return true

            }
        }

    }


    return false
}

export default verifyData
