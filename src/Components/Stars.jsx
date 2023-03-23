import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import styled from 'styled-components';

const Stars = ({stars, reviews}) => {
    const ratingStar = Array.from({length: 5}, (elem, index) => {
        const halfStar = index + 0.5;
        // debugger;
        return (
            <span key={index} className='myspan'>
                {
                    stars >= index + 1
                    ? (<FaStar className="icon" />)
                    : stars >= halfStar
                    ? (<FaStarHalfAlt className='icon' />)
                    : (<AiOutlineStar className='icon' />)
                }
            </span>
        )
    })
    return (
    <div>
        <Wrapper>
            <div className='rating flexProperty'>
                <span title={stars}>{ratingStar}</span>
                <p>({reviews} customer review)</p>
            </div>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
    .rating{
        justify-content: flex-start;
        gap: 0.2rem;

        .icon{
            font-size: 1.2rem;
            color: ${({theme}) => theme.colors.baseColor};
            /* outline: 2px solid red; */
        }



        p{
            padding-left: 0.3rem;
        }
    }
`;

export default Stars
