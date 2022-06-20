import styled from 'styled-components';
import { categories } from "../../data";
import CategoryItem from '../categoryItem/CategoryItem';
import { mobile } from '../../responsive';
import "./categories.css"

const Conteiner = styled.div`
    ${mobile({ padding: "0px", flexDirection: "column" })}
`

const Categories = () => {
    return (
        <Conteiner className='categories'>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Conteiner>
    )
}

export default Categories