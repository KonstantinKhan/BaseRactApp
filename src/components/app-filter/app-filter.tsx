import './app-filter.css'

interface Props {
    filter: string
    onFilterSelect: (filter: string) => void
}

const AppFilter = (props: Props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen100', label: 'з/п больше 1000$'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                className={`btn ${clazz}`}
                key={name}
                type="button"
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter