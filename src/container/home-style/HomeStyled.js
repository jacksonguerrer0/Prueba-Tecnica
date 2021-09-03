import styled from 'styled-components'

export const ContainerHome = styled.main`
    margin: 2rem;
    display: grid;
    header{
        display: flex;
        background-color: #fffb9a;
        justify-content: space-between;
        h1{
            text-align: center;
            width: 80%;
        }
        button{
            border: none;
            padding: 0.5rem;
            background-color: #4cad1f;
        }
    }
    section{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        justify-content: center;
        gap: 1rem;
        margin-top: 4rem;
        .cardProduct{
            width: 300px;
            height: 400px;
            position: relative;
            img{
                width: 150px;
                height: 200px;
            }
            div{
                position: absolute;
                top: 0;
                right: 0;
            }
            p{
                height: 100px;
                overflow: auto;
            }
        }
    }
`