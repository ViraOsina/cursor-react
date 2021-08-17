import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    .form-header, .form-body, .form-footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 25px;
    }
    .form-check{
        align-self: flex-start;
        display: flex;
        align-items: center;
    }
    .form-redirect{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .form-redirect .redirect-link{
        color: #90CAF9;
        font-size: 0.7rem;
        text-decoration: none;
        cursor: pointer;
    }
    &.sign-up .form-redirect{
        justify-content: flex-end;
    }
    .input-group{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

export const Icon = styled.div`
    background: #F48FB2;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    align-self: center;
    .icon-image{
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const Title = styled.h2`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    margin-top: 10px;
`;

export const Input = styled.input`
    width: 100%;
    color: #fff;
    border: 1px solid rgba(255,255,255, 0.3);
    border-radius: 4px;
    padding: 15px 10px;
    font-size: 0.8rem;
    margin-bottom: 15px;
    background: transparent;
    border-color: ${({ valid }) => valid === 'correct' ? '#53F96F' : valid === '' ? 'rgba(255, 255, 255, 0.3)' : '#F95359'};
    &:hover,
	&:focus {
		outline: none;
	}
    &::placeholder{
        color: rgba(255,255,255, 0.6);
    }
    .input-group &{
        flex: 0 1 50%;
    }
    .input-group &:first-child{
        margin-right: 10px;
    }
`;

export const Label = styled.label`
    font-size: 0.8rem;
    color: rgba(255,255,255, 0.8);
`;

export const Checkbox = styled.input`
   border: 2px solid #fff;
   background: #000;
   .form-check &{
       margin-right: 10px;
   }
`;

export const Button = styled.button`
    width: 100%;
    color: #000;
    text-align: center;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 10px;
    font-size: 0.8rem;
    margin-bottom: 15px;
    background: #90CAF9;
    font-weight: 500;
    cursor: pointer;
`;

export const HomeContent = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
`;

export const HomeTitle = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-size: 600;
    line-height: 1.5;
    margin-bottom: 20px;
`;

export const ErrorMessage = styled(Title)`
    color: #F95359;
    font-size: 0.9rem;
    display: ${props => props.show ? 'block' : 'none'};
`;