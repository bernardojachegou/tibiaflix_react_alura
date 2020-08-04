/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const WatchContainer = styled.div`
margin: 50px 5%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
.frame {
    height: 100%;
}
`;

export const ResponsiveIframe = styled.iframe`
position: relative;
width: 100%;
height: calc(100vh - 200px);
`;
