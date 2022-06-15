
////////// checking if shopName is valid i.e, it should not contain either leading and trailing empty spaces or numbers. /////
const shopNameVerify = (shopNameVerification, setShopNameVerification) => {
    const trimName = shopNameVerification.trim()
    const matches = trimName.match(/\d+/g);

    ///// chacking if shop name is empty /////
    if (trimName.length === 0) {
        setShopNameVerification((prev) => {
            return {
                ...prev,
                number: false,
                empty: true
            }
        })
    }

    /////// checking if shop name contains numbers. ///////////
    else if (matches) {
        setShopNameVerification((prev) => {
            return {
                ...prev,
                number: true,
                empty: false
            }
        })
    }

    else {
        setShopNameVerification((prev) => {
            return {
                ...prev,
                empty: false,
                number: false
            }
        })
    }
}


export default shopNameVerify