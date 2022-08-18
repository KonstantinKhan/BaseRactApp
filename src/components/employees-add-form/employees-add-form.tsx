import './employees-add.css'
import {ChangeEvent, Component, FormEvent} from "react";

interface Props {
    onAdd: (name: string, salary: string) => void
}

interface State {
    name?: string
    salary?: string
}


class EmployeesAddForm extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (this.state.name && this.state.salary) {
            if (this.state.name.trim().length > 0
                && this.state.salary.trim().length > 0) {
                this.props.onAdd(this.state.name!, this.state.salary!)
                this.setState({
                    name: '',
                    salary: ''
                })
            }
        }
    }

    render() {
        const {name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}
                >
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="з/п в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-light"
                    >
                        Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm