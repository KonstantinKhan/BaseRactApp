import './search-panel.css'
import {Component, SyntheticEvent} from "react";

interface Props {
    onUpdateSearch: (term: string) => void
}

interface State {
    term: string
}

class SearchPanel extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e: SyntheticEvent) => {
        const term = (e.target as HTMLTextAreaElement).value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}
            />
        )
    }
}

export default SearchPanel