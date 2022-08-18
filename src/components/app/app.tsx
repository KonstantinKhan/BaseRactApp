import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css'

interface Employee {
    name: string
    salary: number
    increase: boolean
    rise: boolean
    id: number
}

interface Props {

}

interface State {
    data: Employee[],
    maxId: number
    term: string
    filter: string
}

class App extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            data: [
                {name: 'John', salary: 1000, increase: true, rise: false, id: 1},
                {name: 'Alex', salary: 1200, increase: false, rise: true, id: 2},
                {name: 'Michael', salary: 800, increase: false, rise: false, id: 3},
            ],
            maxId: 4,
            term: '',
            filter: 'all'
        }
    }

    deleteItem = (id: number) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name: string, salary: string) => {

        const item = {
            name: name,
            salary: parseInt(salary),
            increase: false,
            rise: false,
            id: this.state.maxId
        }
        this.setState(({data, maxId}) => {
                const newArr = [...data, item]
                return {
                    data: newArr,
                    maxId: maxId + 1
                }
            }
        )
    }

    onToggleProp = (id: number, prop: string) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {
                        ...item, [prop]: !item[prop as keyof typeof data[0]]
                    }
                }
                return item
            })
        }))
    }

    getIncreaseCount = () => {
        return this.state.data.filter(item => item.increase).length
    }

    searchEmployees = (items: Employee[], term: string) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term: string) => {
        this.setState({
            term
        })
    }

    filterPost = (items: Employee[], filter: string) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'moreThen100':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter: string) => {
        this.setState({filter})
    }


    render() {

        const {data, term, filter} = this.state
        const visibleData = this.filterPost(this.searchEmployees(data, term), filter)
        return (
            <div className="app">
                <AppInfo
                    increaseCount={this.getIncreaseCount()}
                    totalEmployees={this.state.data.length}
                />
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}

export default App