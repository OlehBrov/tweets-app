import { SimpleGrid } from '@chakra-ui/react'
import { UsersListItem } from "./usersListItem"

export const UsersList = ({props}) => {
    return <SimpleGrid columns={2} spacing={10} listStyleType={'none'} sx={gridStyle}>
        {props.map(el => <UsersListItem key={el.id} props={el} />)}
    </SimpleGrid>
}




const gridStyle = {
justifyItems: 'center'
}