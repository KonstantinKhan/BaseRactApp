import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

interface Props {
    data: {
        name: string,
        salary: number,
        increase: boolean,
        rise: boolean,
        id: number
    } [],
    onDelete: (id: number) => void,
    onToggleProp: (id: number, props: string) => void,
}

const EmployeesList = ({data, onDelete, onToggleProp}: Props) => {
    const elements = data.map(item => {
        const {id, ...itemsProps} = item
        return (
            <EmployeesListItem
                key={id}
                {...itemsProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle')!)}
            />
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList