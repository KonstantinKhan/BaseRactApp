import './app-info.css'

interface Props {
    totalEmployees: number
    increaseCount: number
}

const AppInfo = (props: Props) => {

    const {totalEmployees, increaseCount} = props

    return (
        <div className='app-info'>
            <h1>Учёт сотрудников в компании</h1>
            <h2>Общее число сотрудников: {totalEmployees}</h2>
            <h2>Премию получат: {increaseCount}</h2>
        </div>
    )
}

export default AppInfo