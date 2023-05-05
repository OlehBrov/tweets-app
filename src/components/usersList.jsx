import { SimpleGrid } from '@chakra-ui/react'
// import styled from "styled-components"
import { UsersListItem } from "./usersListItem"

export const UsersList = ({props}) => {
    console.log('UsersList', props)
    return <SimpleGrid columns={2} spacing={10} listStyleType={'none'}>
        {props.map(el => <UsersListItem key={el.id} props={el} />)}
    </SimpleGrid>
}


// const UsersListStyled = styled.ul`
//     list-style: none;

// `

