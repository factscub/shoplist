import { useEffect, useState } from "react";
import '../../App.css'
import DropDownList from "./DropDownList";

function MainDropDown({ about, setArea, setCategory, area, category }) {

    const [dropDownShow, setDropDownShow] = useState(null)

    const [dropDownValue, setDropDownValue] = useState(null)

    useEffect(() => {

        if (about === 'Area') {
            setArea(() => {
                return {
                    didAreaSelect: dropDownShow,
                    selectedArea: dropDownValue
                }
            })


        }
        else if (about === 'Category') {
            setCategory(() => {
                return {
                    didCategorySelect: dropDownShow,
                    categorySelected: dropDownValue
                }
            })
        }
    }, [dropDownShow, dropDownValue])



    return (

        <>
            <label>{about}</label>
            <div className="size" onClick={() => setDropDownShow(!dropDownShow)

            }>
                {dropDownValue == null ? `Select ${about}` : dropDownValue}
            </div>

            {/* close or open the dropdown box based on dropdownshow value. */}
            {dropDownShow && <DropDownList about={about} setDropDownValue={setDropDownValue} setDropDownShow={setDropDownShow} />
            }

            {/* if the user didnt select any option it will display the required field */}
            {
                (dropDownValue === null && dropDownShow === false) && <p className="required label">Please fill out this field.</p>
            }

            {

                (about === 'Area' && area.didAreaSelect === false && area.selectedArea === false) && <p className="required label">Please fill out this field.</p>
            }

            {

                (about === 'Category' && category.didCategorySelect === false && category.categorySelected === false) && <p className="required label">Please fill out this field.</p>
            }
        </>

    );
}

export default MainDropDown;