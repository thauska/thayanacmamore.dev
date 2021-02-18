import styled from 'styled-components';

const ProfileImg = styled.img`
    border-radius: 50%;
    border: 8px solid ${({ theme }) => theme.colors.primary};
    width: 100%;
    max-width: 20rem;
    height: auto;
    margin: 2rem 1rem;
`;

export default ProfileImg;